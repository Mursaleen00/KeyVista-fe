import { DELETE } from '@/services/axios-request-handler';
import { CustomAxiosErrorType } from '@/types/axios.error';
import { TDeleteResponse } from '@/types/delete-response';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { URLS } from '../base-urls';

export const DeletePropertyMutation = (
  id: string,
): UseMutationResult<unknown, CustomAxiosErrorType, unknown> => {
  const DeletePropertyMutationFn = async (): Promise<TDeleteResponse> => {
    const response = await DELETE(URLS.DELETE_PROPERTIES_BY_ID(id));
    return response as TDeleteResponse;
  };

  return useMutation({
    mutationFn: DeletePropertyMutationFn,

    onSuccess: (message, context) => {
      toast.success(message.message);
      return {
        message,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      const message = error?.response?.data?.message;
      toast.error(message || 'Property Deletion Failed');

      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
