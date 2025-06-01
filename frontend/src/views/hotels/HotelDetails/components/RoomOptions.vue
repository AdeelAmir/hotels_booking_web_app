<!-- <template>
  <div class="mt-5">
    <h3>Room Options</h3>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th class="room-type-column">Room Type</th>
            <th class="number-guest-column">Number Of Guests</th>
            <th class="today-price-column">Today Price</th>
            <th class="today-price-column">Your Choice</th>
            <th class="select-quantity-column">Select Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>
              <div class="roomType">
                <h6>{{ user.RoomType }}</h6>
                <small class="text-danger smaller">
                  <span class="dotBox"></span> Only One room left
                </small>
              </div>
            </td>
            <td>
              <div class="number-of-guest">
                <small v-for="(icon, iconIndex) in user.numberOfGuests" :key="iconIndex">
                  <font-awesome-icon :icon="faUser" class="text-success ml-1" />
                </small>
              </div>
            </td>
            <td>
              <div class="number-of-guest">
                <div class="badge bg-info guest-item">
                  <span>{{ currencySymbol }} {{ Math.round(user.TotalCost) }}</span>
                </div>
              </div>
            </td>
            <td>
              <div class="number-of-guest">
                <small v-html="checkCancellation(user.CancellationTerms)">
                </small>
              </div>
            </td>
            <td>
              <div class="number-of-guest">
                <select class="form-select" v-model.number="user.selectedPrice">
                  <option :value="0">0{{ currencySymbol }}</option>
                  <option :value="parseFloat(Math.round(user.TotalCost))">
                    {{ Math.round(user.TotalCost) }}{{ currencySymbol }}
                  </option>
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-column mt-3">
        <a class="btn btn-primary mt-2" href="#" @click.prevent="CheckOutBooking">
          <span>
            Checkout
            <BIconCart class="fa-fw ml-1" />
          </span>
        </a>
        <small class="text-center">Checkout your room booking.</small>
      </div>
    </div>
    <CustomGLightbox
      v-if="currentImage"
      :link="currentImage"
      class="stretched-link z-index-9"
      @close="currentImage = null"
    />
  </div>
</template>

<script setup lang="ts">
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Removed unused `faCheck`
import { ref } from 'vue';
import CustomGLightbox from '@/components/CustomGLightbox.vue';
import { filterHotelDataStore, HotelDetailStore, useCurrencyCode } from '@/stores/auth';
import { BIconCart } from 'bootstrap-icons-vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import moment from 'moment';

// Define interface for type safety
interface Room {
  RoomType: string;
  TotalCost: number;
  CancellationTerms: any[];
  numberOfGuests: number;
  selectedPrice: number;
}

const currentImage = ref<string | null>(null);
const route = useRoute();
let useCurrency = useCurrencyCode()
let currencyData = useCurrency.getData()
const filterHotel = filterHotelDataStore();
let filterOptions = filterHotel.getUserData().filterOptions;
const HotelDetails = HotelDetailStore();
const HotelDetail = HotelDetails.getUserData();
let adults = JSON.parse(filterOptions.room_requests);
const currencySymbol = ref(currencyData.symbol);
  const numberOfGuest = ref<number | undefined>(adults[0]?.Adults);
let iVectorData = HotelDetail.iVectorData.PropertyResults;
iVectorData = iVectorData.length > 0 ? iVectorData[0].RoomTypes : []
const users = ref<Room[]>(
  iVectorData.map((room: any) => ({
    ...room,
    selectedPrice: 0,
    numberOfGuests: room.Adults,
    bookingToken : HotelDetail.iVectorData.PropertyResults[0].BookingToken
  }))
);

