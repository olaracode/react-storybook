import NotFound from "./NotFound";

export default {
  title: "Layout/Misc/NotFound",
  component: NotFound,
};

const Template = (args: any) => <NotFound {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  docs: true,
};
