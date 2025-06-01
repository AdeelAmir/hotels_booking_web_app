import type { BSIconType, LinkType } from '@/types'
import {
  BIconBarChartLineFill,
  BIconGraphUpArrow,
  BIconJournals,
  BIconStar
} from 'bootstrap-icons-vue'

export type StatisticType = {
  title: string
  stat: string
  icon: BSIconType
  variant?: string
}

export type UpcomingBookingType = {
  id: number
  name: string
  type: string
  date: string
  status: string
  payment: string
  link?: LinkType
}

export const statistics: StatisticType[] = [
  {
    title: 'Total Listings',
    stat: '56',
    icon: BIconJournals,
    variant: 'success'
  },
  {
    title: 'Earning',
    stat: '$2,55,365',
    icon: BIconGraphUpArrow,
    variant: 'info'
  },
  {
    title: 'Visitors',
    stat: '15K',
    icon: BIconBarChartLineFill,
    variant: 'warning'
  },
  {
    title: 'Total Reviews',
    stat: '12K',
    icon: BIconStar,
    variant: 'primary'
  }
]

export const upcomingBookings: UpcomingBookingType[] = [
  {
    id: 1,
    name: 'Deluxe Pool View',
    type: 'With Breakfast',
    date: 'Nov 22 - 25',
    status: 'booked',
    payment: 'full-payment'
  },
  {
    id: 2,
    name: 'Deluxe Pool View with Breakfast',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 24 - 28',
    status: 'booked',
    payment: 'on-property'
  },
  {
    id: 3,
    name: 'Luxury Room with Balcony',
    type: 'Free Cancellation | Breakfast + Lunch/Dinner',
    date: 'Nov 24 - 28',
    status: 'reserved',
    payment: 'half-payment'
  },
  {
    id: 4,
    name: 'Deluxe Room Twin Bed With Balcony',
    type: 'Free Cancellation',
    date: 'Nov 28 - 30',
    status: 'booked',
    payment: 'full-payment'
  },
  {
    id: 5,
    name: 'Room With Free Cancellation | Breakfast + Lunch',
    type: 'Free Cancellation',
    date: 'Nov 28 - 30',
    status: 'reserved',
    payment: 'full-payment'
  }
]