const CheckOutBooking = async (): Promise<void> => {
  const selectedRooms = users.value.filter((user: Room) => user.selectedPrice > 0);
  if (selectedRooms.length > 0) {
    console.log('Selected Room Details:', selectedRooms);
    HotelDetail.RoomBooking = selectedRooms;
    HotelDetail.currencySymbol = currencyData.symbol;
    HotelDetails.saveSession(HotelDetail);
    // redirectUser();
  } else {
    console.log('No rooms selected or all selected prices are 0.');
  }
};

const checkCancellation = (terms: any[]): string => {
  let termTitle = '';
  if (terms && terms.length > 0) {
    const termsAmount = terms[0].Amount;
    const termsStartDate = terms[0].StartDate;
    const parsedStartDate = moment(termsStartDate);
    const day = parsedStartDate.format('D');
    const monthName = parsedStartDate.format('MMMM');
    const currentDate = moment();
    if (termsAmount >= 100 && parsedStartDate.isAfter(currentDate)) {
      termTitle = `<b>Free Cancellation</b> before ${day} ${monthName}`;
    }else{
      termTitle = 'No cancellation';
    }
  } else {
    termTitle = 'No cancellation';
  }
  return termTitle;
};

const redirectUser = () => {
  if (route.query.redirectedFrom) {
    return router.push(`${route.query.redirectedFrom}`);
  }
  return router.push('/hotels/booking');
};
</script>

<style scoped>
.table-responsive {
  overflow-x: auto;
}

.table {
  overflow-x: auto;
}

.table th {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  background-color: rgb(0, 128, 202);
  color: white;
}

.table tr {
  border-bottom: 2px solid rgb(0, 128, 202);
}

.table-hover {
  background-color: aquamarine !important;
  cursor: pointer;
}

.table th,
.table td {
  white-space: wrap;
}

.room-type-column {
  width: 40%;
}

.number-guest-column {
  width: 20%;
}

.today-price-column {
  width: 20%;
}

.select-quantity-column {
  width: 20%;
}

