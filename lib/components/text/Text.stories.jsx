import React from "react";

import { Text } from "./Text";

export default {
  title: "Components/Atoms/Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
