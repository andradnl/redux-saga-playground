import { createSlice } from "@reduxjs/toolkit";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

interface PostsState {
  loading: boolean;
  error: boolean;
  data: Post[];
}

const initialState: PostsState = {
  loading: false,
  error: false,
  data: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsData: (state: PostsState) => {
      state.loading = true;
    },
    setPostsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setPostsError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchPostsData, setPostsSuccess, setPostsError } =
  postsSlice.actions;

export const selectPosts = (state: any) => state;
