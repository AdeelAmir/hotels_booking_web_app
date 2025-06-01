import { CurrencySymbols } from './common.modules';
const moment = require('moment');

/**
 * @typedef {Object} CurrencyRate
 * @property {string} currency_code
 * @property {number} currency_rate_gbp
 */

/**
 * @typedef {Object} SupplierDetails
 * @property {string} name
 * @property {string} property_ref
 * @property {string} room_type_code
 * @property {string} supplier_room_type
 * @property {string} reference1
 * @property {string} reference2
 */

/**
 * @typedef {Object} Price
 * @property {number} amount
 * @property {string} currency
 * @property {number} amount_gbp
 */

/**
 * @typedef {Object} MealPlanPrice
 * @property {Price} price
 * @property {SupplierDetails} supplier
 */

/**
 * @typedef {Object} MealPlanOption
 * @property {string} plan
 * @property {MealPlanPrice[]} prices
 * @property {Price} cheapest_price
 * @property {Price} [meal_plan_difference]
 */

/**
 * Normalize meal codes
 */
const normalizeMealBasis = (mealCode: string): string => {
    const roomOnlyCodes = ['Room Only', 'No Meals'];
    return roomOnlyCodes.includes(mealCode) ? 'Room Only' : mealCode;
};

/**
 * Convert amount from currency to GBP
 */
export const convertToGBP = (amount: number, currency: string, findCurrencyData: any): number => {
    let newPrice = 0;
    const currencyCodePrice = findCurrencyData[`currency_rate_${currency.toLowerCase()}`];
    if (currencyCodePrice !== undefined) {
        newPrice = amount * currencyCodePrice;
    }
    return newPrice;
};

export const checkRefundableStatus = (data:any): any => {
    let status;

    let currentDate = moment();
    let startDate = moment(data.StartDate);
    if (currentDate.isSameOrAfter(startDate)) {
        status = "Not Refundable";
    } else {
        status = "Refundable";
    }
    return status;
};

const calculateTotalCost = (baseCost: number, adminCommission: number, iVectorFee: number, stripeFee: number): number => {
    const commission = baseCost * (adminCommission / 100);
    const iVectorCommission = baseCost * (iVectorFee / 100);
    const stripeCommission = (commission + iVectorCommission) * (stripeFee / 100);
    let finalPrice = baseCost + commission + iVectorCommission + stripeCommission;
    finalPrice = Math.round(finalPrice); // Round the result
    return finalPrice;
}

/**
 * Generate supplier details
 */
const createSupplierDetails = (room: any) => ({
    name: room.Supplier,
    property_ref: room.SupplierPropertyReference,
    room_type_code: room.RoomTypeCode,
    supplier_room_type: room.SupplierRoomType,
    reference1: room.SupplierReference1,
    reference2: room.SupplierReference2
});

/**
 * Process hotel rates with currency conversion and meal plan grouping
 */
