import type { FAIconType, LinkType } from '@/types'

export type StatisticType = {
  title: string
  stat: string
  icon: FAIconType
  variant: string
}

export type HotelType = {
  name: string
  address: string
  price: number
  image: string
  link?: LinkType
}
