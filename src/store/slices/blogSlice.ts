import { createSlice, current } from "@reduxjs/toolkit";
import { BlogT } from "@/hooks/useBlogs";

export interface BlogState {
  blogs: BlogT[];
  loading: boolean;
  error: boolean;
  fulfilled: boolean;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: false,
  fulfilled: false,
};
const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      state.fulfilled = true;
    },
    setBlogContent: (state, action) => {
      const { _id, content } = action.payload;
      const blog = current(state.blogs).find((blog) => blog._id === _id);
      if (blog) {
        blog.content = content;
      }
    },
    setError: (state, action) => {
      state.error = true;
    },
  },
});

export default blogSlice.reducer;

export const { setLoading, setBlogs, setError } = blogSlice.actions;
