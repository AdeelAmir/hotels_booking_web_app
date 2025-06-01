import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faHotel, faPlane, faGlobeAmericas, faCar } from '@fortawesome/free-solid-svg-icons'
import logoImg from '@/assets/images/logo.svg'
import lightLogo from '@/assets/images/logo-light.svg'
import errorImg from '@/assets/images/element/error.svg'
import element6Img from '@/assets/images/element/06.svg'
import element7Img from '@/assets/images/element/07.svg'
import element8Img from '@/assets/images/element/08.svg'
import about2Img from '@/assets/images/about/02.jpg'
import about3Img from '@/assets/images/about/03.jpg'
import about4Img from '@/assets/images/about/04.jpg'
import contactImg from '@/assets/images/element/contact.svg'
import about5Img from '@/assets/images/about/05.jpg'
import avatar1Img from '@/assets/images/avatar/01.jpg'
import avatar2Img from '@/assets/images/avatar/02.jpg'
import avatar3Img from '@/assets/images/avatar/03.jpg'
import avatar4Img from '@/assets/images/avatar/04.jpg'
import avatar5Img from '@/assets/images/avatar/05.jpg'
import avatar6Img from '@/assets/images/avatar/06.jpg'
import avatar9Img from '@/assets/images/avatar/09.jpg'
import team1Img from '@/assets/images/team/01.jpg'
import team2Img from '@/assets/images/team/02.jpg'
import team3Img from '@/assets/images/team/03.jpg'
import team4Img from '@/assets/images/team/04.jpg'
import team5Img from '@/assets/images/team/05.jpg'
import team6Img from '@/assets/images/team/06.jpg'
import team7Img from '@/assets/images/team/07.jpg'
import team8Img from '@/assets/images/team/08.jpg'
import team9Img from '@/assets/images/team/09.jpg'
import team10Img from '@/assets/images/team/10.jpg'
import element4Img from '@/assets/images/element/04.svg'
import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client8Img from '@/assets/images/client/08.svg'
import client5Img from '@/assets/images/client/05.svg'
import client6Img from '@/assets/images/client/06.svg'
import client3Img from '@/assets/images/client/03.svg'
import blog5Img from '@/assets/images/blog/05.jpg'
import blog6Img from '@/assets/images/blog/06.jpg'
import blog8Img from '@/assets/images/blog/08.jpg'
import blog10Img from '@/assets/images/blog/10.jpg'
import blog7Img from '@/assets/images/blog/07.jpg'
import blog11Img from '@/assets/images/blog/11.jpg'
import blog9Img from '@/assets/images/blog/09.jpg'
import blog12Img from '@/assets/images/blog/12.jpg'
import blog13Img from '@/assets/images/blog/13.jpg'

import type { BlogType, StoryType, MemberType } from '@/views/pages/type'

export {
  logoImg,
  lightLogo,
  errorImg,
  element6Img,
  element7Img,
  element8Img,
  about2Img,
  about3Img,
  about4Img,
  team3Img,
  team4Img,
  team5Img,
  team6Img,
  contactImg,
  about5Img,
  avatar1Img,
  avatar2Img,
  avatar3Img,
  avatar4Img,
  avatar5Img,
  avatar6Img,
  avatar9Img,
  team10Img,
  team1Img,
  team2Img,
  team7Img,
  team8Img,
  team9Img,
  element4Img,
  client1Img,
  client2Img,
  client3Img,
  client5Img,
  client6Img,
  client8Img,
  blog5Img,
  blog6Img,
  blog8Img,
  blog10Img,
  blog11Img,
  blog12Img,
  blog7Img,
  blog9Img,
  blog13Img
}

export const storyData: StoryType[] = [
  {
    variant: 'orange',
    icon: faHotel,
    heading: 'Hotel Booking',
    text: 'A pleasure exertion if believed provided to. All led out world this music while asked.'
  },
  {
    variant: 'success',
    icon: faPlane,
    heading: 'Flight Booking',
    text: 'Warrant private blushes removed an in equally totally Objection do Mr prevailed.'
  },
  {
    variant: 'primary',
    icon: faGlobeAmericas,
    heading: 'Tour Booking',
    text: 'Dashwood does provide stronger is. But discretion frequently sir she instruments.'
  },
  {
    variant: 'info',
    icon: faCar,
    heading: 'Cab Booking',
    text: 'Imprudence attachment him his for sympathize. Large above be to means.'
  }
]

export const teamMemberData: MemberType[] = [
  {
    image: team1Img,
    name: 'Dennis Barrett',
    designation: 'UK Tourist Guide'
  },
  {
    image: team2Img,
    name: 'Jacqueline Miller',
    designation: 'Us Tourist Guide'
  },
  {
    image: team3Img,
    name: 'Larry Lawson',
    designation: 'Editor in Chief'
  },
  {
    image: team4Img,
    name: 'Louis Ferguson',
    designation: 'CEO & Founder'
  },
  {
    image: team5Img,
    name: 'Louis Crawford',
    designation: 'Editor, Coverage'
  },
  {
    image: team6Img,
    name: 'Frances Guerrero',
    designation: 'Managing Editor'
  },
  {
    image: team7Img,
    name: 'Amanda Reed',
    designation: 'Managing Editor'
  },
  {
    image: team8Img,
    name: 'Samuel Bishop',
    designation: 'Co-Founder'
  },
  {
    image: team9Img,
    name: 'Lori Stevens',
    designation: 'Managing Editor'
  },
  {
    image: team10Img,
    name: 'Billy Vasquez',
    designation: 'CTO'
  }
]

export const blogData: BlogType[] = [
  {
    avatar: blog5Img,
    heading: 'Bad habits that people in the business industry need to quit',
    date: 'Sep 01, 2022'
  },
  {
    avatar: blog6Img,
    heading: 'Around the web: 20 fabulous info graphics about business',
    date: 'Sep 15, 2022'
  },
  {
    avatar: blog8Img,
    heading: `Ten unconventional tips about startups that you can't learn from books`,
    date: 'Sep 28, 2022'
  }
]

export const articleData = [
  {
    image: blog7Img,
    badge: 'warning',
    title: 'History',
    description: '7 common mistakes everyone makes while traveling',
    name: 'Joan Wallace'
  }
]
