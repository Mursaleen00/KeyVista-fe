export interface TUpdateProfileResponse {
  message: string;
  user: User;
}

export interface User {
  _id: string;
  fullName: string;
  country: string;
  city: string;
  phoneNumber: string;
  profilePicture: string;
  agreeWithPT: boolean;
  email: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
