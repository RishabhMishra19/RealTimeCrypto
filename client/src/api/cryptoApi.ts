import axios from "axios";

const API_BASE_URL = "/api"; // This is the path Vite will proxy

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/setup`);
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    throw error;
  }
};

export const triggerPolling = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/crypto/poll`);
    return response.data;
  } catch (error) {
    console.error("Error triggering polling:", error);
    throw error;
  }
};
