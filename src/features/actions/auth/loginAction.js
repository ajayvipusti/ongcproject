import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../../../api/https";
import { setToken } from "../../../hooks/useLocalStorage";

export const loginApi = createAsyncThunk("auth/login", async (payload) => {
  try {
    const response = await makeRequest("post", "/login", payload);
    if (response?.code === 200) {
      setToken(response);
      return data;
    } else {
      const errorObj = {
        message: response?.message,
        code: response?.code,
        status: response?.status
      };
      throw new Error(JSON.stringify(errorObj));
    }
  } catch (error) {
    // console.error("error in login action", error);
    const errorObj = {
      message: error?.response?.data?.error,
      code:error?.response?.status,
      stack: error.stack,
      response: error.response?.statusText,
    };
    throw new Error(JSON.stringify(errorObj));
  }
});