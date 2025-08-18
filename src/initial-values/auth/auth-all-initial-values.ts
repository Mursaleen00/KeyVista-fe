// src/initial-values/auth/auth-all-initial-values.ts

// ------------------------------- Change Password initialValues ----------------------------
export const changePasswordInitialValues = {
  OldPassword: '',
  NewPassword: '',
  conformPassword: '',
};

// ------------------------------- Forgot Password initialValues ----------------------------
export const forgotPasswordInitialValues = {
  password: '',
  conformPassword: '',
};

// ------------------------------- Login initialValues ----------------------------
export const loginInitialValues = {
  email: '',
  password: '',
};

// ------------------------------- Otp Email initialValues ----------------------------
export const otpEmailInitialValues = {
  email: '',
};

// ------------------------------ Registration initialValues ----------------------------
export const registrationInitialValues = {
  fullName: '',
  email: '',
  password: '',
  conformPassword: '',
  country: '',
  city: '',
  phoneNumber: '',
  profilePicture: '', // Default value for profile picture
  agreeWithPT: false, // Default value for agreeing with terms and privacy
};
