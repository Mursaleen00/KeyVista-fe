import { AxiosError } from 'axios';

export type CustomAxiosErrorType = AxiosError<{
  message: string;
}>;
export type CustomErrorResponse = AxiosError<{
  error: string;
}>;
