import Navbar, { NavbarT } from "./Navbar";

export default {
  component: Navbar,
  title: "layout/Navbar",
};

const Default = (args: NavbarT) => <Navbar {...args} />;
export const DefaultNavbar: any = Default.bind({});
DefaultNavbar.args = {
  docs: true,
};
