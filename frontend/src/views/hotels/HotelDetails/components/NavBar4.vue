<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl cursor-pointer ">
      <b-container>
        <LogoBox />
        <MobileMenu v-if="isMobileMenu" show-extra-pages />
        <AppMenu v-else show-extra-pages />

        <div class="header-sticky" :class="{ 'header-sticky-on2': isSticky2 }"
          :style="{ display: isSticky2 ? 'block' : 'none' }" type="button" @click="showFilter">
          <div class="mainFilter">
            <span>Location</span>
            <hr />
            <span> Duration</span>
            <hr />
            <span>Guest & Room</span>
            <a class="icon-md btn btn-round btn-primary mb-0" href="#">
              <span>
                <BIconSearch class="fa-fw" />
              </span>
            </a>
          </div>
        </div>

        <b-nav class="flex-row align-items-center list-unstyled ms-xl-auto">
          <!-- <div>
            <b-dropdown id="dropdown-1" text="Select Country" class="m-md-2">
              <b-dropdown-item v-for="(country, index) in famousCountries" :key="index" @click="selectCountry(country)">
                <img :src="country.flag" alt="flag" class="flag me-2" />
                <span>{{ country.name }} - {{ country.currencySymbol }}</span>
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="main-icons d-md-flex">
            <h6 class="icon_btn2">{{ selectedCurrency }}</h6>
            <img class="flag" :src="selectedFlag" alt="Selected Flag" />
          </div> -->

          <div class="d-md-flex d-none">
            <b-dropdown id="dropdown-1" text="" v-model="isDropdownOpen" ref="dropdown" :toggle-class="'d-none'">
              <b-dropdown-item v-for="(country, index) in famousCountries" :key="index" @click="selectCountry(country)"
                class="custom-dropdown-menu">
                <img :src="country.flag" alt="flag" class="flag me-2" />
                <span>{{ country.name }} - {{ country.currencySymbol }}</span>
              </b-dropdown-item>
            </b-dropdown>

            <div class="main-icons mr-md-4 d-md-flex align-items-center">
              <h6 class="icon_btn2" @click="toggleDropdown" ref="flagDropdown">{{ selectedCurrency }}</h6>
              <img class="flag me-2" :src="selectedFlag || 'path_to_default_flag_image'" alt="Selected Flag"
                @click="toggleDropdown" ref="flagDropdown" />
            </div>
          </div>

          <!-- Responsive navbar toggler -->
          <button class="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2" type="button" v-b-toggle="'navbar-collapse'">
            <span class="navbar-toggler-animation py-1 d-md-none d-sm-inline-block mr-4 ">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <!-- Profile -->
          <CustomDropDown is="li" custom-class="nav-item ms-3">
            <a class="pb-2" href="#" role="button" data-bs-auto-close="outside" data-bs-display="static"
              data-bs-toggle="dropdown" aria-expanded="false">
              <div class="d-flex align-items-center">
                <div v-if="userDetails === 'None'" class="gap-5">
                  <a href="#" class="btn3 btn-md mb-0 mr-2">
                    <BIconList class="icon mr-3" />
                    <BIconPersonCircle class="icon" />
                  </a>
                </div>

                <div v-else class="avatar me-1 mt-2">
                  <BIconPersonCircle v-if="userDetails === 'None'" class="signIn-icon" />
                  <img v-else class="avatar-img rounded-circle shadow" :src="userDetails.profilePicture" alt="avatar" />
                </div>

                <div v-if="userDetails === 'None'">

                </div>
                <div v-else-if="userDetails === 'Admin'">
                  <a class="h6 mt-md-2 mb-md-0  mt-sm-0 d-none d-md-block text-white" href="#">Your Account</a>
                  <p class="small m-0 d-none d-md-block text-white">{{ userDetails.firstName + ' ' +
                    userDetails.lastName }}</p>
                </div>
                <div v-else>
                  <a class="h6 mt-md-2 mb-md-0  mt-sm-0 d-none d-md-block text-white" href="#">Your Account</a>
                  <p class="small m-0 d-none d-md-block text-white">{{ userDetails.firstName + ' ' +
                    userDetails.lastName }}</p>
                </div>
              </div>
            </a>

            <ul v-if="userDetails === 'None'"
              class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 cursor-pointer"
              aria-labelledby="profileDropdown">
              <li>
                <a class="dropdown-item" @click.prevent="SignOut('/sign-up')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  Sign Up
                </a>
              </li>
              <li>
                <a class="dropdown-item" @click.prevent="SignOut('/sign-in')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  Sign In
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <!-- Dark mode options -->
              <li>
                <div
                  class="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                  <span>Mode:</span>
                  <button v-for="mode in themeModes" :key="mode.theme" type="button"
                    class="btn btn-link nav-link text-primary-hover mb-0 p-0"
                    :class="{ active: mode.theme === useLayout.theme }" @click="useLayout.setTheme(mode.theme)"
                    v-b-tooltip.hover :title="mode.theme">
                    <component :is="mode.icon" />
                  </button>
                </div>
              </li>
            </ul>

            <ul v-else-if="userDetails.role === 'Admin'"
              class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 cursor-pointer"
              aria-labelledby="profileDropdown">
              <li>
                <a class="dropdown-item" @click.prevent="navigateToRoute('/admin/dashboard')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  My Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item bg-danger-soft-hover" @click.prevent="SignOut('/sign-in')">
                  <BIconPower class="fa-fw me-2" />
                  Sign Out
                </a>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <!-- Dark mode options -->
              <li>
                <div
                  class="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                  <span>Mode:</span>
                  <button v-for="mode in themeModes" :key="mode.theme" type="button"
                    class="btn btn-link nav-link text-primary-hover mb-0 p-0"
                    :class="{ active: mode.theme === useLayout.theme }" @click="useLayout.setTheme(mode.theme)"
                    v-b-tooltip.hover :title="mode.theme">
                    <component :is="mode.icon" />
                  </button>
                </div>
              </li>
            </ul>

            <ul v-else class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 cursor-pointer"
              aria-labelledby="profileDropdown">
              <li>
                <a class="dropdown-item" @click.prevent="navigateToRoute('/user/profile')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  My Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" @click.prevent="navigateToRoute('/user/bookings')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  My Bookings
                </a>
              </li>
              <li>
                <a class="dropdown-item bg-danger-soft-hover" @click.prevent="SignOut('/sign-in')">
                  <BIconPower class="fa-fw me-2" />
                  Sign Out
                </a>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <!-- Dark mode options -->
              <li>
                <div
                  class="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                  <span>Mode:</span>
                  <button v-for="mode in themeModes" :key="mode.theme" type="button"
                    class="btn btn-link nav-link text-primary-hover mb-0 p-0"
                    :class="{ active: mode.theme === useLayout.theme }" @click="useLayout.setTheme(mode.theme)"
                    v-b-tooltip.hover :title="mode.theme">
                    <component :is="mode.icon" />
                  </button>
                </div>
              </li>
            </ul>
          </CustomDropDown>
        </b-nav>
      </b-container>

    </nav>
    <b-row class="col-12 mb-2" :style="{ display: showModal ? 'block' : 'none' }">
      <div class="col-9 position-relative m-auto">
        <b-form class="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
          <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>
          <b-row class="g-4 align-items-center">

            <b-col lg="4">
              <div class="form-control-border form-control-transparent form-fs-md d-flex">
                <BIconGeoAlt class="fs-3 me-2 mt-3" />
                <div class="flex-grow-1 position-relative">
                  <label class="form-label">Location</label>
                  <input id="searchBox" type="text" v-model="query"
                    class="form-control form-guest-selector form-control-border form-fs-md form-control-transparent"
                    placeholder="Search location" @input="onInput" />
                  <ul v-if="autocompleteResults.length > 0" id="autocompleteResults" class="autocomplete-results">
                    <li v-for="result in autocompleteResults" :key="result.id" class="autocomplete-item"
                      @click="selectItem(result)">
                      <i :class="`fa ${result.icon}`"></i>
                      <div>
                        <strong>{{ result.label }}</strong> ({{ result.subcategory }})<br />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>

            <b-col lg="4">
              <div class="d-flex">
                <BIconCalendar class="me-2" height="44" width="44" style="margin-top: 12px;" />
                <div class="form-control-border form-control-transparent form-fs-md">
                  <CustomFlatpicker id="date-input2" label="Check in - out" placeholder="Select dates" class="flatpickr"
                    :options="{ mode: 'range', minDate: 'today', defaultDate: checkInOut }"
                    @dateData="handleDateData" />
                </div>
              </div>
            </b-col>

            <b-col lg="4">
              <div class="form-control-border form-control-transparent form-fs-md d-flex">
                <BIconPerson class="me-2" height="44" width="44" style="margin-top: 12;" />
                <div class="w-100">
                  <GuestAndRoomForm v-model="formValue" label="Guests & rooms" @guestData="handleGuestData" />
                </div>
              </div>
            </b-col>
          </b-row>

          <div class="btn-position-md-middle">
            <a :disabled="isLoading" class="icon-lg btn btn-round btn-primary mb-0" href="#" @click.prevent="search">
              <span v-if="!isLoading">
                <BIconSearch class="fa-fw" />
              </span>
              <span v-else>
                <b-spinner small></b-spinner>
              </span>
            </a>
          </div>

        </b-form>
      </div>
    </b-row>
  </header>
