import axiosInstance from "../../axios.config";
import { toastError } from "../../utils/toastifyActions";

const updateToken = async (refreshToken) => {
  try {
    const res = await axiosInstance.post("tokens/update", {
      refresh_token: refreshToken,
    });

    const tokens = res.data;

    localStorage.setItem("playreal_admin_access_token", tokens.access_token);
    localStorage.setItem("playreal_admin_refresh_token", tokens.refresh_token);

    return res.data.access_token;
  } catch (error) {
    toastError(
      error?.response?.data?.message || "При обновлении токена произошла ошибка"
    );
  }
};

export default updateToken;
