import axios from 'axios';
import { URLS } from '../base-urls';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export interface EmailVerificationPayload {
  email: string;
}

export const useEmailVerificationMutation = () => {
  const emailVerification = async ({ email }: EmailVerificationPayload) => {
    const { data } = await axios.post(URLS.POST_VERIFY_OTP, {
      email,
    });

    console.log('🚀 ~ verifyEmail ~ data:', data);
    return data;
  };

  const mutation = useMutation({
    mutationFn: emailVerification,
    onSuccess: () => toast.success('Email verified successfully'),
  });

  return mutation;
};
