import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../../../api/https";
import { getToken } from "../../../hooks/useLocalStorage";


export const getDashboardData = createAsyncThunk('dashboard/get',async(payload)=>{
    const token = getToken();
    if(token){
      try{
        const getCsatHeader ={
          'Authorization':'Bearer '+ token,
          "Content-type": "application/json; charset=UTF-8",
        }
        const response = await makeRequest('get','dashboard',payload,getCsatHeader)
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