import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
};

export const spawnSlice = createSlice({
  name: "spawn",
  initialState,
  reducers: {
    init: (state) => {
      state.loading = true;
    },
    successfulFetch: (state) => {
      state.success = true;
    },
  },
});

export const { init, successfulFetch } = spawnSlice.actions;

export const selectSpawn = (state: any) => state.spawn;
