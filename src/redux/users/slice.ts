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
    fetchUsersData: (state: UsersState) => {
      state.loading = true;
    },
    setUsersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setUsersError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchUsersData, setUsersSuccess, setUsersError } =
  userSlice.actions;

export const selectUsers = (state: any) => state;
