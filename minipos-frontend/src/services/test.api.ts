import {api} from "./api";
export const testApi = async () => {
  try {
    const response = await api.get("/test");
    console.log("Test API Response:", response.data);
  } catch (error) {
    console.error("Error calling Test API:", error);
  }
};