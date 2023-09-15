import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../../../api/https";
import { getToken } from "../../../hooks/useLocalStorage";


export const uploadCsatApi = createAsyncThunk("csat/upload", async (payload) => {
    const token = getToken(); 
    if (token) {
    try {
      const uploadCsatHeader ={
        'Authorization':'Bearer '+ token,
        'Content-Type': 'multipart/form-data',
        'Accept': 'js'
      }
      const response = await makeRequest("post", "csat/import", payload,uploadCsatHeader);
      if (response?.code === 200) {
        // console.log('response',response)
        return JSON.stringify(response?.data);
      } else {
        throw new Error("Invalid response code");
      }
    } catch (error) {
      const errorObj = {
        message: error?.response?.data?.error,
        code:error?.response?.status,
        stack: error.stack,
        response: error.response?.statusText,
      };
      throw new Error(JSON.stringify(errorObj));
    }
  }
  });


export const getCsatData = createAsyncThunk('csat/get',async(payload)=>{
  const token = getToken();
  if(token){
    try{
      const getCsatHeader ={
        'Authorization':'Bearer '+ token,
        "Content-type": "application/json; charset=UTF-8",
      }
      const response = await makeRequest('get','csat',payload,getCsatHeader)
      if (response?.code === 200) {
        // console.log('response',response)
        return JSON.stringify(response?.data);
      } else {
        throw new Error("Invalid response code");
      }
    } catch (error) {
      const errorObj = {
        message: error?.response?.data?.error,
        code:error?.response?.status,
        stack: error.stack,
        response: error.response?.statusText,
      };
      throw new Error(JSON.stringify(errorObj));
    }
  }
})