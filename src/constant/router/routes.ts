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
  addProperty: '/add-property',
  myProperties: '/my-properties',
  rentProperties: '/properties/rent-buy-properties?type=rent',
  buyProperties: '/properties/rent-buy-properties?type=buy',
  propertyDetails: (id: string) => `/property-details/${id}`,

  // Authentication
  login: '/login',
  forgetPassword: '/forgot-password',
  verification: '/verification',
  registration: '/registration',
  changePassword: '/change-password',
  otpEmail: '/otp-email',

  // Payment
  success: '/Payment/success',
  cancel: '/Payment/cancel',

  //  privacyPolicy
  privatePolicy: '/private-policy',
  termsAndConditions: '/terms-and-conditions',
};
