import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
const useTheme = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleTheme());
  };
  return { theme, toggle };
};

export default useTheme;