</template>


<script setup lang="ts">
import { BIconBookmarkCheck, BIconPower, BIconSun, BIconMoonStars, BIconCircleHalf, BIconSearch, BIconToggleOff, BIconToggles, BIconList, BIconPersonCircle } from 'bootstrap-icons-vue'
import avatar1 from '@/assets/images/avatar/01.jpg'
import { computed, onMounted, ref, watch } from 'vue'
import router from '@/router'
import type { ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import AppMenu from '@/components/navbar/AppMenu.vue'
import { filterHotelDataStore, useAuthStore, useCurrencyCode } from '@/stores/auth'
import CustomDropDown from '@/components/CustomDropDown.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'
import LogoBox from "@/components/LogoBox.vue";
import { BIconGeoAlt, BIconCalendar, BIconPerson } from 'bootstrap-icons-vue';
import CustomFlatpicker from '@/components/CustomFlatpicker.vue';
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue';
import type { GuestAndRoomFormType } from '@/types';
import moment from 'moment';
import { FaBars } from 'oh-vue-icons/icons'
import { FilterHotels } from '@/helpers/backend-api'
import { useRoute } from 'vue-router'

// Reactive references
const useCurrency = useCurrencyCode()
const currencyData = useCurrency.getData()
const isLoading = ref(false);
const error = ref('');
const showModal = ref(false);
const isDropdownOpen = ref(false);
const dropdown = ref();
const selectedCurrency = ref(currencyData?.symbol || '$');
const selectedFlag = ref(currencyData?.flag || 'https://flagcdn.com/w320/us.png');
const query = ref<string>('');
let isSticky = ref<boolean>(false)
let isSticky2 = ref<boolean>(false);
  const famousCountries = ref([
  { name: 'United States', currency_code: 'USD', currencySymbol: '$', flag: 'https://flagcdn.com/w320/us.png' },
  { name: 'United Kingdom', currency_code: 'GBP', currencySymbol: '£', flag: 'https://flagcdn.com/w320/gb.png' },
  { name: 'European Union', currency_code: 'EUR', currencySymbol: '€', flag: 'https://flagcdn.com/w320/eu.png' },
  { name: 'Canada', currency_code: 'CAD', currencySymbol: 'C$', flag: 'https://flagcdn.com/w320/ca.png' },
  { name: 'Australia', currency_code: 'AUD', currencySymbol: 'A$', flag: 'https://flagcdn.com/w320/au.png' },
]);

const themeModes: ThemeModeType[] = [
  {
    icon: BIconSun,
    theme: 'light'
  },
  {
    icon: BIconMoonStars,
    theme: 'dark'
  },
  {
    icon: BIconCircleHalf,
    theme: 'auto'
  }
]

const route = useRoute();
const useLayout = useLayoutStore()
const filterHotel = filterHotelDataStore();

const useAuth = useAuthStore();
const userDetail = computed(() => useAuth.getUserData());

const userDetails = ref(userDetail.value || 'None');
watch(
  () => userDetail.value,
  (newValue:any, oldValue:any) => {
    if (newValue) {
      userDetails.value = newValue; 
    } else {
      userDetails.value = 'None'; 
    }
  },
  { immediate: true }
);

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
});

