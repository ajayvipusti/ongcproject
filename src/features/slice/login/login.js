import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from '../../services/auth/loginAction';
import { toast } from "react-toastify";

const initialState = {
  user: null,
  status: 'idle',
  error: null,
}

export const loginSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = 'success';
          state.user = action.payload;
          toast.success('Logged in successfully.!')
        } else {
          state.status = 'failed';
        }
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.status = 'failed';
        console.log('error in slice', action.error);
        const errorObj = JSON.parse(action.error.message);
        state.error = errorObj.message || "An error occurred.";
        toast.error(state.error);
      });
  }
})

export default loginSlice;