import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./slices/blogSlice";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    blog: BlogReducer,
  },
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
