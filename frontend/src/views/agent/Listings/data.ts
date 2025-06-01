import room4 from '@/assets/images/category/hotel/4by3/04.jpg'
import room5 from '@/assets/images/category/hotel/4by3/05.jpg'
import room6 from '@/assets/images/category/hotel/4by3/06.jpg'
import room8 from '@/assets/images/category/hotel/4by3/08.jpg'
import room10 from '@/assets/images/category/hotel/4by3/10.jpg'
import type { LinkType } from '@/types'

export type StatisticType = {
  title: string
  stat: string
  tag?: string
  change: string
  changeLabel: string
  variant: string
  linkLabel: string
  link?: LinkType
}

export type HotelType = {
  image: string
  name: string
  address: string
  price: number
  link?: LinkType
}

export const statistics: StatisticType[] = [
  {
    title: 'Earning',
    stat: '$25,869',
    change: '0.20%',
    changeLabel: 'vs last month',
    linkLabel: 'View statement',
    variant: 'success',
    tag: 'After US royalty withholding tax'
  },
  {
    title: 'Booked Rooms',
    stat: '58',
    change: '102',
    changeLabel: 'Total Rooms',
    linkLabel: 'View Bookings',
    variant: 'info'
  },
  {
    title: 'Available Rooms',
    stat: '42',
    change: '102',
    changeLabel: 'Total Rooms',
    linkLabel: 'View Rooms',
    variant: 'warning'
  }
]

export const hotelBookingList: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    image: room10,
    price: 1586,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Royal Beach Resort',
    address: 'Manhattan street, London - 24578',
    image: room5,
    price: 856,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Carina Beach Resort',
    address: '5855 W Century Blvd, Los Angeles - 90045',
    image: room4,
    price: 1025,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Courtyard by Marriott New York',
    address: 'Manhattan street, London - 24578',
    image: room6,
    price: 1125,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Beverly Hills Marriott',
    address: '31J W Spark Street, California - 24578',
    image: room8,
    price: 1005,
    link: { name: 'hotels.details' }
  }
]
