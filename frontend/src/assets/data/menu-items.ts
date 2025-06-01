import {
  BIconBell,
  BIconBookmarkHeart,
  BIconGear,
  BIconGraphUpArrow,
  BIconHeart,
  BIconHouseDoor,
  BIconJournals,
  BIconPeople,
  BIconPerson,
  BIconStar,
  BIconTicketPerforated,
  BIconTrash,
  BIconWallet,
  BIconBuildingFill,
  BIconAirplaneFill,
  BIconGlobeAmericas,
  BIconCarFrontFill
} from 'bootstrap-icons-vue'
import { faCar, faEarthAmericas, faHotel, faPlane } from '@fortawesome/free-solid-svg-icons'
import type { MenuItemType } from '@/types/layout'

export const bookingHomeMenuItems: MenuItemType[] = [
  {
    key: 'hotels-home',
    label: 'Hotel',
    link: { name: 'hotels.home' },
    icon: BIconBuildingFill
  },
  // {
  //   key: 'flights-home',
  //   label: 'Flight',
  //   link: { name: 'flights.home' },
  //   icon: BIconAirplaneFill
  // },
  // {
  //   key: 'tour-home',
  //   label: 'Tour',
  //   link: { name: 'tour.home' },
  //   icon: BIconGlobeAmericas
  // },
  // {
  //   key: 'cabs-home',
  //   label: 'Cab',
  //   link: { name: 'cabs.home' },
  //   icon: BIconCarFrontFill
  // }
]

export const USER_PROFILE_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'acc-user-profile',
    label: 'My Profile',
    link: { name: 'user.profile' },
    parentKey: 'acc-user',
    icon: BIconPerson
  },
  {
    key: 'acc-user-bookings',
    label: 'My Bookings',
    link: { name: 'user.bookings' },
    parentKey: 'acc-user',
    icon: BIconTicketPerforated
  },
  {
    key: 'acc-user-travelers',
    label: 'Travelers',
    link: { name: 'user.travelers' },
    parentKey: 'acc-user',
    icon: BIconPeople
  },
  // {
  //   key: 'acc-user-payment-details',
  //   label: 'Payment Details',
  //   link: { name: 'user.payment-details' },
  //   parentKey: 'acc-user',
  //   icon: BIconWallet
  // },
  // {
  //   key: 'acc-user-wishlist',
  //   label: 'Wishlist',
  //   link: { name: 'user.wishlist' },
  //   parentKey: 'acc-user',
  //   icon: BIconHeart
  // },
  // {
  //   key: 'acc-user-settings',
  //   label: 'Settings',
  //   link: { name: 'user.settings' },
  //   parentKey: 'acc-user',
  //   icon: BIconGear
  // },
  // {
  //   key: 'acc-user-delete',
  //   label: 'Delete Profile',
  //   link: { name: 'user.delete-profile' },
  //   parentKey: 'acc-user',
  //   icon: BIconTrash
  // }
]

export const AGENT_MENU_ITEMS: MenuItemType[] = [
  // {
  //   key: 'acc-dashboard',
  //   label: 'Dashboard',
  //   link: { name: 'agent.dashboard' },
  //   parentKey: 'acc-agent',
  //   icon: BIconHouseDoor
  // },
  // {
  //   key: 'acc-agent-listings',
  //   label: 'Listings',
  //   link: { name: 'agent.listings' },
  //   parentKey: 'acc-agent',
  //   icon: BIconJournals
  // },
  // {
  //   key: 'acc-agent-bookings',
  //   label: 'Bookings',
  //   link: { name: 'agent.bookings' },
  //   parentKey: 'acc-agent',
  //   icon: BIconBookmarkHeart
  // },
  // {
  //   key: 'acc-agent-activities',
  //   label: 'Activities',
  //   link: { name: 'agent.activities' },
  //   parentKey: 'acc-agent',
  //   icon: BIconBell
  // },
  // {
  //   key: 'acc-agent-earnings',
  //   label: 'Earnings',
  //   link: { name: 'agent.earnings' },
  //   parentKey: 'acc-agent',
  //   icon: BIconGraphUpArrow
  // },
  // {
  //   key: 'acc-agent-reviews',
  //   label: 'Reviews',
  //   link: { name: 'agent.reviews' },
  //   parentKey: 'acc-agent',
  //   icon: BIconStar
  // },
  // {
  //   key: 'acc-agent-settings',
  //   label: 'Settings',
  //   link: { name: 'agent.settings' },
  //   parentKey: 'acc-agent',
  //   icon: BIconGear
  // }
]