const processHotelRates = (setting: any, rateData: any, currencyRates: any) => {
    let symbol: any = CurrencySymbols();
    symbol = symbol.find((item: any) => item.currency_code == currencyRates.currency_code);
    let adminCommission = setting.length > 0 ? setting[0].admin_commission : 0;
    let stripeFee = setting.length > 0 ? setting[0].stripe_fee : 0;
    let iVectorFee = setting.length > 0 ? setting[0].ivector_fee : 0;

    const groupRooms = (rates: any) => {
        const roomGroups = new Map<string, Map<string, any[]>>();

        rates.forEach((rateSet: any) => {
            rateSet.RoomTypes.forEach((room: any) => {
                const roomType = room.RoomType;
                const mealPlan = normalizeMealBasis(room.MealBasisCode);
                const price = room.TotalCost;
                let priceGBP = convertToGBP(price, room.CurrencyCode, currencyRates);
                priceGBP = calculateTotalCost(priceGBP, adminCommission, iVectorFee, stripeFee);
                const refundableStatus = room.CancellationTerms.length > 0 ? checkRefundableStatus(room.CancellationTerms[0]) : "Not Refundable";
                if (!roomGroups.has(roomType)) roomGroups.set(roomType, new Map());
                if (!roomGroups.get(roomType)!.has(mealPlan)) roomGroups.get(roomType)!.set(mealPlan, []);

                roomGroups.get(roomType)!.get(mealPlan)!.push({
                    price,
                    price_gbp: priceGBP,
                    currency: room.CurrencyCode,
                    refundableTerms: room.CancellationTerms,
                    refundableStatus: refundableStatus,
                    supplier: createSupplierDetails(room)
                });
            });
        });

        const processedRooms: any[] = [];

        roomGroups.forEach((mealPlans, roomType) => {
            const allOptions = Array.from(mealPlans.values()).flat();
            
            const cheapestOption = allOptions.reduce((min, curr) =>
                curr.price_gbp < min.price_gbp ? curr : min
            );

            const mealOptions = Array.from(mealPlans.entries()).map(([mealPlan, options]) => {
                const sortedOptions = options.sort((a, b) => a.price_gbp - b.price_gbp);
                const cheapestMealOption = sortedOptions[0];

                const mealOption: any = {
                    plan: mealPlan,
                    prices: sortedOptions.map(option => ({
                        price: {
                            amount: option.price_gbp,
                            currency: currencyRates.currency_code,
                            currency_code: symbol.currency_symbol
                        },
                        supplier: option.supplier
                    })),
                    cheapest_price: {
                        amount: cheapestMealOption.price_gbp,
                        currency: currencyRates.currency_code,
                        currency_code: symbol.currency_symbol
                    },
                    refundableTerms: cheapestMealOption.refundableTerms,  // Adding refundableTerms here
                    refundableStatus: cheapestMealOption.refundableStatus // Adding refundableStatus here
                };

                if (cheapestMealOption.price_gbp > cheapestOption.price_gbp) {
                    mealOption.meal_plan_difference = {
                        amount: cheapestMealOption.price_gbp - cheapestOption.price_gbp,
                        currency: currencyRates.currency_code,
                        currency_code: symbol.currency_symbol
                    };
                }

                return mealOption;
            });

            // Get refundableStatus from the cheapestOption (first item in the sorted options)
            const refundableStatus = cheapestOption.refundableStatus;

            processedRooms.push({
                room_name: roomType,
                base_price: {
                    refundableTerms: cheapestOption.refundableTerms,
                    refundableStatus: refundableStatus,
                    amount: cheapestOption.price_gbp,
                    currency: currencyRates.currency_code,
                    currency_code: symbol.currency_symbol
                },
                supplier: cheapestOption.supplier,
                meal_options: mealOptions.sort((a, b) =>
                    a.cheapest_price.amount - b.cheapest_price.amount
                )
            });
        });

        return processedRooms; // Return the array of room objects
    };

    return {
        rooms: groupRooms(rateData.PropertyResults) // Return the grouped room data
    };
};



/**
 * Main function to process hotel rate data with currency conversion
 */
export const RoomTypeProcess = async (setting: any, currencyRates: any, rateData: any) => {
    try {
        const processedData = await processHotelRates(setting, rateData, currencyRates);
        return JSON.stringify(processedData, (_, value) => typeof value === 'number' ? value : value, 2);
    } catch (error) {
        throw new Error(`Error processing data: ${error instanceof Error ? error.message : String(error)}`);
    }
};



// ************************************************************* //

// import { Decimal } from 'decimal.js';

// /**
//  * @typedef {Object} CurrencyRate
//  * @property {string} currency_code
//  * @property {number} currency_rate_gbp
//  */

// /**
//  * @typedef {Object} SupplierDetails
//  * @property {string} name
//  * @property {string} property_ref
//  * @property {string} room_type_code
//  * @property {string} supplier_room_type
//  * @property {string} reference1
//  * @property {string} reference2
//  */

// /**
//  * @typedef {Object} Price
//  * @property {Decimal} amount
//  * @property {string} currency
//  * @property {Decimal} amount_gbp
//  */

// /**
//  * @typedef {Object} MealPlanPrice
//  * @property {Price} price
//  * @property {SupplierDetails} supplier
//  */

// /**
//  * @typedef {Object} MealPlanOption
//  * @property {string} plan
//  * @property {MealPlanPrice[]} prices
//  * @property {Price} cheapest_price
//  * @property {Price} [meal_plan_difference]
//  */

// /**
//  * Parse currency rates from JSON data
//  */
// // const loadCurrencyRates = (currencyData: any): Record<string, { to_gbp: Decimal }> => {
// //     return currencyData.reduce((rates: any, currency: any) => {
// //         rates[currency.currency_code] = {
// //             to_gbp: new Decimal(1).dividedBy(new Decimal(currency.currency_rate_gbp))
// //         };
// //         return rates;
// //     }, {});
// // };

