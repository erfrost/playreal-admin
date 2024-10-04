import axiosInstance from "../../axios.config";
import { toastError } from "../../utils/toastifyActions";
import uploadImage from "../files/uploadImage";

const createGame = async (payload) => {
  try {
    const { title, description, image } = payload;

    const formattedPayload = {
      title,
      description,
      image: await uploadImage(image.rawFile),
    };

    const res = await axiosInstance.post("games/create", formattedPayload);

    return res.data.game;
  } catch (error) {
    toastError(
      error?.response?.data?.message || "При создании игры произошла ошибка"
    );
  }
};

export default createGame;
