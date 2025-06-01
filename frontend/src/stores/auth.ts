import { defineStore } from 'pinia';
import router from '@/router';
import { useSessionStorage } from '@vueuse/core';
import type { UserType } from '@/types/auth';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth_store', () => {
  // Define session storage variables
  const user:any = useSessionStorage<UserType | null>('BOOKING_VUE_USER', null);
  const accessToken = useSessionStorage<string | null>('BOOKING_VUE_USER_TOKEN', null);

  // Function to save user session
  const saveSession = (newUser: any, userToken:any, expirationMinutes = 10) => {
    const userData = {
      data: newUser,
      expirationTime: new Date().getTime() + expirationMinutes * 60 * 1000
    };
    user.value = JSON.stringify(userData);
    accessToken.value =  userToken ? JSON.stringify(userToken) : accessToken.value;
  };
  

  // Function to remove user session
  const removeSession = () => {
    user.value = null;
    accessToken.value = null; 
    router.push('/sign-in');
  };

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    if (!user.value) return false;
    const parsedUser = JSON.parse(user.value);
    const currentTime = new Date().getTime();
    if (parsedUser.expirationTime && currentTime > parsedUser.expirationTime) {
      removeSession();
      return false;
    }
    return true;
  };

  // Function to get user data
  const getUserData = () => {
    if (!user.value) return null;
    return JSON.parse(user.value).data;
  };

  // Function to get user data
  const getUserToken = () => {
    if (!accessToken.value) return null;
    return JSON.parse(accessToken.value || 'null');;
  };

  return {
    user,
    saveSession,
    removeSession,
    isAuthenticated,
    getUserData,
    getUserToken
  };
});

export const useSettingStore = defineStore('setting_store', () => {
  const adminSettings:any = useSessionStorage<UserType | null>('ADMIN_VUE_SETTING', null);
  const saveSession = (data: any) => {
    adminSettings.value = JSON.stringify(data);
  };

  // Function to remove user session
  const removeSession = () => {
    router.push('/sign-in');
  };

  // Function to get user data
  const getData = () => {
    if (!adminSettings.value) return null;
    return JSON.parse(adminSettings.value);
  };

  return {
    adminSettings,
    saveSession,
    removeSession,
    getData,
  };
});

export const filterHotelDataStore = defineStore('filter_store', () => {
  const filterData:any = useSessionStorage<UserType | null>('FILTER_VUE_SETTING', null);
  const saveSession = (data: any) => {
    filterData.value = JSON.stringify(data);
    console.log('Data are saved successfully');
  };

  // Function to get user data
  const getUserData = () => {
    if (!filterData.value) return null;
    return JSON.parse(filterData.value);
  };

  const removeSession = () => {
    filterData.value = null;
    return null;
  };

  return {
    saveSession,
    getUserData,
    removeSession
  };
});

export const HotelDetailStore = defineStore('hotelDetail_store', () => {
  const hotelDetailData:any = useSessionStorage<UserType | null>('Detail_VUE_SETTING', null);
  const saveSession = (data: any) => {
    hotelDetailData.value = JSON.stringify(data);
  };

  // Function to get user data
  const getUserData = () => {
    if (!hotelDetailData.value) return null;
    return JSON.parse(hotelDetailData.value);
  };

  return {
    saveSession,
    getUserData,
  };
});

export const BookingDetails = defineStore('bookingDetail_store', () => {
  const BookingDetailData:any = useSessionStorage<UserType | null>('Detail_VUE_SETTING', null);
  const saveSession = (data: any) => {
    BookingDetailData.value = JSON.stringify(data);
  };

  // Function to get user data
  const getUserData = () => {
    if (!BookingDetailData.value) return null;
    return JSON.parse(BookingDetailData.value);
  };

  return {
    saveSession,
    getUserData,
  };
});

export const useResetEmailOtp = defineStore('VerifyOTP_email', () => {
  const OTPEmailData:any = useSessionStorage<UserType | null>('Detail_VUE_SETTING', null);
  const saveSession = (data: any) => {
    OTPEmailData.value = JSON.stringify(data);
  };

  // Function to get user data
  const getData = () => {
    if (!OTPEmailData.value) return null;
    return JSON.parse(OTPEmailData.value);
  };

  return {
    saveSession,
    getData,
  };
});

// export const useCurrencyCode = defineStore('Currency_Code', () => {
//   const currencyCode:any = useSessionStorage<UserType | null>('Currency_VUE_SETTING', null);
//   const saveSession = (data: any) => {
//     currencyCode.value = JSON.stringify(data);
//   };

//   // Function to get user data
//   const getData = () => {
//     if (!currencyCode.value) return null;
//     return JSON.parse(currencyCode.value);
//   };

//   return {
//     saveSession,
//     getData,
//   };
// });

export const useCurrencyCode = defineStore('Currency_Code', () => {
  const currencyCode = ref<string | null>(null);

  const saveSession = (data: any) => {
    currencyCode.value = JSON.stringify(data); 
    sessionStorage.setItem('Currency_VUE_SETTING', JSON.stringify(data));
  };

  const getData = () => {
    if (!currencyCode.value) {
      const savedCurrency = sessionStorage.getItem('Currency_VUE_SETTING');
      if (savedCurrency) {
        currencyCode.value = savedCurrency;
      }
    }
    return currencyCode.value ? JSON.parse(currencyCode.value) : null; 
  };

  return {
    currencyCode, 
    saveSession,
    getData,
  };
});


// ========================== Admin Routes Data =========================== //

export const DashboardStats = defineStore('Dashboard_Stats', () => {
  const dashboardStatics:any = useSessionStorage<UserType | null>('STATS_SETTING', null);
  const saveSession = (data: any) => {
    dashboardStatics.value = JSON.stringify(data);
  };

  // Function to get user data
  const getData = () => {
    if (!dashboardStatics.value) return null;
    return JSON.parse(dashboardStatics.value);
  };

  const removeSession = () => {
    dashboardStatics.value = null;
  };


  return {
    saveSession,
    getData,
    removeSession
  };
});

export const hotelListData = defineStore('Hotel_Lists', () => {
  const listData:any = useSessionStorage<UserType | null>('Lists_SETTING', null);
  const saveSession = (data: any) => {
    listData.value = JSON.stringify(data);
  };

  // Function to get user data
  const getData = () => {
    if (!listData.value) return null;
    return JSON.parse(listData.value);
  };

  const removeSession = () => {
    listData.value = null;
  };

  return {
    saveSession,
    getData,
    removeSession
  };
});


