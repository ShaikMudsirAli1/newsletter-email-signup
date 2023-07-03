import React from "react";
import styled from "styled-components";

const UiComponents = () => {
  return (
    <>
      <Circle />
      <Circle2 />
    </>
  );
};

// Circle styled components.
const Circle = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: linear-gradient(to right, #ff5e62, #ff9966);
  position: absolute;
  top: 60%;
  left: 90%;
  down: 50%;
  z-index: 1;
`;

// Inheriting the property of Circle Component.
const Circle2 = styled(Circle)`
  height: 150px;
  width: 150px;
  top: -45%;
  left: -20%;
`;
export default UiComponents;
