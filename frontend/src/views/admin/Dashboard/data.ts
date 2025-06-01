import {
  faBed,
  faHotel,
  faBuildingCircleCheck,
  faHandHoldingDollar,
  faUser,
  faCartShopping,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import type { ArrivalType, HotelType, ReviewType, RoomType, StatisticType } from './types'

import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import hotel5 from '@/assets/images/category/hotel/4by3/05.jpg'
import hotel6 from '@/assets/images/category/hotel/4by3/06.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

const statisticData: StatisticType[] = [
  {
    title: 'Total User',
    stat: '56',
    icon: faUser,
    variant: 'warning'
  },
  {
    title: 'Total Income',
    stat: '$836,789',
    icon: faHandHoldingDollar,
    variant: 'success'
  },
  {
    title: 'Total Order',
    stat: '245',
    icon: faCartShopping,
    variant: 'primary'
  },
  {
    title: 'Completed Order',
    stat: '147',
    icon: faCheckCircle,
    variant: 'info'
  }
]

const popularHotels: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    image: hotel10,
    price: 1586,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Courtyard by Marriott New York',
    address: '258 W jimmy Street, New york - 24578',
    image: hotel8,
    price: 1025,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Park Plaza Lodge Hotel',
    address: '31J W Spark Street, California - 24578',
    image: hotel9,
    price: 958,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Royal Beach Resort',
    address: '589 J Wall Street, London - 24578',
    image: hotel7,
    price: 1005,
    link: { name: 'hotels.details' }
  }
]

const roomNotifications: RoomType[] = [
  {
    name: 'Deluxe Pool View with Breakfast',
    date: '18 Nov to 22 Nov',
    image: hotel4,
    status: 'booked'
  },
  {
    name: 'Deluxe Pool View',
    date: '16 Nov',
    image: hotel5,
    status: 'canceled'
  },
  {
    name: 'Luxury Room with Balcony',
    date: '15 Nov to 20 Nov',
    image: hotel6,
    status: 'booked'
  },
  {
    name: 'Premium Room With Balcony',
    date: '14 Nov to 16 Nov',
    image: hotel8,
    status: 'booked'
  },
  {
    name: 'Rock Family Suite',
    date: '13 Nov',
    image: hotel2,
    status: 'canceled'
  }
]

const upcomingArrivals: ArrivalType[] = [
  {
    name: 'Lori Stevens',
    hotelInfo: ['Room 25A', '24Nov - 28Nov'],
    image: avatar9
  },
  {
    name: 'Dennis Barrett',
    hotelInfo: ['Room 12B', '21Nov - 23Nov'],
    image: avatar3
  },
  {
    name: 'Jacqueline Miller',
    hotelInfo: ['Room 11A', '19Nov - 21Nov'],
    image: avatar1
  },
  {
    name: 'Billy Vasquez',
    hotelInfo: ['Room 05A', '14Nov - 18Nov'],
    image: avatar4
  },
  {
    name: 'Amanda Reed',
    hotelInfo: ['Room 9', '11Nov - 12Nov'],
    image: avatar5
  },
  {
    name: 'Dennis Barrett',
    hotelInfo: ['Room 10', '11Nov - 12Nov'],
    image: avatar8
  }
]

const hotelReviews: ReviewType[] = [
  {
    name: 'Deluxe Pool View with Breakfast',
    rating: 4,
    review: 35,
    image: hotel8
  },
  {
    name: 'Deluxe Pool View',
    rating: 4,
    review: 25,
    image: hotel9
  },
  {
    name: 'Luxury Room with Balcony',
    rating: 4,
    review: 18,
    image: hotel1
  },
  {
    name: 'Premium Room With Balcony',
    rating: 4,
    review: 8,
    image: hotel5
  },
  {
    name: 'Rock Family Suite',
    rating: 4.5,
    review: 11,
    image: hotel2
  }
]

export { hotelReviews, popularHotels, roomNotifications, statisticData, upcomingArrivals }
