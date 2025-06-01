export type Booking = {
  id: number
  name: string
  type: string
  date: string
  status: string
  payment: string
}

export const bookings: Booking[] = [
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
    name: 'Deluxe Room Twin Bed With Balcony',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 28 - 30',
    status: 'available',
    payment: 'on-property'
  },
  {
    id: 6,
    name: 'Premium Room With Balcony',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 14 - 18',
    status: 'cancel',
    payment: 'half-payment'
  },
  {
    id: 7,
    name: 'Deluxe Room King Bed with Balcony',
    type: 'Free Cancellation',
    date: 'Nov 28 - 30',
    status: 'reserved',
    payment: 'full-payment'
  },
  {
    id: 8,
    name: 'Superior Room',
    type: 'With Breakfast',
    date: 'Nov 22 - 25',
    status: 'booked',
    payment: 'full-payment'
  },
  {
    id: 9,
    name: 'Studio Suite King',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 21 - 24',
    status: 'reserved',
    payment: 'half-payment'
  },
  {
    id: 10,
    name: 'Rock Family Suite',
    type: 'Free Cancellation | Breakfast + Lunch/Dinner',
    date: 'Dec 02 - 06',
    status: 'booked',
    payment: 'full-payment'
  }
]
