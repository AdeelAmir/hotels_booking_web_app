<template>
  <section class="py-3 py-sm-0 mt-4">
    <b-container>
      <b-button variant="primary" class="d-sm-none w-100 mb-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasEditsearch" aria-controls="offcanvasEditsearch">
        <BIconPencilSquare class="me-2" />
        Edit Search
      </b-button>

      <div class="offcanvas-sm offcanvas-top" tabindex="-1" id="offcanvasEditsearch"
        aria-labelledby="offcanvasEditsearchLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasEditsearchLabel">Edit search</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasEditsearch"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-2">
          <div class="bg-light p-4 rounded w-100">
            <b-form class="row g-4">
              <div v-if="error.length > 0" class="text-danger">{{ error }}</div>
              <b-col md="6" lg="4">
                <div class="flex-grow-1 position-relative">
                  <label class="form-label">Location</label>
                  <input id="searchBox" type="text" v-model="query"
                    class="form-control form-guest-selector form-control-border form-fs-md form-control-transparent"
                    placeholder="Search location" @input="onInput" />
                  <ul v-if="filteredResults.length > 0" id="autocompleteResults" class="autocomplete-results">
                    <li v-for="result in filteredResults" :key="result.id" class="autocomplete-item"
                      @click="selectLocation(result)">
                      <i :class="`fa ${result.icon}`"></i>
                      <div>
                        <strong>{{ result.label }}</strong> ({{ result.subcategory }})<br />
                        <small>ID: {{ result.id }}</small>
                      </div>
                    </li>
                  </ul>
                </div>
              </b-col>

              <b-col md="6" lg="3">
                <div class="form-fs-md">
                  <CustomFlatpicker id="date-input" label="Check in - out" placeholder="Select date" class="flatpickr"
                    :options="{ mode: 'range', minDate: 'today' }" :model-value="checkInOut"
                    @dateData="handleDateData" />
                </div>
              </b-col>

              <b-col md="6" lg="3">
                <div class="form-fs-md">
                  <div class="w-100">
                    <GuestAndRoomForm v-model="formValue" label="Guests & rooms" @guestData="handleGuestData" />
                  </div>
                </div>
              </b-col>

              <b-col md="6" lg="2" class="mt-md-auto">
                <a :disabled="isLoading" class="btn btn-lg btn-primary w-100 mb-0" href="#" @click.prevent="search">
                  <span v-if="!isLoading">
                    <BIconSearch class="fa-fw" />
                    Search
                  </span>
                  <span v-else>
                    <b-spinner small></b-spinner>
                  </span>
                </a>
              </b-col>
            </b-form>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';
import { BIconSearch, BIconPencilSquare } from 'bootstrap-icons-vue';
import CustomFlatpicker from '@/components/CustomFlatpicker.vue';
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue';
import type { GuestAndRoomFormType } from '@/types';
// import { useToast } from 'vue-toastification';
import { useRoute } from 'vue-router';
import moment from 'moment';
import { FilterHotels, FilterIVectorHotels } from '@/helpers/backend-api';
import router from '@/router';
import { filterHotelDataStore } from '@/stores/auth';

// Reactive references
const isLoading = ref(false);
const error = ref('');
const route = useRoute();
const filterHotel = filterHotelDataStore();
// const toast = useToast();
const filteredResults = ref<LocationResult[]>([]);
let destinationType: any = '';


// Default values
// const defaultDestination = 'select-location';
const defaultCheckInOut = [new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)];
const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 1,
    rooms: 1,
    children: 0,
    childAges: []
  }
});

// Data from API or default
let filterOptions = filterHotel.getUserData().filterOptions;
console.log(filterHotel.getUserData().data);

const checkInOut = ref([
  filterOptions.arrival_date ? new Date(filterOptions.arrival_date) : defaultCheckInOut[0],
  filterOptions.end_date ? new Date(filterOptions.end_date) : defaultCheckInOut[1]
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

// Temporary data storage
let guestData: any = null;
let flatDateData: any = null;
let selectLocationData: any = null;

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
    checkIn: moment(data.checkIn).format('YYYY-MM-DD'),
    checkOut: moment(data.checkOut).format('YYYY-MM-DD')
  };
  flatDateData = dataData;
};

// Watchers
watch(selectedDestination, (newValue: any) => {
  selectLocationData = newValue;
});

// Define types for suggestions
interface LocationResult {
  label: string;
  value: string;
  category: string;
  subcategory: string;
  id: string;
  icon: string;
  score: number;
}

