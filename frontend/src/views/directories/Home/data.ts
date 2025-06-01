import {
  faBuildingColumns,
  faCar,
  faChampagneGlasses,
  faDumbbell,
  faHotel,
  faShoppingBag,
  faSpa
} from '@fortawesome/free-solid-svg-icons'

import type { CityType, NotificationType, OfferCardType, PlaceType, TestimonialType } from './types'

import place1 from '@/assets/images/category/directory/01.jpg'
import place2 from '@/assets/images/category/directory/02.jpg'
import place3 from '@/assets/images/category/directory/03.jpg'
import place4 from '@/assets/images/category/directory/04.jpg'
import place5 from '@/assets/images/category/directory/05.jpg'
import place6 from '@/assets/images/category/directory/06.jpg'
import hotel from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/08.jpg'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'

import city1 from '@/assets/images/category/hotel/nearby/01.jpg'
import city2 from '@/assets/images/category/hotel/nearby/02.jpg'
import city4 from '@/assets/images/category/hotel/nearby/04.jpg'
import city5 from '@/assets/images/category/hotel/nearby/05.jpg'
import city7 from '@/assets/images/category/hotel/nearby/07.jpg'
import city9 from '@/assets/images/category/hotel/nearby/09.jpg'

import offer1 from '@/assets/images/offer/01.jpg'
import offer2 from '@/assets/images/offer/02.jpg'
import offer3 from '@/assets/images/offer/03.jpg'

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

const greatPlaces: PlaceType[] = [
  {
    id: 1,
    category: {
      name: 'Museum',
      icon: faBuildingColumns
    },
    image: place1,
    name: 'Portland New Art Museum',
    address: 'W Century Blvd, Los Angeles',
    phoneNo: ' +(125) 548 996',
    link: { name: 'directories.detail' }
  },
  {
    id: 2,
    category: {
      name: 'Shopping',
      icon: faShoppingBag
    },
    image: place2,
    name: 'JP Shopping Mall in California',
    open: true,
    price: 449,
    recommended: true,
    link: { name: 'directories.detail' }
  },
  {
    id: 3,
    category: {
      name: 'Hotel',
      icon: faHotel
    },
    image: hotel,
    open: true,
    name: 'Courtyard by Marriott New York',
    address: 'W Century Blvd, Los Angeles',
    phoneNo: ' +(125) 548 996',
    link: { name: 'directories.detail' }
  },
  {
    id: 4,
    category: {
      name: 'Spa',
      icon: faSpa
    },
    image: place3,
    name: 'Emperor Resort & Spa',
    price: 350,
    recommended: true,
    link: { name: 'directories.detail' }
  },
  {
    id: 5,
    category: {
      name: 'Gym',
      icon: faDumbbell
    },
    image: place4,
    name: 'Phoenix Power Gym',
    address: 'W Century Blvd, Los Angeles',
    phoneNo: ' +(125) 548 996',
    open: true,
    link: { name: 'directories.detail' }
  },
  {
    id: 6,
    category: {
      name: 'Hotel',
      icon: faHotel
    },
    image: hotel2,
    open: true,
    name: 'Park Plaza Lodge Hotel',
    address: 'W Century Blvd, Los Angeles',
    phoneNo: ' +(125) 548 996',
    link: { name: 'directories.detail' }
  },
  {
    id: 7,
    category: {
      name: 'Automotive',
      icon: faCar
    },
    image: place5,
    name: 'Car Service & Repair',
    open: true,
    price: 599,
    recommended: true,
    link: { name: 'directories.detail' }
  },
  {
    id: 8,
    category: {
      name: ' Restaurant',
      icon: faChampagneGlasses
    },
    image: place6,
    name: 'El Torero Restaurant & Bar',
    address: 'W Century Blvd, Los Angeles',
    phoneNo: ' +(125) 548 996',
    link: { name: 'directories.detail' }
  }
]

const testimonialSlides: TestimonialType[] = [
  {
    image: avatar1,
    name: 'Carolyn Ortiz',
    description:
      'Size-like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effects wish change way and any wanted.',
    position: 'Ceo of Google',
    rating: 4.5
  },
  {
    image: avatar3,
    name: 'Louis Ferguson',
    description:
      'Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effects wish change way and any wanted.',
    position: 'Editor in Chief',
    rating: 4.5
  }
]

const topCities: CityType[] = [
  {
    name: 'San Francisco',
    image: city1,
    listing: 25
  },
  {
    name: 'Los Angeles',
    image: city2,
    listing: 18
  },
  {
    name: 'Sanjosh',
    image: city4,
    listing: 15
  },
  {
    name: 'New York',
    image: city5,
    listing: 12
  },
  {
    name: 'Brazil, Rio',
    image: city7,
    listing: 16
  },
  {
    name: 'Las Vegas',
    image: city9,
    listing: 13
  }
]

const specialOffers: OfferCardType[] = [
  {
    title: 'Get extra 20% discount on all SPA deals',
    subTitle: 'Valid till: 31 Dec',
    code: 'LOG12F',
    variant: 'primary',
    link: { name: 'offer-detail' }
  },
  {
    title: 'Hot Summer Nights',
    subTitle: 'Up to 3 nights free!',
    image: offer2,
    link: { name: 'offer-detail' }
  },
  {
    title: 'Get extra 20% discount on all Activity deals',
    subTitle: 'Valid till: 31 Dec',
    code: 'LOG125F',
    variant: 'info',
    link: { name: 'offer-detail' }
  },
  {
    title: 'Daily 50 Lucky Winners get a Free Stay',
    subTitle: 'Valid till: 15 Nov',
    image: offer1,
    link: { name: 'offer-detail' }
  },
  {
    title: 'Book & Enjoy',
    subTitle: '20% Off on the best available room rate',
    image: offer3,
    link: { name: 'offer-detail' }
  }
]

export { greatPlaces, specialOffers, testimonialSlides, topCities }
