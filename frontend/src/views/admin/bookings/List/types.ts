import type { BSIconType, LinkType } from '@/types'
import type { BaseColorVariant } from 'bootstrap-vue-next'

export type StatisticType = {
  title: string
  stat: number
  progress: number
  variant: keyof BaseColorVariant
  icon: BSIconType
  text: string
  subText: string
}

export type HotelType = {
  name: string
  floor: string
  bed: string
  rating: number
  price: number
  image: string
  link?: LinkType
}
