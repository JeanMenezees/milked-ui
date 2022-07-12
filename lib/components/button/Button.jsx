import React, { useState } from "react";

import PropTypes from "prop-types";

import styled from "styled-components";

import { Text } from "../text/Text";

const types = [
  {
    key: "primary",
    color: "white",
    backgroundColor: "black",
    borderColor: "transparent",
    hoveredBackgroundColor: "white",
    hoveredColor: "black",
  },
  {
    key: "secondary",
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    hoveredBackgroundColor: "black",
    hoveredColor: "white",
  },
];

const buttonType = (key) => {
  const type = types.find((t) => t.key === key);

  if (type) {
    return type;
  }

  return types[0];
};

const ButtonContainer = styled.button`
  background-color: ${(props) => props.backGroundColor};
  padding: 0 1rem;
  border: 0 solid;
  border-color: ${(props) => buttonType(props.type).borderColor};
  border-width: 0.175rem;
  border-radius: 0.5rem;
  text-align: center;

  transition: 0.4s;

  cursor: pointer;
`;

export const Button = ({ label, type }) => {
  const [color, setColor] = useState(buttonType(type).color);
  const [backGroundColor, setBackGroundColor] = useState(
    buttonType(type).backgroundColor
  );

  return (
    <ButtonContainer
      type={type}
      backGroundColor={backGroundColor}
      onMouseEnter={() => {
        setBackGroundColor(buttonType(type).hoveredBackgroundColor);
        setColor(buttonType(type).hoveredColor);
      }}
      onMouseLeave={() => {
        setBackGroundColor(buttonType(type).backgroundColor);
        setColor(buttonType(type).color);
      }}
    >
      <Text value={label} color={color} as="p" size={"1rem"} weight={"700"} />
    </ButtonContainer>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

Button.defaultProps = {
  label: "Button",
};
