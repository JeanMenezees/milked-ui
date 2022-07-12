import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Molecules/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: "secondary",
};
