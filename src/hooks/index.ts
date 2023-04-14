import useLayoutEffects from "./layout/useLayoutEffects";
import useScroll from "./layout/useScroll";

export const Layout = {
  useScroll,
  useLayoutEffects,
};
export { default as useBlogs } from "./useBlogs";
export { default as useBlogList } from "./blogs/useBlogList";
export { default as useBlogDetails } from "./blogs/useBlogDetails";
export { default as useTheme } from "./useTheme";
export { default as useRelated } from "./blogs/useRelated";
