import Comments from "./Comments";

export default {
  title: "Components/Organisms/Comments",
  component: Comments,
};

const Template = (args: any) => <Comments {...args} />;
export const Default: any = Template.bind({});
Default.args = {};
