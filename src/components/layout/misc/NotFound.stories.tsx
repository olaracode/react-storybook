import NotFound from "./NotFound";

export default {
  title: "Layout/Misc/NotFound",
  component: NotFound,
};

const Template = (args) => <NotFound {...args} />;
export const Default = Template.bind({});
Default.args = {
  docs: true,
};
