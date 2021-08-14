import { default as Button } from "./Button";

export default {
  component: Button,
  title: "buttons/TestButton2",
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇" };

export const Warning = Template.bind({});
Warning.args = { ...Primary.args, primary: false, label: "Warning !!!@" };

export const Info = Template.bind({});
Info.args = { ...Primary.args, primary: false, label: "Info !!!@" };

export const InfoAgain = Template.bind({});
InfoAgain.args = {
  ...Primary.args,
  primary: false,
  label: "Info again",
};

export const InfoAgainAgain = Template.bind({});
InfoAgainAgain.args = {
  ...Primary.args,
  primary: false,
  label: "Info again again",
};
