import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import type { LinkType } from '@/types'

export type StoryType = {
  variant: string
  icon: IconDefinition
  heading: string
  text: string
}

export type MemberType = {
  image: any
  name: string
  designation: string
  link?: LinkType
}

export type BlogType = {
  avatar: string
  heading: string
  date: string
}

export type ArticleType = {
  image: string
  badge: string
  title: string
  description: string
  name: string
}