// /**
//  * Normalize meal codes
//  */
// const normalizeMealBasis = (mealCode: string): string => {
//     const roomOnlyCodes = ['Room Only', 'No Meals'];
//     return roomOnlyCodes.includes(mealCode) ? 'Room Only' : mealCode;
// };

// /**
//  * Convert amount from currency to GBP
//  */
// const convertToGBP = (amount: any, currency: string, findCurrencyData: any): Decimal => {
//     let newPrice:any = 0; 
//     const currencyCodePrice = findCurrencyData[`currency_rate_${(currency).toLowerCase()}`];
//     if (currencyCodePrice !== undefined) {
//         newPrice = amount * currencyCodePrice;
//     }
//     return newPrice;
//     // return currency === 'GBP' ? amount : amount.times(rates[currency].to_gbp);
// };

// /**
//  * Generate supplier details
//  */
// const createSupplierDetails = (room: any): any => ({
//     name: room.Supplier,
//     property_ref: room.SupplierPropertyReference,
//     room_type_code: room.RoomTypeCode,
//     supplier_room_type: room.SupplierRoomType,
//     reference1: room.SupplierReference1,
//     reference2: room.SupplierReference2
// });

// /**
//  * Process hotel rates with currency conversion and meal plan grouping
//  */
// // const processHotelRates = (rateData: any, currencyRates: Record<string, { to_gbp: Decimal }>) => {
// //     const groupRooms = (rates: any) => {
// //         const roomGroups = new Map<string, Map<string, any[]>>();

// //         rates.forEach((rateSet: any) => {
// //             rateSet.RoomTypes.forEach((room: any) => {
// //                 const roomType = room.RoomType;
// //                 const mealPlan = normalizeMealBasis(room.MealBasisCode);
// //                 const price = new Decimal(room.TotalCost);
// //                 const priceGBP = convertToGBP(price, room.CurrencyCode, currencyRates);

// //                 if (!roomGroups.has(roomType)) roomGroups.set(roomType, new Map());
// //                 if (!roomGroups.get(roomType)!.has(mealPlan)) roomGroups.get(roomType)!.set(mealPlan, []);

// //                 roomGroups.get(roomType)!.get(mealPlan)!.push({
// //                     price,
// //                     price_gbp: priceGBP,
// //                     currency: room.CurrencyCode,
// //                     supplier: createSupplierDetails(room)
// //                 });
// //             });
// //         });

// //         const processedRooms: any = {};

// //         roomGroups.forEach((mealPlans, roomType) => {
// //             const allOptions = Array.from(mealPlans.values()).flat();
// //             const cheapestOption = allOptions.reduce((min, curr) =>
// //                 curr.price_gbp.lessThan(min.price_gbp) ? curr : min
// //             );

// //             const mealOptions = Array.from(mealPlans.entries()).map(([mealPlan, options]) => {
// //                 const sortedOptions = options.sort((a, b) => a.price_gbp.minus(b.price_gbp).toNumber());
// //                 const cheapestMealOption = sortedOptions[0];

// //                 const mealOption: any = {
// //                     plan: mealPlan,
// //                     prices: sortedOptions.map(option => ({
// //                         price: {
// //                             amount: option.price,
// //                             currency: option.currency,
// //                             amount_gbp: option.price_gbp
// //                         },
// //                         supplier: option.supplier
// //                     })),
// //                     cheapest_price: {
// //                         amount: cheapestMealOption.price,
// //                         currency: cheapestMealOption.currency,
// //                         amount_gbp: cheapestMealOption.price_gbp
// //                     }
// //                 };

// //                 if (cheapestMealOption.price_gbp.greaterThan(cheapestOption.price_gbp)) {
// //                     mealOption.meal_plan_difference = {
// //                         amount: cheapestMealOption.price.minus(cheapestOption.price),
// //                         currency: cheapestMealOption.currency,
// //                         amount_gbp: cheapestMealOption.price_gbp.minus(cheapestOption.price_gbp)
// //                     };
// //                 }

// //                 return mealOption;
// //             });

// //             processedRooms[roomType] = {
// //                 base_price: {
// //                     amount: cheapestOption.price,
// //                     currency: cheapestOption.currency,
// //                     amount_gbp: cheapestOption.price_gbp
// //                 },
// //                 supplier: cheapestOption.supplier,
// //                 meal_options: mealOptions.sort((a, b) =>
// //                     a.cheapest_price.amount_gbp.minus(b.cheapest_price.amount_gbp).toNumber()
// //                 )
// //             };
// //         });

