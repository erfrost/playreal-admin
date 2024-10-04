import axiosInstance from "../../axios.config";
import { toastError } from "../../utils/toastifyActions";

const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axiosInstance.post("files/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data.image_url;
  } catch (error) {
    toastError(
      error?.response?.data?.message ||
        "При загрузке изображения на сервер произошла ошибка"
    );
  }
};

export default uploadImage;
