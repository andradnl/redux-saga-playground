import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const raceAllSlice = createSlice({
  name: "raceAll",
  initialState,
  reducers: {
    fetch: () => {},
  },
});

export const { fetch } = raceAllSlice.actions;
