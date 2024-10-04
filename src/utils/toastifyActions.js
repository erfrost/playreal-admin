import { toast } from "react-toastify";

const params = {
  position: "bottom-right",
  autoClose: 2000,
};

export const toastSuccess = (message) => {
  return toast.success(message, params);
};

export const toastWarning = (message) => {
  return toast.warning(message, params);
};

export const toastError = (message) => {
  return toast.error(message, params);
};
