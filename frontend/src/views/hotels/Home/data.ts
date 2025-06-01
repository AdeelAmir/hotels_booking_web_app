import hotelNearby1 from '@/assets/images/category/hotel/nearby/01.jpg'
import hotelNearby2 from '@/assets/images/category/hotel/nearby/02.jpg'
import hotelNearby3 from '@/assets/images/category/hotel/nearby/03.jpg'
import hotelNearby4 from '@/assets/images/category/hotel/nearby/04.jpg'
import hotelNearby5 from '@/assets/images/category/hotel/nearby/05.jpg'
import hotelNearby6 from '@/assets/images/category/hotel/nearby/06.jpg'
import hotelNearby7 from '@/assets/images/category/hotel/nearby/07.jpg'
import hotelNearby8 from '@/assets/images/category/hotel/nearby/08.jpg'
import hotelNearby9 from '@/assets/images/category/hotel/nearby/09.jpg'
import hotelNearby10 from '@/assets/images/category/hotel/nearby/10.jpg'
import hotelNearby11 from '@/assets/images/category/hotel/nearby/11.jpg'

import beach from '@/assets/images/element/beach.svg'
import cabin from '@/assets/images/element/cabin.svg'
import camping from '@/assets/images/element/camping.svg'
import cave from '@/assets/images/element/cave.svg'
import desert from '@/assets/images/element/desert.svg'
import farm from '@/assets/images/element/farm.svg'
import island from '@/assets/images/element/island.svg'
import lake from '@/assets/images/element/lake.svg'
import park from '@/assets/images/element/park.svg'
import pool from '@/assets/images/element/pool.svg'
import tower from '@/assets/images/element/tower.svg'
import surf from '@/assets/images/element/surf.svg'

import hotel1 from '@/assets/images/category/hotel/01.jpg'
import hotel2 from '@/assets/images/category/hotel/02.jpg'
import hotel3 from '@/assets/images/category/hotel/03.jpg'
import hotel4 from '@/assets/images/category/hotel/04.jpg'
import hotel5 from '@/assets/images/category/hotel/4by3/05.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'
import hotel11 from '@/assets/images/category/hotel/4by3/11.jpg'

import offer1 from '@/assets/images/offer/01.jpg'
import offer4 from '@/assets/images/offer/04.jpg'
import offer3 from '@/assets/images/offer/03.jpg'
import offer2 from '@/assets/images/offer/02.jpg'


import { faHandHoldingDollar, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import type {
  BenefitsFeatures,
  FeaturedHotelType,
  NearbyPlaceType,
  NotificationType,
  OfferType,
  ServiceType
} from '@/views/hotels/Home/type'

export const notificationData: NotificationType[] = [
  {
    title: 'New! Booking flights from New York ✈️',
    content: 'Find the flexible ticket on flights around the world. Start searching today',
    time: '05 Feb 2024'
  },
  {
    title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
    time: '24 Aug 2024'
  }
]

export const offerData: OfferType[] = [
  {
    image: offer1,
    title: 'Daily 50 Lucky Winners get a Free Stay',
    description: 'Valid till: 15 Nov',
    link: { name: 'offer-detail' }
  },
  {
    image: offer4,
    title: 'Up to 60% OFF',
    description: 'On Hotel Bookings Online',
    link: { name: 'offer-detail' }
  },
  {
    image: offer3,
    title: 'Book & Enjoy',
    description: '20% Off on the best available room rate',
    link: { name: 'offer-detail' }
  },
  {
    image: offer2,
    title: 'Hot Summer Nights',
    description: 'Up to 3 nights free!',
    link: { name: 'offer-detail' }
  }
]

export const featuredHotelsData: FeaturedHotelType[] = [
  {
    id:1,
    location: 'California',
    image: hotel2,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'New Apollo Hotel',
    price: 585,
    ratings: 4.8,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }
  },
  {
    id:1,
    location: 'Los Angeles',
    image: hotel4,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'New Age Hotel',
    price: 385,
    ratings: 4.6,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }
  },
  {
    id:1,
    location: 'New York',
    image: hotel4,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'Bali Island',
    price: 455,
    ratings: 4.5,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }                          
  },
  {
    id:1,
    location: 'Chicago',
    image: hotel4,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'Helios Beach Resort',
    price: 665,
    ratings: 4.8,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }
  },  
  {
    id:1,
    location: 'USA',
    image: hotel3,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'The Beach',
    price: 455,
    ratings: 4.5,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }
  },
  {
    id:1,
    location: 'Switzerland',
    image: hotel3,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'Switzerland Resort',
    price: 23,
    ratings: 4.45,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }
  },
  {
    id:1,
    location: 'Los Angeles',
    image: hotel3,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'New Age Hotel',
    price: 385,
    ratings: 4.6,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }
  },
  {
    id:1,
    location: 'Chicago',
    image: hotel4,
    images : [hotel9, hotel2, hotel3, hotel1],
    name: 'Helios Beach Resort',
    price: 665,
    ratings: 4.8,
    desc: 'Luxury Isolation live here'
    // link: { name: 'hotels.details' }
  }
]


