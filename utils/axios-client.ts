import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosClient = (token: string | null = null): AxiosInstance => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  const client = axios.create({
    baseURL: "https://ukkomarkets.com/api/v1",
    headers,
    timeout: 1000,
    withCredentials: true,
  });

  client.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("ACCESS_TOKEN");
    config.headers = config.headers || {};
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      try {
        const { response } = error;
        if (response?.status === 401) {
          await AsyncStorage.removeItem("ACCESS_TOKEN");
        }
      } catch (e) {
        console.error(e);
      }
      throw error;
    }
  );

  return client;
};

export default axiosClient;
