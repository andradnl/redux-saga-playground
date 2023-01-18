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
      state.success = false;
      state.error = "";
    },
    setError: (state: ForksState, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    setSuccess: (state: ForksState) => {
      state.loading = false;
      state.success = true;
      state.error = "";
    },
    runFork: () => {},
    runFailingFork: () => {},
  },
});

export const { setLoading, setError, setSuccess, runFork, runFailingFork } =
  forkSlice.actions;

export const selectFork = (state: any) => state.fork;
