import axiosInstance from "../../axios.config";
import { toastError } from "../../utils/toastifyActions";

const getAllGames = async () => {
  try {
    const res = await axiosInstance.get("games/all");

    return res.data.games;
  } catch (error) {
    toastError(
      error?.response?.data?.message || "При получении игр произошла ошибка"
    );
  }
};

export default getAllGames;
