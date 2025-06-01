<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom p-4">
      <b-card-title class="mb-0">
        <BIconWalletFill class="mb-2 me-1" />
        Payment Options
      </b-card-title>
    </b-card-header>

    <b-card-body class="p-4 pb-0">
      <!-- Discount Section -->
      <!-- <div class="bg-primary bg-opacity-10 rounded-3 mb-4 p-3">
        <div class="d-md-flex justify-content-md-between align-items-center">
          <div class="d-sm-flex align-items-center mb-2 mb-md-0">
            <img :src="element16" class="h-50px" alt="" />
            <div class="ms-sm-3 mt-2 mt-sm-0">
              <b-card-title tag="h5" class="mb-0">Get Additional Discount</b-card-title>
              <p class="mb-0">Login to access saved payments and discounts!</p>
            </div>
          </div>

          <router-link :to="{ name: 'auth.sign-in' }" class="btn btn-primary mb-0">Login now</router-link>
        </div>
      </div> -->

      <!-- Payment Options -->
      <b-accordion class="accordion-icon accordion-bg-light">
        <b-accordion-item class="mb-3" headerClass="h6" buttonClass="rounded" visible>
          <template #title>
            <BIconCreditCard class="text-primary me-2" />
            <span class="me-5">Credit or Debit Card</span>
          </template>

          <!-- Credit/Debit Card Form -->
          <div class='mt-3'>
            <span>Card Detail</span>
            <div class="mt-2" id="card-element"></div>
            <div id="card-errors" role="alert">{{ errorMessage }}</div>
            <div class="w-full d-flex justify-content-center">
              <button :disabled="isLoading" variant="primary" class="w-50 btn-primary-soft"
                @click="handleSubmit"><small>{{
                  useCurrencySymbol }} {{ Math.round(allRoomsAmount) }}</small> Pay Now
                <span v-if="!isLoading"></span>
                <span v-else>
                  <b-spinner small></b-spinner>
                </span>
              </button>
            </div>

          </div>
        </b-accordion-item>

        <!-- <b-accordion-item class="mb-3" headerClass="h6" buttonClass="rounded">
          <template #title>
            <BIconGlobe2 class="text-primary me-2" />
            <span class="me-5">Pay with Net Banking</span>
          </template>
          <form class="row g-3 mt-1">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h6 class="mb-0">Popular Bank:</h6>
              </li>
              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option1" />
                <label class="btn btn-light btn-primary-soft-check" for="option1">
                  <img :src="element13" class="h-20px me-2" alt="" />Bank of America
                </label>
              </li>
              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option2" />
                <label class="btn btn-light btn-primary-soft-check" for="option2">
                  <img :src="element15" class="h-20px me-2" alt="" />Bank of Japan
                </label>
              </li>
              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option3" />
                <label class="btn btn-light btn-primary-soft-check" for="option3">
                  <img :src="element14" class="h-20px me-2" alt="" />VIVIV Bank
                </label>
              </li>
            </ul>

            <p class="mb-1">
              In order to complete your transaction, we will transfer you over to Booking secure
              servers.
            </p>
            <p class="my-0">
              Select your bank from the drop-down list and click proceed to continue with your
              payment.
            </p>
            <div class="d-grid">
              <button class="btn btn-success mb-0">Pay ${{ allRoomsAmount }}</button>
            </div>
          </form>
        </b-accordion-item> -->

        <!-- <b-accordion-item class="mb-3" headerClass="h6" buttonClass="rounded">
          <template #title>
            <BIconPaypal class="text-primary me-2" />
            <span class="me-5">Pay with Paypal</span>
          </template>
          <b-card no-body class="card-body border align-items-center text-center mt-4">
            <img :src="paypal" class="h-70px mb-3" alt="" />
            <p class="mb-3">
              <strong>Tips:</strong> Simply click on the payment button below to proceed to the
              PayPal payment page.
            </p>
            <a href="#" class="btn btn-sm btn-outline-primary mb-0">Pay with paypal</a>
          </b-card>
        </b-accordion-item> -->
      </b-accordion>
    </b-card-body>

    <div class="card-footer p-4 pt-0">
      <p class="mb-0">
        By processing, You accept Booking <a href="#">Terms of Services</a> and <a href="#">Policy</a>
      </p>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BIconWalletFill, BIconCreditCard, BIconGlobe2, BIconPaypal } from 'bootstrap-icons-vue'
import element13 from '@/assets/images/element/13.svg'
import element14 from '@/assets/images/element/14.svg'
import element15 from '@/assets/images/element/15.svg'
import element16 from '@/assets/images/element/16.svg'
import paypal from '@/assets/images/element/paypal.svg'
import { HotelDetailStore, useCurrencyCode } from '@/stores/auth'
import { loadStripe } from '@stripe/stripe-js';
import { CreatePaymentIntent } from '@/helpers/backend-api';
import { useToast } from 'vue-toastification'

const toast = useToast()
const isLoading = ref(false)
const stripe = ref();
const cardElement = ref();
const errorMessage = ref('');
const clientSecret = ref('');
const allRoomsAmount = ref(0);
const roomInformation = ref();
const error = ref('')
const emit = defineEmits(['submitPayment'])

let HotelDetailData: any = HotelDetailStore();
let useCurrencySymbol = HotelDetailData.getUserData().currencySymbol;
let HotelRoomDetail = HotelDetailData.getUserData().RoomBooking;
roomInformation.value = HotelRoomDetail._value;
const roomsDetail = JSON.parse(JSON.stringify(roomInformation.value));
const totalAmount = roomsDetail.reduce((sum: any, item: any) => sum + (parseFloat(item.cheapest_price.amount) * item.numberOfRooms), 0);
allRoomsAmount.value = totalAmount;
console.log(allRoomsAmount.value);

const props = defineProps<{
  user: any;
}>();
console.log(props.user);



onMounted(async () => {
  // Ensure the element is created after the DOM is ready
  stripe.value = await loadStripe('pk_test_51Lx8GyC2tGzLi2V6scY52DyDdyBQvZTyw24ZWtfr7UR41KTPJoIKe4eLvAPWB0otYKjQ92zGcMzMElEBtFQ4hfdZ00715aO4sq');
  const elements = stripe.value.elements();
  cardElement.value = elements.create('card');
  cardElement.value.mount('#card-element');
  cardElement.value.on('change', (event: any) => {
    if (event.error) {
      errorMessage.value = event.error.message;
    } else {
      errorMessage.value = '';
    }
  });
});

const handleSubmit = async () => {
  try {
    isLoading.value = true
    const data = {
      amount: allRoomsAmount.value,
      currency: 'usd',
      name: props.user.name,
      email: props.user.email
    };
    const response = await CreatePaymentIntent(data);
    clientSecret.value = response.clientSecret;
    const { error } = await stripe.value.confirmCardPayment(clientSecret.value, {
      payment_method: {
        card: cardElement.value,
      },
    });
    if (error) {
      isLoading.value = false
      errorMessage.value = error.message;
    } else {
      isLoading.value = false
      emit('submitPayment', true)
    }
  } catch (error: any) {
    isLoading.value = false
    errorMessage.value = error.message || 'An error occurred while processing the payment.';
  }
};
</script>


<style scoped>
#card-element {
  /* margin: 20px 0; */
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

button {
  background-color: #6772e5;
  color: #fff;
  padding: 8px 12px;
  border: 1px solid var(--bs-gray-300);
  ;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 8px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

#card-errors {
  color: #fa755a;
  margin-top: 8px;
  font-size: 14px;
}
</style>