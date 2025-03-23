import { GET } from '@/services/axios-request-handler';
import { TMeResponse } from '@/types/me-response';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { URLS } from '../base-urls';
import { CustomAxiosErrorType } from '@/types/axios.error';

export const useGetMeHook = (): UseQueryResult<
  TMeResponse,
  CustomAxiosErrorType
> => {
  const GetMeFn = async (): Promise<TMeResponse> => {
    const response = await GET(URLS.GET_ME);
    return response as TMeResponse;
  };

  return useQuery({
    queryFn: GetMeFn,
    queryKey: ['me'],
  });
};
