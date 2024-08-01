import { baseUrl } from "@/app/constants/constants";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