// //         return processedRooms;
// //     };

// //     return {
// //         rooms: groupRooms(rateData.PropertyResults)
// //     };
// // };

// const processHotelRates = (rateData: any, currencyRates: Record<string, { to_gbp: Decimal }>) => {
//     const groupRooms = (rates: any) => {
//         const roomGroups = new Map<string, Map<string, any[]>>();

//         rates.forEach((rateSet: any) => {
//             rateSet.RoomTypes.forEach((room: any) => {
//                 const roomType = room.RoomType;
//                 const mealPlan = normalizeMealBasis(room.MealBasisCode);
//                 const price = new Decimal(room.TotalCost);
//                 const priceGBP = convertToGBP(price, room.CurrencyCode, currencyRates);

//                 if (!roomGroups.has(roomType)) roomGroups.set(roomType, new Map());
//                 if (!roomGroups.get(roomType)!.has(mealPlan)) roomGroups.get(roomType)!.set(mealPlan, []);

//                 roomGroups.get(roomType)!.get(mealPlan)!.push({
//                     price,
//                     price_gbp: priceGBP,
//                     currency: room.CurrencyCode,
//                     supplier: createSupplierDetails(room)
//                 });
//             });
//         });

//         const processedRooms: any[] = []; // Change to array to hold room objects

//         roomGroups.forEach((mealPlans, roomType) => {
//             const allOptions = Array.from(mealPlans.values()).flat();
//             const cheapestOption = allOptions.reduce((min, curr) =>
//                 curr.price_gbp.lessThan(min.price_gbp) ? curr : min
//             );

//             const mealOptions = Array.from(mealPlans.entries()).map(([mealPlan, options]) => {
//                 const sortedOptions = options.sort((a, b) => a.price_gbp.minus(b.price_gbp).toNumber());
//                 const cheapestMealOption = sortedOptions[0];

//                 const mealOption: any = {
//                     plan: mealPlan,
//                     prices: sortedOptions.map(option => ({
//                         price: {
//                             amount: option.price,
//                             currency: option.currency,
//                             amount_gbp: option.price_gbp
//                         },
//                         supplier: option.supplier
//                     })),
//                     cheapest_price: {
//                         amount: cheapestMealOption.price,
//                         currency: cheapestMealOption.currency,
//                         amount_gbp: cheapestMealOption.price_gbp
//                     }
//                 };

//                 if (cheapestMealOption.price_gbp.greaterThan(cheapestOption.price_gbp)) {
//                     mealOption.meal_plan_difference = {
//                         amount: cheapestMealOption.price.minus(cheapestOption.price),
//                         currency: cheapestMealOption.currency,
//                         amount_gbp: cheapestMealOption.price_gbp.minus(cheapestOption.price_gbp)
//                     };
//                 }

//                 return mealOption;
//             });

//             // Push each room type as an object to the processedRooms array
//             processedRooms.push({
//                 room_name: roomType, // Use "room_name" instead of keying by room type
//                 base_price: {
//                     amount: cheapestOption.price,
//                     currency: cheapestOption.currency,
//                     amount_gbp: cheapestOption.price_gbp
//                 },
//                 supplier: cheapestOption.supplier,
//                 meal_options: mealOptions.sort((a, b) =>
//                     a.cheapest_price.amount_gbp.minus(b.cheapest_price.amount_gbp).toNumber()
//                 )
//             });
//         });

//         return processedRooms; // Return the array of room objects
//     };

//     return {
//         rooms: groupRooms(rateData.PropertyResults) // "rooms" will now be an array
//     };
// };

// /**
//  * Main function to process hotel rate data with currency conversion
//  */
// export const RoomTypeProcess = async (currencyRates: any, rateData: string) => {
//     try {
//         // const parsedSettings = JSON.parse(settingsData);
//         // const parsedRates = JSON.parse(rateData);

//         // const currencyRates = await loadCurrencyRates(settingsData);
//         const processedData = await processHotelRates(rateData, currencyRates);

//         return JSON.stringify(processedData, (_, value) => value instanceof Decimal ? value.toString() : value, 2);
//     } catch (error) {
//         throw new Error(`Error processing data: ${error instanceof Error ? error.message : String(error)}`);
//     }
// };