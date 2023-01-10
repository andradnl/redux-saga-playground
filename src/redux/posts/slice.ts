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
  selectedPost: Post;
}

const initialState: PostsState = {
  loading: false,
  error: false,
  data: [],
  selectedPost: { id: "", userId: "", title: "", body: "" },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsData: (state: PostsState) => {
      state.loading = true;
    },
    setPostsSuccess: (state: PostsState, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setPostsError: (state: PostsState) => {
      state.loading = false;
      state.error = true;
    },
    getPost: (state: PostsState, action) => {
      state.selectedPost.id = action.payload;
    },
    setSelectedPostSuccess: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const {
  fetchPostsData,
  setPostsSuccess,
  setPostsError,
  getPost,
  setSelectedPostSuccess,
} = postsSlice.actions;

export const selectPosts = (state: any) => state;
