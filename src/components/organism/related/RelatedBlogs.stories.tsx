import RelatedBlogs, { RelatedProps } from "./RelatedBlogs";
import { fakeBlogs } from "@/utils/blogs";
export default {
  title: "Components/Organisms/RelatedBlogs",
  component: RelatedBlogs,
};

const Template = (args: RelatedProps) => <RelatedBlogs {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  related: fakeBlogs,
  navigation: (slug: string) => console.log(slug),
};
