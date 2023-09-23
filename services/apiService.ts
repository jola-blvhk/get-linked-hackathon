import axios, { AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T;
}

interface CustomHeaders {
  [key: string]: string;
}

interface ApiService {
  get<T>(url: string, customHeaders?: CustomHeaders): Promise<T>;
  post<T>(url: string, payload: any, customHeaders?: CustomHeaders): Promise<T>;
  patch<T>(
    url: string,
    payload: any,
    customHeaders?: CustomHeaders
  ): Promise<T>;
  delete<T>(
    url: string,
    payload: any,
    customHeaders?: CustomHeaders
  ): Promise<T>;
  put<T>(url: string, payload: any, customHeaders?: CustomHeaders): Promise<T>;
}

const apiResource = (customHeaders: CustomHeaders = {}): ApiService => {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;

  const service = axios.create({
    baseURL: `${baseURL}`,
    headers: { 'Content-Type': 'application/json', ...customHeaders },
  });

  return {
    get: async <T,>(url: string, customHeaders?: CustomHeaders) => {
      try {
        const response: AxiosResponse<ApiResponse<T>> = await service.get(url, {
          headers: customHeaders,
        });
        return response.data.data;
      } catch (error) {
        return Promise.reject(error as AxiosError);
      }
    },

    post: async <T,>(
      url: string,
      payload: any,
      customHeaders?: CustomHeaders
    ) => {
      try {
        const response: AxiosResponse<ApiResponse<T>> = await service.post(
          url,
          payload,
          { headers: customHeaders }
        );
        return response.data.data;
      } catch (error) {
        return Promise.reject(error as AxiosError);
      }
    },

    patch: async <T,>(
      url: string,
      payload: any,
      customHeaders?: CustomHeaders
    ) => {
      try {
        const response: AxiosResponse<ApiResponse<T>> = await service.patch(
          url,
          payload,
          { headers: customHeaders }
        );
        return response.data.data;
      } catch (error) {
        return Promise.reject(error as AxiosError);
      }
    },

    delete: async <T,>(
      url: string,
      payload: any,
      customHeaders?: CustomHeaders
    ) => {
      try {
        const response: AxiosResponse<ApiResponse<T>> = await service.delete(
          url,
          { data: payload, headers: customHeaders }
        );
        return response.data.data;
      } catch (error) {
        return Promise.reject(error as AxiosError);
      }
    },

    put: async <T,>(
      url: string,
      payload: any,
      customHeaders?: CustomHeaders
    ) => {
      try {
        const response: AxiosResponse<ApiResponse<T>> = await service.put(
          url,
          payload,
          { headers: customHeaders }
        );
        return response.data.data;
      } catch (error) {
        return Promise.reject(error as AxiosError);
      }
    },
  };
};

export { apiResource };
export const apiService = apiResource();
