import axios from "axios";
import { toastError } from "./utils/toastifyActions";
import updateToken from "./api/auth/updateToken";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: "http://147.79.75.3:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem("playreal_admin_access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      try {
        const refreshToken = localStorage.getItem(
          "playreal_admin_refresh_token"
        );
        if (!refreshToken) return;

        originalRequest._retry = true;

        await updateToken(refreshToken);

        return axiosInstance(originalRequest);
      } catch (error) {
        toastError("Ошибка при обновлении токена");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
