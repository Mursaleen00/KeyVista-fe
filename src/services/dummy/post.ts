import { POST } from '@/services/axios-request-handler';
import { LOGIN_PAYLOAD } from '@/types/auth-payload';
import { CustomAxiosErrorType } from '@/types/axios.error';
import { TLoginResponse } from '@/types/login-response';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { URLS } from '../base-urls';

export const useLoginMutation = (): UseMutationResult<
  unknown,
  CustomAxiosErrorType,
  LOGIN_PAYLOAD
> => {
  const LoginFn = async (payload: LOGIN_PAYLOAD): Promise<TLoginResponse> => {
    const response = await POST(URLS.POST_lOGIN, payload);
    return response as TLoginResponse;
  };

  return useMutation({
    mutationFn: LoginFn,

    onSuccess: (message, variables, context) => {
      toast.success('Login Successful');
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      const message = error?.response?.data?.message;
      toast.error(message || 'Login Failed');
      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
