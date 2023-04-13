import MarkdownPost from "./MarkdownPost";

export default {
  title: "Components/Atoms/MarkdownPost",
  component: MarkdownPost,
};

const Template = (args: any) => <MarkdownPost {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  content: "# heading 1",
};
