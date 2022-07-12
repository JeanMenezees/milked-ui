import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const TextContainer = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap");

  font-family: "Fira Code", monospace;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};

  color: ${(props) => props.color};
`;

export const Text = ({ as, value, color, size, weight }) => {
  return (
    <TextContainer as={as} color={color} size={size} weight={weight}>
      {value}
    </TextContainer>
  );
};

Text.propTypes = {
  as: PropTypes.string,
  weight: PropTypes.oneOf(["300", "400", "500", "700"]),
  size: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  as: "p",
  size: "1rem",
  weight: "300",
  value: "Text",
  color: "#000",
};
