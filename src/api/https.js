import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const makeRequest = async (method, url, data = null, headers = null) => {
  const config = {
    method: method,
    url: url,
    headers: headers,
  };

  if (data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  if (data) {
    config.data = data;
  }

  try {
    const response = await api.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};