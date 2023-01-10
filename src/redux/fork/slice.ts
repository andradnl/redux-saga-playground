import { createSlice } from "@reduxjs/toolkit";

interface ForksState {
  loading: boolean;
  error: string;
  success: boolean;
}

const initialState: ForksState = {
  loading: false,
  error: "",
  success: false,
};

export const forkSlice = createSlice({
  name: "fork",
  initialState,
  reducers: {
    setLoading: (state: ForksState) => {
      state.loading = true;
    },
    setError: (state: ForksState, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSuccess: (state: ForksState, action) => {
      state.loading = false;
      state.success = true;
    },
    runFork: () => {},
  },
});

export const { setLoading, setError, setSuccess, runFork } = forkSlice.actions;

export const selectFork = (state: any) => state;
