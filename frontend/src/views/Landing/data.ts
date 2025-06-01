import demo1 from '@/assets/images/landing/demos/01.jpg'
import demo2 from '@/assets/images/landing/demos/02.jpg'
import demo3 from '@/assets/images/landing/demos/03.jpg'
import demo4 from '@/assets/images/landing/demos/04.jpg'
import demo5 from '@/assets/images/landing/demos/05.jpg'
import demo6 from '@/assets/images/landing/demos/06.jpg'
import demo7 from '@/assets/images/landing/demos/07.jpg'
import demo8 from '@/assets/images/landing/demos/08.jpg'
import demo9 from '@/assets/images/landing/demos/09.jpg'
import demo10 from '@/assets/images/landing/demos/10.jpg'
import demo11 from '@/assets/images/landing/demos/11.jpg'
import demo12 from '@/assets/images/landing/demos/12.jpg'
import demo13 from '@/assets/images/landing/demos/13.jpg'
import demo14 from '@/assets/images/landing/demos/14.jpg'
import {
  faCar,
  faEarthAmericas,
  faHotel,
  faPlane,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

import type { LinkType, FAIconType } from '@/types'

type CategoryType = {
  label: string
  icon: FAIconType
  link?: LinkType
}

type DemoType = {
  image?: string
  title: string
  description: string
  link: LinkType
}

export const categories: CategoryType[] = [
  {
    label: 'Hotel',
    icon: faHotel,
    link: { name: 'hotels.home' }
  },
  {
    label: 'Flight',
    icon: faPlane,
    link: { name: 'flights.home' }
  },
  {
    label: 'Tour',
    icon: faEarthAmericas,
    link: { name: 'tour.home' }
  },
  {
    label: 'Cab',
    icon: faCar,
    link: { name: 'cabs.home' }
  },
  {
    label: 'Directory',
    icon: faMapMarkerAlt,
    link: { name: 'directories.home' }
  }
]

export const demoData: DemoType[] = [
  {
    image: demo1,
    title: 'Hotel booking',
    description: 'Best for hotel, listing and directory website',
    link: { name: 'hotels.home' }
  },
  {
    image: demo9,
    title: 'Hotel chain',
    description: 'Crafted for hotel chain with multiple locations/city',
    link: { name: 'hotels.chain' }
  },
  {
    image: demo12,
    title: 'Resort Booking',
    description: 'Suitable for Resort, Villa, Cabins & Cottages',
    link: { name: 'hotels.resort' }
  },
  {
    image: demo13,
    title: 'Directory',
    description: 'Suitable for all directory website',
    link: { name: 'directories.home' }
  },
  {
    image: demo2,
    title: 'Flight booking',
    description: 'Crafted for flight booking website',
    link: { name: 'flights.home' }
  },
  {
    image: demo3,
    title: 'Tour & Package booking',
    description: 'Tour, travel, guide and travel agents website',
    link: { name: 'tour.home' }
  },
  {
    image: demo4,
    title: 'Cab booking',
    description: 'Cab booking and Car rental website',
    link: { name: 'cabs.home' }
  },
  {
    image: demo14,
    title: 'Dashboard Pages',
    description: 'Agent dashboard page options',
    link: { name: 'admin.dashboard' }
  },
  {
    image: demo10,
    title: 'Account Pages',
    description: 'User account page options',
    link: { name: 'user.profile' }
  },
  {
    image: demo11,
    title: 'Agent Dashboard',
    description: 'Agent account page options',
    link: { name: 'agent.dashboard' }
  },
  {
    image: demo7,
    title: 'Hero image gallery',
    description: 'Hero with image and video gallery',
    link: { name: 'heroes.image-gallery' }
  },
  {
    image: demo8,
    title: 'Hero split',
    description: 'Split form and image style hero',
    link: { name: 'heroes.split' }
  },
  {
    image: demo6,
    title: 'Hero multiple searches',
    description: 'Hero with multiple form tab style',
    link: { name: 'heroes.multiple-search' }
  },
  {
    image: demo5,
    title: 'Hero Inline form',
    description: 'Creative inline form style with background image',
    link: { name: 'heroes.inline-form' }
  }
]
