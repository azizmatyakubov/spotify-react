import React from "react";
import styled from "styled-components";

const Music = (props) => {
  return (
    <MusicWrapper>
      <img src={props.img} alt="" />
    </MusicWrapper>
  );
};

export default Music;

const MusicWrapper = styled.div`
  img {
    width: 100%;
  }
`;
