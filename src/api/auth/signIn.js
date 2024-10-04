import axiosInstance from "../../axios.config";
import { toastError, toastSuccess } from "../../utils/toastifyActions";
import "react-toastify/dist/ReactToastify.css";

const signIn = async (payload) => {
  try {
    const { data } = await axiosInstance.post("auth/adminSignIn", payload);

    const { access_token, refresh_token } = data;

    localStorage.setItem("playreal_admin_access_token", access_token);
    localStorage.setItem("playreal_admin_refresh_token", refresh_token);

    if (access_token && refresh_token) toastSuccess("Успешно!");

    return data;
  } catch (error) {
    toastError(
      error?.response?.data?.message || "При авторизации произошла ошибка"
    );
  }
};

export default signIn;
