import axiosInstance from '@/config/axios.config';

export const GET = async (endPoint: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(endPoint)
      .then(response => {
        if (response) resolve(response.data);
      })
      .catch((error: Error) => reject(error));
  });
};

export const POST = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
  token?: string,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(endPoint, data, {
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      })
      .then(response => {
        if (response) resolve(response.data);
      })
      .catch((error: Error) => reject(error));
  });
};

export const PUT = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
): Promise<unknown> =>
  new Promise((resolve, reject) => {
    axiosInstance
      .put(endPoint, data)
      .then(response => {
        if (response) resolve(response.data);
      })
      .catch((error: Error) => reject(error));
  });

export const PATCH = async (
  endPoint: string,
  data: unknown,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(endPoint, data)
      .then(response => {
        if (response) resolve(response.data);
      })
      .catch((error: Error) => reject(error));
  });
};

export const DELETE = async (
  endPoint: string,
  data?: unknown,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(endPoint, {
        data,
      })
      .then(res => {
        if (res) resolve(res.data);
      })
      .catch((error: Error) => {
        reject(error);
        throw error;
      });
  });
};
