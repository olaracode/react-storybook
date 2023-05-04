import CommentList from "./CommentList";

export default {
  title: "Components/Molecules/CommentList",
  component: CommentList,
};

const Template = (args: any) => <CommentList {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  comments: [
    {
      username: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      username: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      username: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  nextPage: "https://jsonplaceholder.typicode.com/comments?_page=2",
};