.number-of-guest {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.guest-item {
  margin: auto;
}

.priceBox {
  display: flex;
  gap: 10px;
}

.smaller {
  position: relative;
  margin-left: 25px;
}

.dotBox {
  position: absolute;
  width: 15px;
  height: 15px;
  padding: 2px;
  border-radius: 100%;
  left: -18px;
  top: 2px;
  background-color: red;
}

@media (max-width: 767px) {
  .table-responsive {
    max-width: 100%;
  }

  .table th,
  .table td {
    white-space: nowrap;
  }
}
</style>
 -->






 <template>
  <div>
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h3 class="mb-3">Room Options</h3>
    </b-card-header>
    <!-- Conditional rendering based on the length of rooms -->
    <template v-if="rooms.length > 0">
      <b-accordion class="mt-4">
        <b-accordion-item v-for="(room, roomIndex) in rooms" :key="roomIndex" :title="room.room_name">
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Board</th>
                  <th scope="col">Rate</th>
                  <th scope="col">No of Rooms</th>
                  <th scope="col">Refund Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(mealOption, index) in room.meal_options" :key="index">
                  <td style="width: 20px;">
                    <input
                      type="checkbox"
                      :value="mealOption"
                      v-model="selectedRooms"
                      style="width: 20px; height: 20px;"
                      @change="onRoomSelect(mealOption, room)"
                    />
                  </td>
                  <td>{{ mealOption.plan }}</td>
                  <td>
                    <b>{{ Math.round(parseFloat(mealOption.cheapest_price.amount)) }} {{ mealOption.cheapest_price.currency }}</b>
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model.number="mealOption.numberOfRooms"
                      min="1"
                      style="width: 60px; text-align: center;"
                    />
                  </td>
                  <td>
                    <h6 v-if="mealOption.refundableStatus == 'Not Refundable'" class="btn2 btn-danger">{{ mealOption.refundableStatus }}</h6>
                    <h6 v-else class="btn2 btn-success">{{ mealOption.refundableStatus }}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-accordion-item>
      </b-accordion>
    </template>
    <!-- Fallback when no rooms are available -->
    <template v-else>
      <div class="mt-4 text-center">
        <img src="/public/111.jpg" width="35%" />
        <h4>Searching Available Rooms...</h4>
      </div>
    </template>
    <div class="d-flex flex-column mt-3">
      <a class="btn btn-primary mt-2" href="#" @click.prevent="CheckOutBooking">
        <span>
          Checkout
          <BIconCart class="fa-fw ml-1" />
        </span>
      </a>
      <small class="text-center">Checkout your room booking.</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { filterHotelDataStore, HotelDetailStore, useCurrencyCode } from '@/stores/auth';
import { BIconCart } from 'bootstrap-icons-vue';
import { onMounted, ref, watch } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { FetchIVectorHotelDetails } from '@/helpers/backend-api';

const selectedRooms = ref<any[]>([]);
const rooms = ref<any[]>([]);
const IVectorHotelData = ref<any>({});
const route = useRoute();

// Currency and hotel data initialization
const useCurrency = useCurrencyCode();
const currencyData = useCurrency.getData();
const HotelDetails = HotelDetailStore();
const filterHotel = filterHotelDataStore();
const currencySymbol = ref(currencyData.symbol);
const HotelDetail = HotelDetails.getUserData();
const filterOptions = filterHotel.getUserData()?.filterOptions ?? {};
const hotelId = route.params.id;

onMounted(async () => {
  try {
    const data = {
      room_requests: filterOptions.room_requests,
      arrival_date: filterOptions.arrival_date,
      end_date: filterOptions.end_date,
      hotelId: hotelId
    };
    const response = await FetchIVectorHotelDetails(data);
    if (response.status === true) {
      IVectorHotelData.value = response.data;
      console.log("IVector Data Saved Successfully!");
      
      // Process and set rooms data
      if (IVectorHotelData.value?.PropertyResults && IVectorHotelData.value.PropertyResults.length > 0) {
        const iVectorData = IVectorHotelData.value.PropertyResults[0].RoomTypes || [];
        rooms.value = iVectorData.map((room: any) => ({
          ...room,
          meal_options: room.meal_options.map((option: any) => ({
            ...option,
            numberOfRooms: option.numberOfRooms || 1
          }))
        }));
      }
    } else {
      console.warn("No data found for rooms.");
    }
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  }
});

// Function to update room selection
function onRoomSelect(mealOption: any, room: any) {
  mealOption.bookingToken = IVectorHotelData.value?.PropertyResults?.[0]?.BookingToken || '';
  mealOption.propertyId = IVectorHotelData.value?.PropertyResults?.[0]?.PropertyID || '';
  mealOption.roomType = room.room_name;
  if (selectedRooms.value.includes(mealOption) && !mealOption.numberOfRooms) {
    mealOption.numberOfRooms = 1;
  }
  console.log("mealOption:", mealOption);
}

// Watcher for selectedRooms
watch(selectedRooms, (newSelection) => {
  console.log("Selected Rooms updated:", newSelection);
});

// Function to log selected rooms on checkout
function CheckOutBooking() {
  if (selectedRooms.value.length > 0) {
    console.log(selectedRooms.value);
    
    HotelDetail.RoomBooking = selectedRooms;
    HotelDetail.currencySymbol = currencyData.symbol;
    HotelDetails.saveSession(HotelDetail);
    redirectUser();
    console.log('Checkout - Selected Rooms:', selectedRooms.value);
  } else {
    console.log('Please select at least one room.');
}
}

const redirectUser = () => {
  if (route.query.redirectedFrom) {
    return router.push(`${route.query.redirectedFrom}`);
  }
  return router.push('/hotels/booking');
};
</script>


<style scoped>
.btn2{
  width: fit-content;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 5px;
}

.table-container {
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 8px;
}

.table-container::-webkit-scrollbar {
  height: 8px;
}

.table-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 8px;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 8px;
}

.table-container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
