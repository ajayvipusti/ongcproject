import { createSlice } from "@reduxjs/toolkit";
import { uploadCsatApi,getCsatData } from "../../actions/csat/csat";
import { toast } from "react-toastify";

const initialState = {
  csat: [],
  status: "idle",
  error: null,
};

export const csatSlice = createSlice({
  name: "csat",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCsatData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCsatData.fulfilled, (state,action) => {
        state.status = "succeeded";
        state.error = null
        state.csat = JSON.parse(action.payload)
      })
      .addCase(getCsatData.rejected, (state, action) => {
        state.status = "failed";
        const error = JSON.parse(action.error.message)
        state.error = error;
        const errors = Object.values(error?.message)
        errors.map((x) => (
          toast.error(`${x}`)
        ))
      })
      .addCase(uploadCsatApi.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(uploadCsatApi.fulfilled, (state) => {
        state.status = "succeeded";
        toast.success('csat updated successfully..!');
      })
      .addCase(uploadCsatApi.rejected, (state, action) => {
        state.status = "failed";
        const error = JSON.parse(action.error.message)
        state.error = error;
        const errors = Object.values(error?.message)
        errors.map((x) => (
          toast.error(`${x}`)
        ))
      })
  },
});

export default csatSlice;