const emit = defineEmits(['searchData']);
let selectedDestination: any = '';
let destinationType: any = '';
let guestData: any = null;
let flatDateData: any = null;

interface Currency {
  name: string;
  symbol: string;
}

interface Country {
  name: { common: string };
  currencies: { [key: string]: Currency };
  flags: { png: string };
}

const checkInOut = ref([new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)]);
const autocompleteResults: any = ref([]);
const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 2,
    rooms: 1,
    children: 0,
    childAges: []
  }
});

const navigateToRoute = (route: string) => {
  router.push(route);
};

const SignOut = (route: string) => {
  useAuth.removeSession();
  router.push(route);
};


const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Handle country selection

const selectedCountry = ref(famousCountries.value[0].currency_code);
const selectCountry = (country: { name: string; currency_code: string; currencySymbol: string; flag: string }) => {
  selectedCurrency.value = country.currencySymbol;
  selectedFlag.value = country.flag;
  selectedCountry.value = country.currency_code;
  isDropdownOpen.value = false;
  let currencyData = {
    symbol:selectedCurrency.value,
    flag: selectedFlag.value,
    code: selectedCountry.value,
  }
  console.log('Currency : ' + currencyData);
  useCurrency.saveSession(currencyData);
  window.location.reload();

}; 

// Event handlers
const handleGuestData = (data: any) => {
  const plainData = JSON.parse(JSON.stringify(data.ChildAges));
  const filterInfants = plainData.filter((item: any) => item < 5);
  const Data = [{
    Adults: data.Adults,
    ChildAges: plainData,
    Children: data.Children,
    Infants: filterInfants.length
  }];
  guestData = JSON.stringify(Data);
};

