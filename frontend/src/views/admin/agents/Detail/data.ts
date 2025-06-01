import { faCalendarDays, faMoneyBillTrendUp, faHotel } from '@fortawesome/free-solid-svg-icons'
import type { HotelType, StatisticType } from './types'

import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'

export const statisticsData: StatisticType[] = [
  {
    title: 'Total Hotels',
    stat: '04',
    icon: faHotel,
    variant: 'primary'
  },
  {
    title: 'Booking this month',
    stat: '56',
    icon: faCalendarDays,
    variant: 'warning'
  },
  {
    title: 'Earning this month',
    stat: '$2486.95',
    icon: faMoneyBillTrendUp,
    variant: 'success'
  }
]

export const hotelsList: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    price: 1586,
    image: hotel10,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Courtyard by Marriott New York',
    address: '258 W jimmy Street, New york - 24578',
    price: 1025,
    image: hotel8,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Park Plaza Lodge Hotel',
    address: '31J W Spark Street, California - 24578',
    price: 958,
    image: hotel9,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Royal Beach Resort',
    address: '589 J Wall Street, London - 24578',
    price: 1005,
    image: hotel7,
    link: { name: 'hotels.details' }
  }
]
