import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    loading: false,
    error: false,
    fulfilled: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      state.fulfilled = true;
    },
    setError: (state, action) => {
      state.error = true;
    },
  },
});

export default blogSlice.reducer;

export const { setLoading, setBlogs, setError } = blogSlice.actions;