export const ADMIN_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    link: { name: 'admin.dashboard' }
  },
  {
    key: 'users',
    label: 'Users',
    link: { name: 'admin.user.list' },
  },
  {
    key: 'bookings',
    label: 'Bookings',
    link: { name: 'admin.bookings.list' },
    // children: [
    //   {
    //     key: 'bookings-list',
    //     label: 'Booking List',
    //     link: { name: 'admin.bookings.list' },
    //     parentKey: 'bookings'
    //   },
    // ]
  },
  // {
  //   key: 'guests',
  //   label: 'Guests',
  //   children: [
  //     {
  //       key: 'guests-list',
  //       label: 'Guest List',
  //       link: { name: 'admin.guests.list' },
  //       parentKey: 'guests'
  //     },
  //     {
  //       key: 'guests-detail',
  //       label: 'Guest Detail',
  //       link: { name: 'admin.guests.detail' },
  //       parentKey: 'guests'
  //     }
  //   ]
  // },
  // {
  //   key: 'agents',
  //   label: 'Agents',
  //   children: [
  //     {
  //       key: 'agents-list',
  //       label: 'Agent List',
  //       link: { name: 'admin.agents.list' },
  //       parentKey: 'agents'
  //     },
  //     {
  //       key: 'agents-detail',
  //       label: 'Agent Detail',
  //       link: { name: 'admin.agents.detail' },
  //       parentKey: 'agents'
  //     }
  //   ]
  // },
  // {
  //   key: 'reviews',
  //   label: 'Reviews',
  //   link: { name: 'admin.reviews' }
  // },
  // {
  //   key: 'earnings',
  //   label: 'Earnings',
  //   link: { name: 'admin.earnings' }
  // },
  {
    key: 'admin-settings',
    label: 'Admin Settings',
    link: { name: 'admin.settings' }
  },
  // {
  //   key: 'admin-auth',
  //   label: 'Authentication',
  //   children: [
  //     {
  //       key: 'auth-sign-up',
  //       label: 'Sign Up',
  //       link: { name: 'auth.sign-up' },
  //       parentKey: 'admin-auth'
  //     },
  //     {
  //       key: 'auth-sign-in',
  //       label: 'Sign in',
  //       link: { name: 'auth.sign-in' },
  //       parentKey: 'admin-auth'
  //     },
  //     {
  //       key: 'auth-forgot-password',
  //       label: 'Forgot Password',
  //       link: { name: 'auth.forgot-password' },
  //       parentKey: 'admin-auth'
  //     },
  //     {
  //       key: 'auth-two-factor-authentication',
  //       label: 'Two Factor Authentication',
  //       link: { name: 'auth.two-factor' },
  //       parentKey: 'admin-auth'
  //     },
  //     {
  //       key: 'auth-not-found',
  //       label: 'Error 404',
  //       link: { name: 'not-found' },
  //       parentKey: 'admin-auth'
  //     }
  //   ]
  // }
]

