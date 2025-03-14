// src/constant/urls.ts

// export urls
export const urls = {
  home: '/home',
  map: '/map',
  chat: '/chat',
  login: '/login',
  profile: '/profile',
  favorite: '/favorite',
  forgetPassword: '/forgot-password',
  addProperty: '/add-property',
  notification: '/notification',
  verification: '/verification',
  myProperties: '/my-properties',
  registration: '/registration ',
  privatePolicy: '/private-policy ',
  changePassword: '/change-password ',
  rentProperties: '/rent-properties ',
  termsAndConditions: '/terms-and-conditions',
  propertyDetails: (id: string) => `/property-details/${id}`,
};
