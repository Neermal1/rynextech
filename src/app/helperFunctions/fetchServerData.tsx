import { baseUrl } from "../constants/constants";

export const fetchServerData = async (url: any) => {
  try {
    const response = await fetch(baseUrl + url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error: (error as Error).message };
  }
};
