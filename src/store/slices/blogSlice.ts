import { createSlice, current } from "@reduxjs/toolkit";
import { BlogT } from "@/hooks/useBlogs";

export interface BlogState {
  blogs: BlogT[];
  loading: boolean;
  error: boolean;
  fulfilled: boolean;
  detailFetch: {
    loading: boolean;
    error: boolean;
  };
  currentBlog: BlogT | undefined;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: false,
  fulfilled: false,
  detailFetch: {
    loading: false,
    error: false,
  },
  currentBlog: undefined,
};
const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = true;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      state.fulfilled = true;
    },

    setDetailFetchLoading: (state, action) => {
      state.detailFetch.loading = action.payload;
    },
    setDetailFetchError: (state, action) => {
      state.detailFetch.error = true;
    },
    setBlogContent: (state, action) => {
      const { slug, content } = action.payload;
      const newBlogs = current(state.blogs).map((blog) => {
        if (blog.slug === slug) {
          state.currentBlog = { ...blog, content: content };
          return { ...blog, content: content };
        }
        return blog;
      });
      state.blogs = newBlogs;
    },
    setCurrentBlog: (state, action) => {
      state.currentBlog = action.payload;
    },
  },
});

export default blogSlice.reducer;

export const {
  setLoading,
  setBlogs,
  setError,
  setDetailFetchLoading,
  setDetailFetchError,
  setBlogContent,
  setCurrentBlog,
} = blogSlice.actions;
