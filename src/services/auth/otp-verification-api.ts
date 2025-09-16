import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { URLS } from '../base-urls';
import axios from 'axios';
import { CustomErrorResponse } from '@/types/axios.error';

export interface OtpVerificationPayload {
  email: string;
  otp: string;
}

export const useOtpVerificationMutation = () => {
  const verifyEmail = async ({ email, otp }: OtpVerificationPayload) => {
    const { data } = await axios.post(URLS.POST_VERIFY_OTP, {
      email,
      otp,
    });
    return data;
  };

  const mutation = useMutation({
    mutationFn: verifyEmail,
    onSuccess: () => toast.success('Email verified successfully'),
    onError: (error: CustomErrorResponse) => {
      toast.error(error.response?.data.error as string);
    },
  });

  return mutation;
};
