import type { FAIconType, LinkType } from '@/types'

export type NotificationType = {
  title: string
  content?: string
  time: string
}

export type OfferType = {
  image: string
  title: string
  description: string
  link?: LinkType
}

export type FeaturedHotelType = {
  id: any
  hotelTags: []
  image: string
  images: any
  name: string
  price: number
  ratings: number
  overAllRating: number
  ratingCount: number
  // link?: LinkType
}

export type BenefitsFeatures = {
  title: string
  image: string
}

export type SubFeaturedHotelType = {
  image: string
  location: string
}

export type NearbyPlaceType = {
  image: string
  name: string
  travelTime: string
  link?: LinkType
}

export type ServiceType = {
  icon: FAIconType
  title: string
  description: string
  link?: LinkType
}