export const nearbyPlacesData: NearbyPlaceType[] = [
  {
    image: hotelNearby1,
    name: 'San Francisco',
    travelTime: '13 mins'
  },
  {
    image: hotelNearby2,
    name: 'Los Angeles',
    travelTime: '25 mins'
  },
  {
    image: hotelNearby3,
    name: 'Miami',
    travelTime: '45 mins'
  },
  {
    image: hotelNearby4,
    name: 'Sanjosh',
    travelTime: '55 mins'
  },
  {
    image: hotelNearby5,
    name: 'New York',
    travelTime: '1 hour'
  },
  {
    image: hotelNearby6,
    name: 'North Justen',
    travelTime: '2 hours'
  },
  {
    image: hotelNearby7,
    name: 'Rio',
    travelTime: '20 mins'
  },
  {
    image: hotelNearby8,
    name: 'Las Vegas',
    travelTime: '3 hours'
  },
  {
    image: hotelNearby9,
    name: 'Texas',
    travelTime: '55 mins'
  },
  {
    image: hotelNearby10,
    name: 'Chicago',
    travelTime: '13 mins'
  },
  {
    image: hotelNearby11,
    name: 'New Keagan',
    travelTime: '35 mins'
  },
  {
    image: hotelNearby1,
    name: 'Oslo',
    travelTime: '1 hour 13 mins'
  }
]

export const serviceData: ServiceType[] = [
  {
    icon: faHandHoldingHeart,
    title: '24x7 Help',
    description: 'If we fall short of your expectation in any way, let us know'
  },
  {
    icon: faHandHoldingDollar,
    title: 'Payment Trust',
    description: 'All refunds come with no questions asked guarantee'
  }
]

export const benefitsFeature: BenefitsFeatures[] = [
  {
    image: beach,
    title: 'Beaches',
  },
  {
    image: island,
    title: 'Islands',
  },
  {
    image: pool,
    title: 'Amazing Pools',
  },
  {
    image: camping,
    title: 'Camping',
  },
  {
    image: cabin,
    title: 'Cabin',
  },
  {
    image: lake,
    title: 'Lake Forest',
  },
  {
    image: park,
    title: 'National Park',
  },
  {
    image: cave,
    title: 'Caves',
  },
  {
    image: surf,
    title: 'Surfing',
  },
  {
    image: farm,
    title: 'Farms',
  },
  {
    image: tower,
    title: 'Towers',
  },
  {
    image: desert,
    title: 'Desert',
  }
]

export const categoryData = [
    { title: "Near lake", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Mountains", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "City centers", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Countryside", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Deserts", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Forests", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Coastal", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Beachfront", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Amazing views", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Surfing", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Skiing/Snowboarding", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Hiking", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Golfing", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Theme parks", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Historical sites", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Shopping", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Nightlife", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Wellness Adventure", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Gastronomic", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Watersports", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Amazing pools", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Spa & wellness", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Pet-friendly", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Family-friendly", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Eco-friendly", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Luxury", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "All-inclusive", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Adults Only", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Hotels", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Resorts", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Apartments", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Villas", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Hostels", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Camping", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Glamping", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Bed & Breakfasts", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Boutique", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Long stay", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Business travel", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Romantic getaways", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Solo travel", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Group travel", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Family", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Business", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Treehouse stays", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Overwater bungalows", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Ice hotels", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Cave hotels", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Houseboats", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    // { title: "OMG - Unusual, Unique, One-of-a-Kind Properties", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Luxury", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Mid-range", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Budget-friendly", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Backpacker", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Wedding", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Conference", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" },
    { title: "Business", image: "https://cdn-icons-png.flaticon.com/512/16162/16162052.png" }
];
