import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faPlane, faCar } from '@fortawesome/free-solid-svg-icons'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import type { LinkType } from '@/types'

export type BookingType = {
  id: string
  flightType: string
  timing: {
    label: string
    name: string
  }[]
  travelRoute: string
  icon: IconDefinition
  cancelled?: boolean
  link?: LinkType
}

export const upcomingBookingData: BookingType[] = [
  {
    id: 'CGDSUAHA12548',
    flightType: 'Business class',
    travelRoute: 'France to New York',
    icon: faPlane,
    timing: [
      {
        label: 'Departure time',
        name: 'Tue 05 Aug 12:00 AM'
      },
      {
        label: 'Arrival time',
        name: 'Tue 06 Aug 4:00 PM'
      },
      {
        label: 'Booked by',
        name: 'Frances Guerrero'
      }
    ]
  },
  {
    id: 'CGDSUAHA12548',
    flightType: 'Camry, Accord',
    travelRoute: 'Chicago to San Antonio',
    icon: faCar,
    timing: [
      {
        label: 'Pickup address',
        name: '40764 Winchester Rd'
      },
      {
        label: 'Drop address',
        name: '11185 Mary Ball Rd'
      },
      {
        label: 'Booked by',
        name: 'Frances Guerrero'
      }
    ]
  }
]