const handleDateData = (data: { checkIn: Date; checkOut: Date }) => {
  console.log('Function Hit');
  console.log(data);

  const dataData = {
    checkIn: moment(data.checkIn, 'DD/MM/YYYY').format('YYYY-MM-DD'),
    checkOut: moment(data.checkOut, 'DD/MM/YYYY').format('YYYY-MM-DD')
  };
  flatDateData = dataData;
};


const getLocationDetails = (result: any) => {
  // console.log("Processing result:", result);
  if (result.type === 'Country') return { icon: 'fa-globe', subcategory: 'Country' };
  if (result.type === 'County') return { icon: 'fa-map', subcategory: 'County' };
  if (result.type === 'Municipality' || result.entityType === 'Municipality') return { icon: 'fa-city', subcategory: 'City' };
  if (result.type === 'MunicipalitySubdivision' || result.type === 'Neighbourhood') return { icon: 'fa-building', subcategory: 'Neighborhood' };

  // Handle POIs
  if (result.entityType === 'POI' || result.type === 'POI') {
    switch (result.poiType) {
      case 'Stadium':
      case 'AmusementPlace':
      case 'Theater':
        return { icon: 'fa-ticket', subcategory: 'Entertainment Venue' };
      case 'Museum':
        return { icon: 'fa-museum', subcategory: 'Museum' };
      case 'Park':
        return { icon: 'fa-tree', subcategory: 'Park' };
      case 'Beach':
        return { icon: 'fa-umbrella-beach', subcategory: 'Beach' };
      case 'Mountain':
        return { icon: 'fa-mountain', subcategory: 'Mountain' };
      case 'Restaurant':
        return { icon: 'fa-utensils', subcategory: 'Restaurant' };
      case 'Shopping':
        return { icon: 'fa-shopping-cart', subcategory: 'Shopping' };
      default:
        return { icon: 'fa-map-pin', subcategory: 'Point of Interest' };
    }
  }

  // console.log("Unhandled result type:", result.type, "entityType:", result.entityType);
  return { icon: 'fa-map-marker-alt', subcategory: 'Location' };
};