// Function to handle input and fetch suggestions
const onInput = async () => {
  if (query.value.length >= 1) {
    try {
      filteredResults.value = await getCombinedSuggestions(query.value);
    } catch (error) {
      console.error('Error in fetching suggestions:', error);
      filteredResults.value = [];
    }
  } else {
    filteredResults.value = [];
  }
};

// Function to handle location selection
const selectLocation = (result: LocationResult) => {
  console.log(result);
  selectedDestination = result.value;
  destinationType = result.subcategory
  console.log('destinationType : ' + destinationType);
  query.value = result.value;
  filteredResults.value = [];
};

const getLocationDetails = (result: any) => {
  console.log("Processing result:", result);
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

  console.log("Unhandled result type:", result.type, "entityType:", result.entityType);
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
  console.log("Fetching Azure Maps suggestions for:", query);
  const azureMapsKey = '6vqSZFe7VK4DhVUrhRAM39kq1IL0anpj4DAOMzRdqJjvAd5A5Ck0JQQJ99AFACYeBjFhSH7vAAAgAZMPEKh3';
  const url = `https://atlas.microsoft.com/search/fuzzy/json?api-version=1.0&subscription-key=${azureMapsKey}&query=${encodeURIComponent(query)}&typeahead=true&limit=10&idxSet=POI,Geo`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Azure Maps raw results:", data);

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

      // console.log("Filtered results:", filteredResults);

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
    const [azureSearchResults, azureMapsResults] = await Promise.all([
      getAzureSearchSuggestions(query),
      getAzureMapsSuggestions(query)
    ]);
    // console.log("Azure Search results count:", azureSearchResults.length);
    // console.log("Azure Maps results count:", azureMapsResults.length);
    const combinedResults = [...azureSearchResults, ...azureMapsResults];

    // Sort results based on relevance and category
    combinedResults.sort((a, b) => {
      if (a.label.toLowerCase().startsWith(query.toLowerCase()) && !b.label.toLowerCase().startsWith(query.toLowerCase())) return -1;
      if (!a.label.toLowerCase().startsWith(query.toLowerCase()) && b.label.toLowerCase().startsWith(query.toLowerCase())) return 1;
      return b.score - a.score;
    });

    // console.log("Combined and sorted results:", combinedResults);
    return combinedResults;
  } catch (error) {
    console.error("Error in getCombinedSuggestions:", error);
    return [];
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
  let Location = filterOptions.location;
  let checkIn = filterOptions.arrival_date;
  let checkOut = filterOptions.end_date;
  const data = {
    room_requests: guestData ?? Data,
    location: selectedDestination == '' ? Location : selectedDestination,
    arrival_date: flatDateData == null ? checkIn : flatDateData.checkIn,
    end_date: flatDateData == null ? checkOut : flatDateData.checkOut,
    destinationType: destinationType == '' ? filterOptions.destinationType : destinationType
  };

  try {
    isLoading.value = true;
    const response = await FilterHotels(data);
    if (response.status) {
      console.log(response.data);
      error.value = '';
      filterHotel.saveSession({
        data: response.data,
        filterOptions: data
      });
      
      await getIvectorData(data, response.data)
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

const getIvectorData = async(newQuery: any, Data: any) => {
  const data = {
    results: JSON.stringify(Data.PropertyResults),
    propertyIds: JSON.stringify(Data.propertyIds)
  };
  const response2 = await FilterIVectorHotels(newQuery, data);
  if (response2.status) {
    filterHotel.saveSession({
      data: response2.data,
      filterOptions: newQuery,
    });
    redirectUser();
  } else {
    error.value = response2.message
    console.error('Error from second API call:', response2.message);
  }
}

const redirectUser = () => {
  if (route.query.redirectedFrom) {
    return router.push(`${route.query.redirectedFrom}`);
  }
  return router.push('/');
};
</script>

<style scoped>
/* Styles for the suggestion box */
.autocomplete-results {
  position: absolute;
  top: 100%;
  /* Align below the input box */
  left: 0;
  right: 0;
  /* Make it same width as the input box */
  max-height: 300px;
  /* Adjust as needed */
  overflow-y: auto;
  /* Enable vertical scrolling */
  border-radius: 0.25rem;
  /* Rounded corners */
  background-color: #fff;
  /* Background color */
  z-index: 1000;
  /* Ensure it's above other elements */
  padding: 8px;
  box-shadow: 1px 2px 20px rgba(61, 61, 61, 0.3);
}

/* Styles for each suggestion item */
.autocomplete-item {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.autocomplete-item i {
  margin-right: 8px;
}

.autocomplete-item:hover {
  background-color: rgba(81, 67, 217, 0.15);
  /* Highlight on hover */
}
</style>