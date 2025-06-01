import {
  BIconBoxArrowInRight,
  BIconBoxArrowRight as BIconBoxArrowRight,
  BIconDoorOpen,
  BIconXCircle
} from 'bootstrap-icons-vue'
import type { HotelType, StatisticType } from './types'

import image1 from '@/assets/images/category/hotel/4by3/01.jpg'
import image2 from '@/assets/images/category/hotel/4by3/02.jpg'
import image3 from '@/assets/images/category/hotel/4by3/03.jpg'
import image4 from '@/assets/images/category/hotel/4by3/04.jpg'
import image5 from '@/assets/images/category/hotel/4by3/05.jpg'
import image6 from '@/assets/images/category/hotel/4by3/06.jpg'
import image8 from '@/assets/images/category/hotel/4by3/08.jpg'
import image9 from '@/assets/images/category/hotel/4by3/09.jpg'
import image11 from '@/assets/images/category/hotel/4by3/11.jpg'
import image12 from '@/assets/images/category/hotel/4by3/12.jpg'

export const statisticData: StatisticType[] = [
  {
    title: 'New Booked Rooms',
    stat: 56,
    progress: 60,
    variant: 'primary',
    icon: BIconDoorOpen,
    text: '16 new rooms booked',
    subText: 'today'
  },
  {
    title: 'Cancelled Rooms',
    stat: 12,
    progress: 60,
    variant: 'danger',
    icon: BIconXCircle,
    text: '2 canceled rooms',
    subText: 'today'
  },
  {
    title: 'Check-in',
    stat: 20,
    progress: 60,
    variant: 'success',
    icon: BIconBoxArrowInRight,
    text: '45 reservation',
    subText: 'incoming'
  },
  {
    title: 'Check-out',
    stat: 28,
    progress: 60,
    variant: 'warning',
    icon: BIconBoxArrowRight,
    text: '30 reservation',
    subText: 'outgoing'
  }
]

// export const hotelList: HotelType[] = [
//   {
//     name: 'Deluxe Pool View with Breakfast',
//     floor: 'Ground Floor: G5',
//     bed: 'Double Bed',
//     rating: 4.5,
//     price: 1500,
//     image: image2,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Premium Room With Balcony',
//     floor: 'First Floor: F3',
//     bed: 'Single Bed',
//     rating: 4.0,
//     price: 750,
//     image: image3,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Deluxe Pool View',
//     floor: 'Ground Floor: G3',
//     bed: 'Family Bed',
//     rating: 4.2,
//     price: 895,
//     image: image4,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Superior Room',
//     floor: 'First Floor: F5',
//     bed: 'King Bed',
//     rating: 4.0,
//     price: 750,
//     image: image5,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Studio Suite King',
//     floor: 'Fifth Floor: Ft3',
//     bed: 'Double Bed',
//     rating: 4.0,
//     price: 1458,
//     image: image6,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Rock Family Suite',
//     floor: 'Second Floor: S4',
//     bed: 'Single Bed',
//     rating: 4.6,
//     price: 1020,
//     image: image8,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Luxury Room with Balcony',
//     floor: 'Third Floor: T2',
//     bed: 'Family Bed',
//     rating: 4.6,
//     price: 847,
//     image: image9,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Premium Room With Balcony',
//     floor: 'Third Floor: T4',
//     bed: 'Family Bed',
//     rating: 3.9,
//     price: 995,
//     image: image1,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Deluxe Room Twin Bed With Balcony',
//     floor: 'Fifth Floor: Ft1',
//     bed: 'Double Bed',
//     rating: 4.8,
//     price: 1650,
//     image: image11,
//     link: { name: 'admin.bookings.detail' }
//   },
//   {
//     name: 'Rock Family Suite',
//     floor: 'Second Floor: S4',
//     bed: 'King Bed',
//     rating: 4.6,
//     price: 1420,
//     image: image12,
//     link: { name: 'admin.bookings.detail' }
//   }
// ]