export const HELP_MENU_ITEMS: MenuItemType[] = [
  // {
  //   key: 'help-center',
  //   label: 'Help Center',
  //   isTitle: true,
  //   children: [
  //     {
  //       key: 'helps-center-page',
  //       label: 'Help Center',
  //       link: { name: 'pages.help.center' },
  //       parentKey: 'help-center'
  //     },
  //     {
  //       key: 'helps-detail-page',
  //       label: 'Help Detail',
  //       link: { name: 'pages.help.detail' },
  //       parentKey: 'help-center'
  //     }
  //   ]
  // },
  {
    key: 'helps-privacy-policy',
    label: 'Privacy Policy',
    link: { name: 'pages.help.privacy-policy' },
    isTitle: true
  },
  {
    key: 'helps-service',
    label: 'Terms of Service',
    link: { name: 'pages.help.service' },
    isTitle: true
  }
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'listings',
    label: 'Listings',
    isTitle: true,
    children: [
      {
        key: 'hotel',
        label: 'Hotel',
        parentKey: 'listings',
        children: [
          // {
          //   key: 'hotel-home',
          //   label: 'Hotel Home',
          //   link: { name: 'hotels.home' },
          //   parentKey: 'hotels'
          // },
          // {
          //   key: 'hotel-chain',
          //   label: 'Hotel Chain',
          //   link: { name: 'hotels.chain' },
          //   parentKey: 'hotels'
          // },
          // {
          //   key: 'hotel-resort',
          //   label: 'Hotel Resort',
          //   link: { name: 'hotels.resort' },
          //   parentKey: 'hotels'
          // },
          {
            key: 'hotel-grid',
            label: 'Hotel Grid',
            link: { name: 'hotels.grid' },
            parentKey: 'hotels'
          },
          {
            key: 'hotel-list',
            label: 'Hotel List',
            link: { name: 'hotels.list' },
            parentKey: 'hotels'
          },
          {
            key: 'hotel-detail',
            label: 'Hotel Detail',
            link: { name: 'hotels.details' },
            parentKey: 'hotels'
          },
          {
            key: 'hotel-room-detail',
            label: 'Room Detail',
            link: { name: 'hotels.room-details' },
            parentKey: 'hotels'
          },
          {
            key: 'hotel-booking',
            label: 'Hotel Booking',
            link: { name: 'hotels.booking' },
            parentKey: 'hotels'
          }
        ]
      },
      // {
      //   key: 'flights',
      //   label: 'Flight',
      //   parentKey: 'listings',
      //   children: [
      //     {
      //       key: 'flight-home',
      //       label: 'Flight Home',
      //       link: { name: 'flights.home' },
      //       parentKey: 'flights'
      //     },
      //     {
      //       key: 'flight-list',
      //       label: 'Flight List',
      //       link: { name: 'flights.list' },
      //       parentKey: 'flights'
      //     },
      //     {
      //       key: 'flight-detail',
      //       label: 'Flight Detail',
      //       link: { name: 'flights.details' },
      //       parentKey: 'flights'
      //     },
      //     {
      //       key: 'flight-booking',
      //       label: 'Flight Booking',
      //       link: { name: 'flights.booking' },
      //       parentKey: 'flights'
      //     }
      //   ]
      // },
      // {
      //   key: 'tour',
      //   label: 'Tour',
      //   parentKey: 'listings',
      //   children: [
      //     {
      //       key: 'tour-home',
      //       label: 'Tour Home',
      //       link: { name: 'tour.home' },
      //       parentKey: 'tour'
      //     },
      //     {
      //       key: 'tour-grid',
      //       label: 'Tour Grid',
      //       link: { name: 'tour.grid' },
      //       parentKey: 'tour'
      //     },
      //     {
      //       key: 'tour-detail',
      //       label: 'Tour Detail',
      //       link: { name: 'tour.detail' },
      //       parentKey: 'tour'
      //     },
      //     {
      //       key: 'tour-booking',
      //       label: 'Tour Booking',
      //       link: { name: 'tour.booking' },
      //       parentKey: 'tour'
      //     }
      //   ]
      // },
      // {
      //   key: 'cabs',
      //   label: 'Cab',
      //   parentKey: 'listings',
      //   children: [
      //     {
      //       key: 'cabs-home',
      //       label: 'Cab Home',
      //       link: { name: 'cabs.home' },
      //       parentKey: 'cabs'
      //     },
      //     {
      //       key: 'cabs-list',
      //       label: 'Cab List',
      //       link: { name: 'cabs.list' },
      //       parentKey: 'cabs'
      //     },
      //     {
      //       key: 'cabs-detail',
      //       label: 'Cab Detail',
      //       link: { name: 'cabs.detail' },
      //       parentKey: 'cabs'
      //     },
      //     {
      //       key: 'cabs-booking',
      //       label: 'Cab Booking',
      //       link: { name: 'cabs.booking' },
      //       parentKey: 'cabs'
      //     }
      //   ]
      // },
      // {
      //   key: 'directories',
      //   label: 'Directory',
      //   parentKey: 'listings',
      //   children: [
      //     {
      //       key: 'directory-home',
      //       label: 'Directory Home',
      //       link: { name: 'directories.home' },
      //       parentKey: 'directories'
      //     },
      //     {
      //       key: 'directory-detail',
      //       label: 'Directory Detail',
      //       link: { name: 'directories.detail' },
      //       parentKey: 'directories'
      //     }
      //   ]
      // },
      // {
      //   key: 'add-listing',
      //   label: 'Add Listing',
      //   parentKey: 'listings',
      //   children: [
      //     {
      //       key: 'add-listing-join-us',
      //       label: 'Join Us',
      //       link: { name: 'listings.join-us' },
      //       parentKey: 'add-listing'
      //     },
      //     {
      //       key: 'add-listing-listing',
      //       label: 'Add Listing',
      //       link: { name: 'listings.add' },
      //       parentKey: 'add-listing'
      //     },
      //     {
      //       key: 'add-listing-listing-minimal',
      //       label: 'Add Listing Minimal',
      //       link: { name: 'listings.add-minimal' },
      //       parentKey: 'add-listing'
      //     },
      //     {
      //       key: 'add-listing-listing-added',
      //       label: 'Listing Added',
      //       link: { name: 'listings.added' },
      //       parentKey: 'add-listing'
      //     }
      //   ]
      // },
      // {
      //   key: 'heroes',
      //   label: 'Hero',
      //   parentKey: 'listings',
      //   children: [
      //     {
      //       key: 'heroes-inline-form',
      //       label: 'Hero Inline Form',
      //       link: { name: 'heroes.inline-form' },
      //       parentKey: 'heroes'
      //     },
      //     {
      //       key: 'heroes-multiple-search',
      //       label: 'Hero Multiple Search',
      //       link: { name: 'heroes.multiple-search' },
      //       parentKey: 'heroes'
      //     },
      //     {
      //       key: 'heroes-image-gallery',
      //       label: 'Hero Image Gallery',
      //       link: { name: 'heroes.image-gallery' },
      //       parentKey: 'heroes'
      //     },
      //     {
      //       key: 'heroes-split',
      //       label: 'Hero Split',
      //       link: { name: 'heroes.split' },
      //       parentKey: 'heroes'
      //     }
      //   ]
      // },
      {
        key: 'booking-confirmed',
        label: 'Booking Confirmed',
        link: { name: 'booking-confirmed' },
        parentKey: 'listings'
      },
      // {
      //   key: 'compare-listing',
      //   label: 'Compare Listing',
      //   link: { name: 'compare-listing' },
      //   parentKey: 'listings'
      // },
      // {
      //   key: 'offer-detail',
      //   label: 'Offer Detail',
      //   link: { name: 'offer-detail' },
      //   parentKey: 'listings'
      // }
    ]
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-about',
        label: 'About',
        link: { name: 'pages.about' },
        parentKey: 'pages'
      },
      {
        key: 'pages-contact',
        label: 'Contact',
        link: { name: 'pages.contact' },
        parentKey: 'pages'
      },
      // {
      //   key: 'pages-contact-2',
      //   label: 'Contact 2',
      //   link: { name: 'pages.contact-2' },
      //   parentKey: 'pages'
      // },
      // {
      //   key: 'pages-our-team',
      //   label: 'Our Team',
      //   link: { name: 'pages.our-team' },
      //   parentKey: 'pages'
      // },
      {
        key: 'authentication',
        label: 'Authentication',
        parentKey: 'pages',
        children: [
          {
            key: 'authentication-sign-in',
            label: 'Sign In',
            link: { name: 'auth.sign-in' },
            parentKey: 'authentication'
          },
          {
            key: 'authentication-sign-up',
            label: 'Sign Up',
            link: { name: 'auth.sign-up' },
            parentKey: 'authentication'
          },
          {
            key: 'authentication-forgot-password',
            label: 'Forgot Password',
            link: { name: 'auth.forgot-password' },
            parentKey: 'authentication'
          },
          {
            key: 'authentication-two',
            label: 'Two Factor Authentication',
            link: { name: 'auth.two-factor' },
            parentKey: 'authentication'
          }
        ]
      },
      // {
      //   key: 'blogs',
      //   label: 'Blog',
      //   parentKey: 'pages',
      //   children: [
      //     {
      //       key: 'blogs-blog',
      //       label: 'Blog',
      //       link: { name: 'pages.blog' },
      //       parentKey: 'blogs'
      //     },
      //     {
      //       key: 'blogs-detail',
      //       label: 'Blog Detail',
      //       link: { name: 'pages.blog.detail' },
      //       parentKey: 'blogs'
      //     }
      //   ]
      // },
      {
        key: 'helps',
        label: 'Help',
        parentKey: 'pages',
        children: [
          {
            key: 'helps-center',
            label: 'Help Center',
            link: { name: 'pages.help.center' },
            parentKey: 'helps'
          },
          {
            key: 'helps-detail',
            label: 'Help Detail',
            link: { name: 'pages.help.detail' },
            parentKey: 'helps'
          },
          {
            key: 'helps-privacy-policy',
            label: 'Privacy Policy',
            link: { name: 'pages.help.privacy-policy' },
            parentKey: 'helps'
          },
          {
            key: 'helps-privacy-policy',
            label: 'Terms Of Service',
            link: { name: 'pages.help.service' },
            parentKey: 'helps'
          }
        ]
      },
      // {
      //   key: 'pricing',
      //   label: 'Pricing',
      //   link: { name: 'pages.pricing' },
      //   parentKey: 'pages'
      // },
      {
        key: 'faqs',
        label: 'FAQs',
        link: { name: 'pages.faq' },
        parentKey: 'pages'
      },
      {
        key: 'not-found',
        label: 'Error 404',
        link: { name: 'error-404' },
        parentKey: 'pages'
      },
      // {
      //   key: 'coming-soon',
      //   label: 'Coming Soon',
      //   link: { name: 'coming-soon' },
      //   parentKey: 'pages'
      // }
    ]
  },
  // {
  //   key: 'sign-in',
  //   label: 'Sign In',
  //   isTitle: true,
  //   link: { name: 'auth.sign-in' },
  // },
  // {
  //   key: 'accounts',
  //   label: 'Accounts',
  //   isTitle: true,
  //   children: [
  //     {
  //       key: 'acc-user',
  //       label: 'User Profile',
  //       parentKey: 'accounts',
  //       children: USER_PROFILE_MENU_ITEMS
  //     },
  //     // {
  //     //   key: 'acc-agent',
  //     //   label: 'Agent Dashboard',
  //     //   parentKey: 'accounts',
  //     //   children: AGENT_MENU_ITEMS
  //     // },
  //     {
  //       key: 'acc-admin',
  //       label: 'Master Admin',
  //       parentKey: 'accounts',
  //       link: { name: 'admin.dashboard' }
  //     }
  //   ]
  // }
  // {
  //   key: 'List Your Property',
  //   label: 'List Your Property',
  //   isTitle: true,
  // }
]
