import { instance } from "../api";

export const fetchFromAPI = async (endPoint: string) => {
  const response = await instance.get(endPoint);
  return response.data;
};