const fetchSuggestions = async (url: string, method: string, headers: Record<string, string>, body?: string) => {
  try {
    const response = await fetch(url, { method, headers, body });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

const getAzureSearchSuggestions = async (query: string) => {
  const azureSearchConfig = {
    endpoint: "https://ivhotels.search.windows.net",
    apiVersion: "2023-07-01-Preview",
    index: "ivhotelunifed",
    apiKey: "ocloBm1loZndYVbCwfcIpiwzBKON3CZOas97yYnUkgAzSeDGl7Cq"
  };

  const url = `${azureSearchConfig.endpoint}/indexes/${azureSearchConfig.index}/docs/suggest?api-version=${azureSearchConfig.apiVersion}`;
  const body = JSON.stringify({
    search: query,
    suggesterName: "Hotel Name",
    select: "PropertyID,PropertyName",
    top: 5
  });

  const data = await fetchSuggestions(url, 'POST', { 'Content-Type': 'application/json', 'api-key': azureSearchConfig.apiKey }, body);
  return data.value?.map((result: any) => ({
    label: result.PropertyName,
    value: result.PropertyName,
    category: 'Hotel',
    subcategory: 'Hotel',
    id: result.PropertyID,
    icon: 'fa-hotel',
    score: 1
  })) || [];
};

const getAzureMapsSuggestions = async (query: string) => {
  // console.log("Fetching Azure Maps suggestions for:", query);
  const azureMapsKey = '6vqSZFe7VK4DhVUrhRAM39kq1IL0anpj4DAOMzRdqJjvAd5A5Ck0JQQJ99AFACYeBjFhSH7vAAAgAZMPEKh3';
  const url = `https://atlas.microsoft.com/search/fuzzy/json?api-version=1.0&subscription-key=${azureMapsKey}&query=${encodeURIComponent(query)}&typeahead=true&limit=10&idxSet=POI,Geo`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.results && Array.isArray(data.results)) {
      const filteredResults = data.results.filter((result: any) =>
        result.type === 'Country' ||
        result.type === 'Municipality' ||
        result.entityType === 'Municipality' ||
        result.type === 'County' ||
        result.type === 'MunicipalitySubdivision' ||
        result.type === 'Neighbourhood' ||
        result.entityType === 'POI' ||
        result.type === 'POI'
      );

      return filteredResults.map((result: any) => {
        const { icon, subcategory } = getLocationDetails(result);
        return {
          label: result.poi?.name || result.address.freeformAddress || result.address.municipality,
          value: result.poi?.name || result.address.freeformAddress || result.address.municipality,
          category: 'Location',
          subcategory: subcategory,
          id: result.id,
          icon: icon,
          score: result.score
        };
      });
    } else {
      console.warn("Azure Maps results format unexpected:", data);
      return [];
    }
  } catch (error) {
    console.error("Azure Maps error:", error);
    return [];
  }
};

const getCombinedSuggestions = async (query: string) => {
  // console.log("Getting combined suggestions for:", query);
  try {
    const [azureSearchResults, azureMapsResults] = await Promise.all([
      getAzureSearchSuggestions(query),
      getAzureMapsSuggestions(query)
    ]);
    const combinedResults = [...azureSearchResults, ...azureMapsResults];
    combinedResults.sort((a, b) => {
      if (a.label.toLowerCase().startsWith(query.toLowerCase()) && !b.label.toLowerCase().startsWith(query.toLowerCase())) return -1;
      if (!a.label.toLowerCase().startsWith(query.toLowerCase()) && b.label.toLowerCase().startsWith(query.toLowerCase())) return 1;
      return b.score - a.score;
    });
    return combinedResults;
  } catch (error) {
    console.error("Error in getCombinedSuggestions:", error);
    return [];
  }
};

