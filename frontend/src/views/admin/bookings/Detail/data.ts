import { faClone } from '@fortawesome/free-regular-svg-icons'
import {
  faBed,
  faArrowRightArrowLeft,
  faMountainSun,
  faStairs
} from '@fortawesome/free-solid-svg-icons'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

import room2 from '@/assets/images/category/hotel/4by3/02.jpg'
import room3 from '@/assets/images/category/hotel/4by3/03.jpg'
import room4 from '@/assets/images/category/hotel/4by3/04.jpg'
import room5 from '@/assets/images/category/hotel/4by3/05.jpg'

import type { FAIconType, LinkType } from '@/types'

type HotelFeatureType = {
  feature: {
    label: string
    name: string
  }
  icon: FAIconType
}

type BookingDetailType = {
  name: string
  checkIn: string
  checkOut: string
  guest: number
  amount: number
  payment: 'full-payment' | 'on-property' | 'half-payment'
  image: string
}

type HotelDetailType = {
  name: string
  address: string
  description: string
  images: string[]
  features: HotelFeatureType[]
  link?: LinkType
}

type ReservationType = {
  name: string
  image: string
  checkIn: string
  checkOut: string
  amount: number
}

export const hotel: HotelDetailType = {
  name: 'Courtyard by Marriott New York',
  address: '5855 W Century Blvd, Los Angeles - 90045',
  description:
    'Tolerably behavior may admit daughters offending her ask own. Praise effect wishes to change way and any wanted. Lively use looked latter regard had. Does he part last',
  images: [room2, room3, room4, room5],
  features: [
    {
      feature: {
        label: 'Type',
        name: 'King Suit'
      },
      icon: faBed
    },
    {
      feature: {
        label: 'Side',
        name: 'Left Side'
      },
      icon: faArrowRightArrowLeft
    },
    {
      feature: {
        label: 'Floor',
        name: '3rd Floor (T5)'
      },
      icon: faStairs
    },
    {
      feature: {
        label: 'View',
        name: 'Sea View'
      },
      icon: faMountainSun
    },
    {
      feature: {
        label: 'Size',
        name: '250 Sqft'
      },
      icon: faClone
    }
  ]
}

export const currentReservation: ReservationType = {
  name: 'Lori Stevens',
  image: avatar9,
  checkIn: '18 Dec 2022 9:00AM',
  checkOut: '22 Dec 2022 8:00PM',
  amount: 1528
}

export const bookingDetailList: BookingDetailType[] = [
  {
    name: 'Lori Stevens',
    checkIn: '18 Dec 2022',
    checkOut: '22 Dec 2022',
    guest: 4,
    amount: 1025,
    payment: 'full-payment',
    image: avatar9
  },
  {
    name: 'Billy Vasquez',
    checkIn: '23 Dec 2022',
    checkOut: '26 Dec 2022',
    guest: 3,
    amount: 847,
    payment: 'half-payment',
    image: avatar2
  },
  {
    name: 'Carolyn Ortiz',
    checkIn: '2 Jan 2022',
    checkOut: '5 Jan 2022',
    guest: 2,
    amount: 900,
    payment: 'on-property',
    image: avatar1
  },
  {
    name: 'Louis Ferguson',
    checkIn: '6 Jan 2022',
    checkOut: '10 Jan 2022',
    guest: 5,
    amount: 1458,
    payment: 'full-payment',
    image: avatar3
  },
  {
    name: 'Dennis Barrett',
    checkIn: '11 Jan 2022',
    checkOut: '14 Jan 2022',
    guest: 2,
    amount: 879,
    payment: 'half-payment',
    image: avatar4
  },
  {
    name: 'Frances Guerrero',
    checkIn: '15 Jan 2022',
    checkOut: '19 Jan 2022',
    guest: 4,
    amount: 1254,
    payment: 'full-payment',
    image: avatar5
  },
  {
    name: 'Carolyn Ortiz',
    checkIn: '20 Jan 2022',
    checkOut: '25 Jan 2022',
    guest: 3,
    amount: 1080,
    payment: 'full-payment',
    image: avatar6
  }
]
