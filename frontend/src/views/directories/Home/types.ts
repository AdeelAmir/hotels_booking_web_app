import type { FAIconType, LinkType } from '@/types'

export type CategorySlide = {
  name: string
  image: any
}

export type PlaceType = {
  id: number
  category: {
    name: string
    icon: FAIconType
  }
  image: string
  name: string
  address?: string
  phoneNo?: string
  price?: number
  recommended?: boolean
  open?: boolean
  link?: LinkType
}

export type AboutType = {
  title: string
  image: any
  description: string
}

export type TestimonialType = {
  image: string
  description: string
  rating: number
  name: string
  position: string
}

export type CityType = {
  name: string
  image: string
  listing: number
}

export type OfferCardType = {
  title: string
  subTitle: string
  image?: string
  code?: string
  variant?: string
  link?: LinkType
}

export type NotificationType = {
  title: string
  content?: string
  time: string
}
