import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
}

interface UsersState {
  loading: boolean;
  error: boolean;
  data: User[];
}

const initialState: UsersState = {
  loading: false,
  error: false,
  data: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchData: (state: UsersState) => {
      state.loading = true;
    },
    setFetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setFetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchData, setFetchSuccess, setFetchError } = userSlice.actions;
