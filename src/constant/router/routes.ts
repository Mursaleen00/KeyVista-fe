// src/constant/urls.ts

// export urls
export const urls = {
  // properties
  home: '/home',
  map: '/map',
  chat: '/chat',
  favorite: '/favorite',
  notification: '/notification',
  profile: '/profile',

  // Properties
  addProperty: '/add-property',
  myProperties: '/my-properties',
  Properties: '/properties ',
  rentProperties: '/rent-properties',
  buyProperties: 'buy-properties',
  propertyDetails: (id: string) => `/property-details/${id}`,

  // Authentication
  login: '/login',
  forgetPassword: '/forgot-password',
  verification: '/verification',
  registration: '/registration ',
  changePassword: '/change-password ',
  otpEmail: '/otp-email',

  //  privacyPolicy
  privatePolicy: '/private-policy ',
  termsAndConditions: '/terms-and-conditions',
};
