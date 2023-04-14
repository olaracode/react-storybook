import Button from "./Button";

export default {
  title: "Components/Atoms/Buttons",
  component: Button,
};

export const Base = () => (
  <Button onClick={() => undefined} variant="base">
    <kbd>CTRL</kbd>
    <span> + </span>
    <kbd>K</kbd>
  </Button>
);

export const Primary = () => (
  <Button onClick={() => undefined} variant="primary">
    <kbd>CTRL</kbd>
    <span> + </span>
    <kbd>K</kbd>
  </Button>
);
