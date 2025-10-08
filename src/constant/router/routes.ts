// src/constant/urls.ts

// export urls
export const urls = {
  // properties
  home: '/',
  map: '/map',
  chat: '/chat',
  favorite: '/favorite',
  notification: '/notification',
  profile: '/profile',

  // Properties
  myProperties: '/properties/my-properties',
  addProperties: '/properties/add-properties',
  rentProperties: '/properties/rent-buy-properties?type=rent',
  buyProperties: '/properties/rent-buy-properties?type=buy',
  propertyDetails: (id: string) => `/property-details/${id}`,

  // Authentication
  login: '/login',
  forgetPassword: '/forgot-password',
  emailVerification: '/email-verification',
  registration: '/registration',
  changePassword: '/change-password',
  otpVerification: '/otp-verification',

  // Payment
  success: '/Payment/success',
  cancel: '/Payment/cancel',

  //  privacyPolicy
  privacyPolicy: '/privacy-policy',
  termsAndConditions: '/terms-and-conditions',
};
