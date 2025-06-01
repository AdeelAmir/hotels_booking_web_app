import type { LinkType } from '@/types'

export type FAQType = {
  title: string
  description: string
}

export type ArticleType = {
  title: string
  total: number
  time: string
  like: number
  comment: number
  link?: LinkType
}