const selectItem = (result: any) => {
  console.log(result);
  destinationType = result.subcategory
  selectedDestination = result.value
  query.value = result.value;
  autocompleteResults.value = [];
};

const onInput = async () => {
  if (query.value.length >= 1) {
    autocompleteResults.value = await getCombinedSuggestions(query.value);
  } else {
    autocompleteResults.value = [];
  }
};

// Search function
const search = async (): Promise<any> => {
  let Data: any = [{
    Adults: 2,
    ChildAges: [],
    Children: 0,
    Infants: 0
  }];
  Data = JSON.stringify(Data);
  const data = {
    room_requests: guestData ?? Data,
    location: selectedDestination,
    arrival_date: flatDateData.checkIn,
    end_date: flatDateData.checkOut,
    destinationType: destinationType
  };
  console.log(data);
  try {
    isLoading.value = true;
    const response = await FilterHotels(data);
    if (response.status) {
      error.value = '';
      filterHotel.saveSession({
        data: response.data,
        filterOptions: data
      });
      redirectUser();
    } else {
      error.value = response.message;
    }
  } catch (err: any) {
    error.value = 'Failed to filter, Please try again';
  } finally {
    isLoading.value = false;
  }
};

const redirectUser = () => {
  if (route.query.redirectedFrom) {
    return router.push(`${route.query.redirectedFrom}`);
  }
  return router.push('/');
};

const showFilter = () => {
  showModal.value = true;
  isSticky2.value = false;
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 200
    isSticky2.value = window.scrollY >= 200;

    if (isSticky2.value == false) {
      showModal.value = false
    }
    if (isSticky2.value == true) {
      showModal.value = false;
    }
  })
});

</script>

<style scoped>
.header-sticky.header-sticky-on {
  box-shadow: 1px 1px 10px rgba(95, 95, 95, 0.6);
}

.mainFilter {
  position: relative;
  display: flex;
  justify-content: space-around;
  z-index: 1060;
  width: 50%;
  margin: auto;
  padding: 4px;
  border-radius: 10px;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 5px #cfcfcf;
}

.mainNav {
  position: relative;
  max-width: 95% !important;
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
}

.navbar {
  background-color: #3D3ED0;
  padding: 8px 0px;
}

.flag {
  width: 24px;
  height: 16px;
  margin-right: 8px;
}

.h6 {
  color: white;
}

.btn3 {
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 10px;
}
.signIn-icon{
  font-size: 40px;
  color: white;
  margin-top: 7px;

}

.large-icon {
  color: white;
  font-size: 1.5rem;
}

.btn-group.btn {
  margin-bottom: 0px !important;
}

.icon_btn {
  color: white;
  margin-right: 20px;
}

.main-icons {
  color: white;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 26px
}

.icon_btn2 {
  /* display: contents; */
  margin-right: 20px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 22px;
  color: white;
}

.flag {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.autocomplete-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 0.25rem;
  background-color: #fff;
  z-index: 1000;
  padding: 8px;
  box-shadow: 1px 2px 20px rgba(61, 61, 61, 0.3);
}

.autocomplete-item {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.autocomplete-item i {
  margin-right: 8px;
}

.autocomplete-item small {
  color: #9b9b9b;
  font: bold;
}

.autocomplete-item:hover {
  background-color: rgba(81, 67, 217, 0.15);
}

.mainDropDown {
  position: relative;
}

.b-dropdown.show .dropdown-menu {
  display: block;
}

.dropdown-menu.dropdown-animation.show {
  top: 0% !important;
}

@media (max-width: 639px) {
  .dropdown-menu.dropdown-animation.show {
    top: -20% !important;
    right: -10px !important;
  }
}
</style>
