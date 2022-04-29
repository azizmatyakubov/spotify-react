import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Music = (props) => {
  return (
    <MusicWrapper>
      <Link to={"/" + props.title}>
        <img src={props.img} alt="" />
      </Link>
    </MusicWrapper>
  );
};

export default Music;

const MusicWrapper = styled.div`
  img {
    width: 100%;
  }
`;
