import axiosInstance from "../../axios.config";
import { toastError } from "../../utils/toastifyActions";
import uploadImage from "../files/uploadImage";

const createService = async (payload) => {
  try {
    const {
      game_id,
      name,
      basePrice,
      coefficientMmr,
      params,
      baseMmrPrice,
      baseMmrDays,
      title,
      backgroundCard,
      backgroundHeader,
      images,
      requirementsTitle,
      requirements,
      min_mmr,
      max_mmr,
      boosterLink,
      additionals,
    } = payload;

    const formattedPayload = {
      name,
      basePrice,
      coefficientMmr,
      params: params ? params.map((item) => item.text) : [],
      baseMmrPrice,
      baseMmrDays,
      title,
      backgroundCard: backgroundCard
        ? await uploadImage(backgroundCard.rawFile)
        : undefined,
      backgroundHeader: backgroundHeader
        ? await uploadImage(backgroundHeader.rawFile)
        : undefined,
      images: images
        ? await Promise.all(
            images.map(async (image) => {
              return await uploadImage(image.rawFile);
            })
          )
        : [],
      requirementsTitle,
      requirements,
      ratingRange: [min_mmr, max_mmr],
      boosterLink,
      additionals,
    };
    console.log(formattedPayload);
    const res = await axiosInstance.post(
      `services/create/${game_id}`,
      formattedPayload
    );

    return res.data.service;
  } catch (error) {
    toastError(
      error?.response?.data?.message || "При создании услуги произошла ошибка"
    );
  }
};

export default createService;
