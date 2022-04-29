import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import MusicRow from "./musicRow/MusicRow";
import { useState, useEffect } from "react";
import MusicPlayer from "./musicPlayer/MusicPlayer";

const Home = () => {
  const [firstRow, setFirstRow] = useState([]);
  const [SecondRow, setSecondRow] = useState([]);

  useEffect(() => {
    fetchApi("queen");
    fetchApi("eminem");
  }, []);

  //   useEffect(() => {
  //     console.log(firstRow);
  //     console.log(SecondRow);
  //   }, [firstRow]);

  const fetchApi = async (artist) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
    );

    let data = await res.json();
    if (artist === "queen") {
      setFirstRow(data.data);
    }
    if (artist === "eminem") {
      setSecondRow(data.data);
    }
  };

  return (
    <HomeWrapper>
      <Navbar />
      <MusicRow title="Queen" musics={firstRow} />
      <MusicRow title="Eminem" musics={SecondRow} />
      <MusicPlayer />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: block;
  background-color: green;
  background-image: url("/images/spotify-bg.png");
  background-size: cover;
  padding: 0;
`;
