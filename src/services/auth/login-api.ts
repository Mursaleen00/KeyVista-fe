import { CustomAxiosErrorType } from '@/types/axios.error';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { URLS } from '../base-urls';

interface payload {
  email: string;
  password: string;
}

export interface res {
  user: User;
  token: string;
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

export const useLoginMutation = () => {
  const useLogin = async ({ email, password }: payload) => {
    const { data } = await axios.post(URLS.POST_lOGIN, {
      email,
      password,
    });
    return data as res;
  };

  const mutation = useMutation({
    mutationFn: useLogin,
    onSuccess: () => toast.success('Login Successfully'),
    onError: (error: CustomAxiosErrorType) => {
      toast.error(error.response?.data.message as string);
    },
  });

  return mutation;
};
