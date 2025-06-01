import { useCurrencyCode } from '@/stores/auth';
import axios from 'axios'
import FormData from 'form-data'

/****************** Authentication APIS *********************/

export const loginFormAPIs = async (loginData: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('email', loginData.email);
    data.append('password', loginData.password);
    const response: any = await axios.post('http://localhost:8000/auth/login', data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const SignUpFormAPI = async (signupData: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('first_name', signupData.first_name);
    data.append('last_name', signupData.last_name);
    data.append('email', signupData.email);
    data.append('password', signupData.password);
    data.append('confirm_password', signupData.confirm_password);
    data.append('phone_number', signupData.phone_num);
    data.append('login_type', 'email');
    data.append('nationality', signupData.nationality);
    data.append('address', signupData.address);
    data.append('date_of_birth', signupData.dob);
    data.append('gender', signupData.gender);
    data.append('passport_id', signupData.passport_id);
    const response: any = await axios.post('http://localhost:8000/auth/register', data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetAllUSers = async (token: any): Promise<any> => {
  try {

    const response: any = await axios.get('http://localhost:8000/auth/all-users', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

/****************** Reset Email Verification APIS *********************/

export const ForgetPasswordAPI = async (Data: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('email', Data.email);
    const response: any = await axios.post('http://localhost:8000/auth/forgot-password', data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const verifyOTPCode = async (Data: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('email', Data.email);
    data.append('otp_code', Data.otp);
    const response: any = await axios.post('http://localhost:8000/auth/verify-otp-code', data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const updatePasswordAPI = async (Data: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('email', Data.email);
    data.append('newPassword', Data.newPassword);
    data.append('confirmPassword', Data.confirmPassword);
    const response: any = await axios.put('http://localhost:8000/auth/update-password', data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};


/****************** User Profile APIS *********************/
export const UpdateBasicInformation = async (Data: any, token: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('first_name', Data.first_name);
    data.append('last_name', Data.last_name);
    data.append('profile_picture', Data.avatar);
    data.append('phone_number', Data.phone_number);
    data.append('nationality', Data.nationality);
    data.append('address', Data.address);
    data.append('date_of_birth', Data.dob);
    data.append('gender', Data.gender);
    const response = await axios.put('http://localhost:8000/auth/update-information', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const UpdateEmail = async (Data: any, token: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('email', Data.email);
    console.log(Data.email);
    const response = await axios.put('http://localhost:8000/auth/update-email', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const UpdatePassword = async (Data: any, token: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('current_password', Data.current_password);
    data.append('new_password', Data.new_password);
    data.append('confirm_password', Data.confirm_password);
    const response = await axios.put('http://localhost:8000/auth/change-password', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const UpdateTravelers = async (Data: any, token: any): Promise<any> => {
  try {
    const updatedData = JSON.stringify(Data)
    const data: any = new FormData();
    data.append('travelers', updatedData);
    const response = await axios.put('http://localhost:8000/auth/update-traveler', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

/****************** Admin APIS *********************/

export const StatisticDashboard = async (token: any): Promise<any> => {
  try {
    const response: any = await axios.get('http://localhost:8000/auth/dashboard', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

/****************** Settings APIS *********************/

export const getSettingsData = async (token: any): Promise<any> => {
  try {
    const response: any = await axios.get('http://localhost:8000/setting/all', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const updateSettings = async (Data: any, token: any): Promise<any> => {
  try {
    const data: any = new FormData();
    data.append('cancellation_date_margin', Data.cancelDateFee);
    data.append('exchange_rate_frequency', Data.exchangeRate);
    data.append('admin_markup', Data.adminMarkup);
    data.append('stripe_fee', Data.stripeFee);
    data.append('ivector_fee', Data.iVectorFee);
    const response: any = await axios.post('http://localhost:8000/setting/create', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

/****************** Filter Hotel APIS *********************/



export const FilterHotels = async (Data: any): Promise<any> => {

  try {
    // const randomNumber = await getRandomNumber(500, 1500);
    const data: any = new FormData();
    if (Data.destinationType == 'City') {
      data.append('location', Data.location);
      data.append('radius', 10);
    } else if (Data.destinationType == 'Point of Interest') {
      data.append('location', Data.location);
      data.append('radius', 10);
    } else {
      data.append('property_name', Data.location);
    }

    data.append('room_requests', Data.room_requests);
    data.append('duration', 1);
    data.append('arrival_date', Data.arrival_date);
    data.append('end_date', Data.end_date);
    data.append('nationality_id', 0);
    data.append('currency_code', 1);
    data.append('opaque_rates', false);
    data.append('selling_country', 1);
    const response: any = await axios.post('http://localhost:8000/hotel/filter-hotels', data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const FilterIVectorHotels = async (Data: any, data2: any): Promise<any> => {

  try {
    const useCurrency = useCurrencyCode()
    const currencyData = useCurrency.getData()
    const data: any = new FormData();
    data.append('room_requests', Data.room_requests);
    data.append('arrival_date', Data.arrival_date);
    data.append('end_date', Data.end_date);
    data.append('IndexData', data2.results);
    data.append('propertyIds', data2.propertyIds);
    data.append('currency_code', currencyData.code);
    const response: any = await axios.post('http://localhost:8000/hotel/filter-hotels-index', data);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const FilterHotelDetails = async (Data: any): Promise<any> => {
  try {
    const useCurrency = useCurrencyCode()
    const currencyData = useCurrency.getData()
    const data: any = new FormData();
    data.append('hotel_id', Data.hotelId);
    data.append('currency_code', currencyData.code);
    const response: any = await axios.get(`http://localhost:8000/hotel/details?hotel_id=${Data.hotelId}&currency_code=${currencyData.code}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const FetchIVectorHotelDetails = async (Data: any): Promise<any> => {
  try {
    const useCurrency = useCurrencyCode()
    const currencyData = useCurrency.getData()
    const data: any = new FormData();
    data.append('room_requests', Data.room_requests);
    data.append('arrival_date', Data.arrival_date);
    data.append('end_date', Data.end_date);
    data.append('hotel_id', Data.hotelId);
    data.append('currency_code', currencyData.code);
    const response: any = await axios.get(`http://localhost:8000/hotel/details-iVector?hotel_id=${Data.hotelId}&currency_code=${currencyData.code}&room_requests=${Data.room_requests}&arrival_date=${Data.arrival_date}&end_date=${Data.end_date}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

/******************  Hotel Booking APIS *********************/

export const HotelCheckout = async (Data: any, token: any): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append('title', Data.title);
    formData.append('email', Data.email);
    formData.append('lead_customer', JSON.stringify(Data.lead_customer)); // Serialize object
    formData.append('total_rooms', Data.total_rooms.toString()); // Ensure it's a string
    formData.append('room_details', JSON.stringify(Data.room_details)); // Serialize object
    formData.append('special_request', Data.special_request);
    formData.append('room_charges', Data.room_charges.toString());
    formData.append('total_discount', Data.total_discount.toString());
    formData.append('price_after_discount', Data.price_after_discount.toString());
    formData.append('tax_fees', Data.tax_fees.toString());
    formData.append('payable_amount', Data.payable_amount.toString());
    formData.append('currency_symbol', Data.currency_symbol);
    formData.append('check_in', Data.check_in);
    formData.append('check_out', Data.check_out);
    formData.append('total_guest', Data.total_guest.toString());
    formData.append('payment_type', Data.payment_type);
    formData.append('card_holder_name', Data.card_holder_name);
    formData.append('card_number', Data.card_number);
    formData.append('expiry_date', Data.expiry_date);
    formData.append('cvc', Data.cvc);
    formData.append('extra_details', JSON.stringify(Data.extra_details));
    const response: any = await axios.post('http://localhost:8000/hotel/property-checkout', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const HotelCheckoutWithLogin = async (Data: any): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append('title', Data.title);
    formData.append('email', Data.email);
    formData.append('lead_customer', JSON.stringify(Data.lead_customer)); // Serialize object
    formData.append('total_rooms', Data.total_rooms.toString()); // Ensure it's a string
    formData.append('room_details', JSON.stringify(Data.room_details)); // Serialize object
    formData.append('special_request', Data.special_request);
    formData.append('room_charges', Data.room_charges.toString());
    formData.append('total_discount', Data.total_discount.toString());
    formData.append('price_after_discount', Data.price_after_discount.toString());
    formData.append('tax_fees', Data.tax_fees.toString());
    formData.append('payable_amount', Data.payable_amount.toString());
    formData.append('currency_symbol', Data.currency_symbol);
    formData.append('check_in', Data.check_in);
    formData.append('check_out', Data.check_out);
    formData.append('total_guest', Data.total_guest.toString());
    formData.append('payment_type', Data.payment_type);
    formData.append('card_holder_name', Data.card_holder_name);
    formData.append('card_number', Data.card_number);
    formData.append('expiry_date', Data.expiry_date);
    formData.append('cvc', Data.cvc);
    formData.append('extra_details', JSON.stringify(Data.extra_details));
    const response: any = await axios.post('http://localhost:8000/hotel/property-checkout-no-login', formData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetMyBooking = async (data: any, token: any): Promise<any> => {
  try {
    const pageNo = 1;
    const noOfRecords = 10;
    const status = data;
    const response: any = await axios.get(`http://localhost:8000/hotel/user-bookings?status=${status}&page=${pageNo}&no_of_records=${noOfRecords}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const BookingDetail = async (bookingId: any, token: any): Promise<any> => {
  try {
    const response: any = await axios.get(`http://localhost:8000/hotel/booking-detail?booking_id=${bookingId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const cancelBooking = async (bookingId: any, token: any): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append('booking_id', bookingId);

    const response: any = await axios.post(`http://localhost:8000/hotel/property-cancel`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetAllBooking = async (token: any): Promise<any> => {
  try {
    const pageNo = 1;
    const noOfRecords = 10;
    const response: any = await axios.get(`http://localhost:8000/hotel/all-bookings?page=${pageNo}&no_of_records=${noOfRecords}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};


/******************  Payment APIS *********************/

export const CreatePaymentIntent = async (Data: any): Promise<any> => {
  try {
    const useCurrency = useCurrencyCode()
    const currencyData = useCurrency.getData()
    const formData = new FormData();
    formData.append('amount', Data.amount);
    formData.append('currency', currencyData.code.toLowerCase());
    formData.append('name', Data.name);
    formData.append('email', Data.email);
    const response: any = await axios.post('http://localhost:8000/payment/create-payment-intent', formData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
