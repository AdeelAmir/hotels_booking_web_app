import type { RouteParamsRaw } from 'vue-router'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import type { ComponentOptionsBase, CreateComponentPublicInstance } from 'vue'

export type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type FAIconType = IconDefinition

export type BSIconType = ComponentOptionsBase<{}, any, any, any, any, any, any, any, string, any> &
  ThisType<CreateComponentPublicInstance<{}, any, any, any, any, any, any, any, Readonly<{}>>>

export type IconType =
  | IconDefinition
  | (ComponentOptionsBase<{}, any, any, any, any, any, any, any, string, any> &
      ThisType<CreateComponentPublicInstance<{}, any, any, any, any, any, any, any, Readonly<{}>>>)

export type GuestAndRoomFormType = {
  guests: {
    adults: number
    children: number
    rooms: number
    childAges : any
  }
}
