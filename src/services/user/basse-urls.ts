const isLive = true;

const apiUrls = 'https://keyvista-be-production.up.railway.app';

const localhost = 'http://localhost:3000';

const baseUrl = isLive ? apiUrls : localhost;
export const URLS = {
  GET_ME: `${baseUrl}/user/me`,
  PATCH_UPDATE: `${baseUrl}/user/update`,
  PATCH_CHANGE_PASSWORD: `${baseUrl}/user/change-password`,

  // Authentication

  POST_REGISTER: `${baseUrl}/auth/register`,
  POST_lOGIN: `${baseUrl}/auth/login`,
  POST_VERIFY_OTP: `${baseUrl}/auth/verify-otp`,
  POST_RESEND_OTP: `${baseUrl}/auth/resend-otp`,
  POST_FORGET_PASSWORD: `${baseUrl}/auth/forgot-password`,
  POST_RESET_PASSWORD: `${baseUrl}/auth/reset-password`,

  // Properties
  POST_PROPERTIES: `${baseUrl}/properties`,

  GET_PROPERTIES: `${baseUrl}/properties`,

  GET_PROPERTIES_BY_ID: (id: string) => `${baseUrl}/properties/${id}`,

  PATCH_PROPERTIES_BY_ID: (id: string) => `${baseUrl}/properties/${id}`,

  DELETE_PROPERTIES_BY_ID: (id: string) => `${baseUrl}/properties/${id}`,
};
