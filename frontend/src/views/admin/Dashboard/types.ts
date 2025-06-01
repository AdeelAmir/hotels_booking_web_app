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
  image: string
  price: number
  link?: LinkType
}

export type RoomType = {
  name: string
  date: string
  image: string
  status: string
  link?: LinkType
}

export type ArrivalType = {
  name: string
  image: string
  hotelInfo: string[]
}

export type ReviewType = {
  name: string
  image: string
  rating: number
  review: number
}
