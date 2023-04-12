import { BlogT } from "../hooks/useBlogs";

export const fakeBlogs: BlogT[] = [
  {
    _id: "1",
    title: "Blog 1",
    slug: "blog-1",
    tags: ["tag1", "tag2"],
    content: "Blog 1 content",
  },
  {
    _id: "2",
    tags: ["tag1", "tag2"],
    slug: "blog-2",
    title: "Blog 2",
    content: "Blog 2 content",
  },
];
