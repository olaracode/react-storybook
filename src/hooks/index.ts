export { default as useBlogs } from "./useBlogs";
export { default as useBlogList } from "./blogs/useBlogList";
export { default as useBlogDetails } from "./blogs/useBlogDetails";

import useLayoutEffects from "./layout/useLayoutEffects";
import useScroll from "./layout/useScroll";

export const Layout = {
  useScroll,
  useLayoutEffects,
};
