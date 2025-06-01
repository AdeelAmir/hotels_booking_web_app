import { faHotel, faPlane, faGlobeAmericas, faCar } from '@fortawesome/free-solid-svg-icons'
import type { FooterLink, FooterTopLink } from '@/types/layout'

const footerLinks: FooterLink[] = [
  {
    title: 'Page',
    items: [
      { name: 'Home', link: { name: 'hotels.home' } },
      { name: 'About us', link: { name: 'pages.about' } },
      { name: 'Contact us', link: { name: 'pages.contact' } },
      // {
      //   name: 'Hotel List',
      //   link: { name: 'hotels.list' }
      // }
    ]
  },
  {
    title: 'Link',
    items: [
      { name: 'Sign up', link: { name: 'auth.sign-up' } },
      { name: 'Sign in', link: { name: 'auth.sign-in' } },
      { name: 'Cookies',  },
      { name: 'Support', link: { name: 'pages.help.service' } }
    ]
  },
]

const topLinks: FooterTopLink[] = [
  { name: 'Flights', link: { name: '' } },
  { name: 'Hotels', link: { name: '' } },
  { name: 'Tour', link: { name: '' } },
  { name: 'Cabs', link: { name: '' } },
  { name: 'About', link: { name: '' } },
  { name: 'Contact us', link: { name: '' } },
  { name: 'Blogs', link: { name: '' } },
  { name: 'Services', link: { name: '' } },
  { name: 'Detail page', link: { name: '' } },
  { name: 'Policy', link: { name: '' } },
  { name: 'Testimonials', link: { name: '' } },
  { name: 'Newsletters', link: { name: '' } },
  { name: 'Podcasts' },
  { name: 'Protests' },
  { name: 'NewsCyber' },
  { name: 'Education' },
  { name: 'Sports' },
  { name: 'Tech and Auto' },
  { name: 'Opinion' },
  { name: 'Share Market' }
]

export { footerLinks, topLinks }
