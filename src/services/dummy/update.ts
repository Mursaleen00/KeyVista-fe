import { PATCH } from '@/services/axios-request-handler';
import { CustomAxiosErrorType } from '@/types/axios.error';
import { TUpdateProfilePayload } from '@/types/update-profile-payload';
import { TUpdateProfileResponse } from '@/types/update-profile-response';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { URLS } from '../base-urls';

export const useUpdateProfileMutation = (): UseMutationResult<
  unknown,
  CustomAxiosErrorType,
  TUpdateProfilePayload
> => {
  const UpdateProfileFn = async (
    payload: TUpdateProfilePayload,
  ): Promise<TUpdateProfileResponse> => {
    const response = await PATCH(URLS.PATCH_UPDATE, payload);
    return response as TUpdateProfileResponse;
  };

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UpdateProfileFn,

    onSuccess: (message, variables, context) => {
      toast.success(message.message);
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      const message = error?.response?.data?.message;
      toast.error(message || 'Update profile failed');

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: ['me'] }),
  });
};
