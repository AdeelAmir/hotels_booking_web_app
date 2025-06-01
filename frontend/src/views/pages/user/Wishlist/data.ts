import hotel1 from '@/assets/images/category/hotel/4by3/10.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/11.jpg'
import type { LinkType } from '@/types'

export type HotelType = {
  name: string
  address: string
  rating: number
  price: number
  image: string
  link?: LinkType
}

const wishListCards: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    rating: 4.5,
    price: 980,
    image: hotel1,
    link: { name: 'hotels.details' }
  },
  {
    name: 'Royal Beach Resort',
    address: 'Manhattan street, London - 24578',
    rating: 4.5,
    price: 540,
    image: hotel2,
    link: { name: 'hotels.details' }
  }
]

export { wishListCards }
