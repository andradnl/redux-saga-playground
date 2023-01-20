import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const raceAllSlice = createSlice({
  name: "raceAll",
  initialState,
  reducers: {
    fetchRace: () => {},
    fetchAll: () => {},
  },
});

export const { fetchRace, fetchAll } = raceAllSlice.actions;
