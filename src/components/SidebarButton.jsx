import React from "react";
import styled from "styled-components";

const SidebarButton = (props) => {
  const greyBg = {
    "background-color": "grey",
  };

  return <Button>{props.text}</Button>;
};

export default SidebarButton;

const Button = styled.button`
  width: 80%;
  border-radius: 50px;
  border: none;
  min-height: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
`;
