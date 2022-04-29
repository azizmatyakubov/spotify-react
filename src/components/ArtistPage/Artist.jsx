import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "./artist.css";

const Artist = (props) => {
  const location = useParams();
  console.log(location.title);

  const [artist, setArtist] = useState();

  useEffect(() => {
    fetchByName(props.title);
    console.log(artist);
  }, [props.title]);

  const fetchByName = async (title) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + title
    );
    let data = await res.json();
    setArtist(data.data);
  };

  return (
    <ArtistWrapper>
      <Header>
        <h1>{location.title}</h1>
      </Header>
    </ArtistWrapper>
  );
};

export default Artist;

const ArtistWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: yellow;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 100%;
  border: none;
  background-color: black;
  color: white;
`;
