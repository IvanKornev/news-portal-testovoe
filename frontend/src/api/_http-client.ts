import axios, { type AxiosInstance } from "axios";
import { message } from "ant-design-vue";

interface HttpClientParams {
  baseURL: string;
}

const params: HttpClientParams = {
  baseURL: import.meta.env.VITE_BACKEND_URL,
};

const httpClient: AxiosInstance = axios.create(params);

httpClient.interceptors.response.use(
  (response) => {
    if (response.status === 201 || response.status === 200) {
      if ("message" in response.data) {
        message.success(response.data.message);
      }
      return response;
    }
  },
  (error) => message.error(error.response.data.message)
);

const setTokenInRequest = (): void => {
  httpClient.interceptors.request.use((config: any) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    config.headers.authorization = token;
    return config;
  });
};

export { httpClient, setTokenInRequest };
