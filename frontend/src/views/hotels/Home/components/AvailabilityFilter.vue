<template>
  <b-row class=" header-sticky" :class="{ 'd-none': isSticky }">
    <b-col xl="10" class="position-relative mt-n3 mt-xl-n9">
      <b-form class="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
        <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>
        <b-row class="g-4 align-items-center">
          <!-- Location Input -->
          <b-col lg="4">
            <div class="form-control-border form-control-transparent form-fs-md d-flex">
              <BIconGeoAlt class="fs-3 me-2 mt-3" />
              <div class="flex-grow-1 position-relative" ref="autocompleteContainer">
                <label class="form-label">Hotel/Location</label>
                <input id="searchBox" type="text" v-model="query"
                  class="form-control form-guest-selector form-control-border form-fs-md form-control-transparent"
                  @focus="onFocus" @input="onInput" placeholder="Search location" />

                <ul v-if="showOptions && autocompleteResults.length > 0" id="autocompleteResults"
                  class="autocomplete-results">
                  <li v-for="result in autocompleteResults" :key="result.id" class="autocomplete-item"
                    @click="selectItem(result)">
                    <i :class="`fa ${result.icon}`"></i>
                    <div>
                      <strong>{{ result.label }}</strong> ({{ result.subcategory }})<br />
                      <!-- <small>ID: {{ result.id }}</small> -->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <!-- Date Input -->
          <b-col lg="4">
            <div class="d-flex">
              <BIconCalendar class="me-2" height="44" width="44" style="margin-top: 12px;" />
              <div class="form-control-border form-control-transparent form-fs-md">
                <CustomFlatpicker id="date-input" label="Check in - out" placeholder="Select dates" class="flatpickr"
                  :options="{ mode: 'range', minDate: 'today', defaultDate: checkInOut }" :model-value="checkInOut"
                  @dateData="handleDateData" />
              </div>
            </div>
          </b-col>

          <!-- Guests & Rooms Input -->
          <b-col lg="4">
            <div class="form-control-border form-control-transparent form-fs-md d-flex">
              <BIconPerson class="me-2" height="44" width="44" style="margin-top: 12;" />
              <div class="w-100">
                <GuestAndRoomForm v-model="formValue" label="Guests & rooms" @guestData="handleGuestData" />
              </div>
            </div>
          </b-col>
        </b-row>
        <!-- Submit Button -->
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
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { BIconGeoAlt, BIconCalendar, BIconPerson, BIconSearch } from 'bootstrap-icons-vue';
import SelectFormInput from '@/components/SelectFormInput.vue';
import CustomFlatpicker from '@/components/CustomFlatpicker.vue';
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue';
import type { GuestAndRoomFormType } from '@/types';
import { useToast } from 'vue-toastification';
import { useRoute } from 'vue-router';
import moment from 'moment';
import { FilterHotels } from '@/helpers/backend-api';
import router from '@/router';
import { filterHotelDataStore } from '@/stores/auth';

// Reactive references
const isLoading = ref(false);
const showOptions = ref(false);
const error = ref('');
const route = useRoute();
const filterHotel = filterHotelDataStore();
const toast = useToast();
const emit = defineEmits(['searchData', 'error']);

// Query and route handling
// const query = route.query;
const defaultCheckInOut = [new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)];
let destinationType: any = '';
let searchValue: any = '';
const autocompleteResults: any = ref([]);
const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 2,
    rooms: 1,
    children: 0,
    childAges: []
  }
});

// Temporary data storage
let guestData: any = null;
let flatDateData: any = null;
// Data from API or default
let filterOptions = filterHotel.getUserData() ? filterHotel.getUserData().filterOptions : {};

const checkInOut = ref([
  filterOptions.arrival_date ? filterOptions.arrival_date : '',
  filterOptions.end_date ? filterOptions.end_date : ''
]);
let selectedDestination: any = '';
const query = ref<string>(filterOptions.location
  ?? '');

if (filterOptions.room_requests) {
  try {
    const parsedData = JSON.parse(filterOptions.room_requests);
    formValue.value = {
      guests: {
        adults: parsedData[0]?.Adults ?? 1,
        rooms: parsedData[0]?.Rooms ?? 1,
        children: parsedData[0]?.Children ?? 0,
        childAges: parsedData[0]?.ChildAges ?? []
      }
    };
  } catch (e) {
    console.error('Error parsing room requests:', e);
  }
}

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
  const dataData = {
    checkIn: moment(data.checkIn, 'DD/MM/YYYY').format('YYYY-MM-DD'),
    checkOut: moment(data.checkOut, 'DD/MM/YYYY').format('YYYY-MM-DD')
  };
  flatDateData = dataData;
};


const getLocationDetails = (result: any) => {
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
  console.log("Getting combined suggestions for:", query);
  try {
    searchValue = query
    const [azureSearchResults, azureMapsResults] = await Promise.all([
      getAzureSearchSuggestions(query),
      getAzureMapsSuggestions(query)
    ]);
    const combinedResults = [...azureSearchResults, ...azureMapsResults];

    // Sort results based on relevance and category
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
    // Fetch suggestions if the query is longer than 1 character
    autocompleteResults.value = await getCombinedSuggestions(query.value);
    showOptions.value = true;  // Show options when there's input
  } else {
    autocompleteResults.value = [];  // Clear results when query is empty
    showOptions.value = false;  // Hide options if there's no query
  }
};

// Function to handle clicks outside the input/search results
const handleClickOutside = (event: MouseEvent) => {
  const autocompleteContainer = document.querySelector('#autocompleteResults');
  const input = document.querySelector('#searchBox');
  if (
    autocompleteContainer && !autocompleteContainer.contains(event.target as Node) &&
    input && !input.contains(event.target as Node)
  ) {
    showOptions.value = false;  // Hide the search options if the click is outside
  }
};

const onFocus = () => {
  showOptions.value = true;  // Ensure options show when input is focused
};

onMounted(() => {
  // Add event listener when component is mounted
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  // Clean up the event listener when component is unmounted
  document.removeEventListener('click', handleClickOutside);
});

// Search function
const search = async (): Promise<any> => {
  let Data: any = [{
    Adults: 1,
    ChildAges: [],
    Children: 0,
    Infants: 0
  }];
  Data = JSON.stringify(Data);

  const data = {
    room_requests: guestData ?? Data,
    location: selectedDestination ? selectedDestination : searchValue ? searchValue : filterOptions.location,
    arrival_date: flatDateData ? flatDateData.checkIn : filterOptions.arrival_date,
    end_date: flatDateData ? flatDateData.checkOut : filterOptions.end_date,
    destinationType: destinationType
  };

  emit('searchData', data);
};

emit('error', (message: any) => {
  error.value = message;
});

let isSticky = ref<boolean>(false)

// Fetch countries when the component is mounted
onMounted(() => {
  const checkSticky = () => {
    if (window.innerWidth >= 1025) {
      isSticky.value = window.scrollY >= 620;
    } else {
      isSticky.value = false;
    }
  };
  window.addEventListener('scroll', checkSticky);
  checkSticky();
});


</script>



<style scoped>
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

.mainFilter {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  background-color: white;
  box-shadow: 1px 1px 20px #f1f1f1;
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

@media (min-width: 992px) and (max-width: 1330px) {
  .form-fs-md .flatpickr {
    font-size: 13px;
  }
}
</style>