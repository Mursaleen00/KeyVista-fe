import { CustomAxiosErrorType } from '@/types/axios.error';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { URLS } from '../base-urls';

export interface RegisterPayload {
  email: string;
  password: string;
  fullName: string;
  profilePicture: string;
  country: string;
  city: string;
  phoneNumber: string;
  agreeWithPT: boolean;
}

export const useRegisterMutation = () => {
  const useRegister = async ({
    email,
    password,
    fullName,
    profilePicture,
    country,
    city,
    phoneNumber,
    agreeWithPT,
  }: RegisterPayload) => {
    const { data } = await axios.post(URLS.POST_REGISTER, {
      email,
      password,
      fullName,
      profilePicture,
      country,
      city,
      phoneNumber,
      agreeWithPT,
    });
    return data;
  };
  const mutation = useMutation({
    mutationFn: useRegister,
    onSuccess: () => toast.success('You are Register Successfully'),
    onError: (error: CustomAxiosErrorType) => {
      toast.error(error.response?.data.message as string);
    },
  });
  return mutation;
};
