import React from "react";
import styled from "styled-components";

const SidebarItem = (props) => {
  return (
    <Component style={props.selected}>
      <Logo>{props.img}</Logo>
      {props.text}
    </Component>
  );
};

export default SidebarItem;

const Component = styled.div`
  display: flex;
  color: white;
  padding: 0.3rem 2rem;
  font-weight: 400;
  color: #8b8888;
  transition-duration: 0.3s;

  &:hover {
    box-sizing: border-box;
    color: #fff;
    border-left: 6px solid #1db954;
    font-weight: 600;
  }
`;
const Logo = styled.div`
  margin-right: 1rem;
`;
