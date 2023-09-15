import { createSlice } from "@reduxjs/toolkit";
import { getDashboardData } from "../../actions/dashboard/dashboard";
import { toast } from "react-toastify";

const initialState = {
  dashboard: {},
  status: "idle",
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getDashboardData.fulfilled, (state,action) => {
        state.status = "succeeded";
        state.error = null
        state.dashboard = JSON.parse(action.payload) 
      })
      .addCase(getDashboardData.rejected, (state, action) => {
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

export default dashboardSlice;
