import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Music from "../Music";
import "./music-row.css";

const MusicRow = (props) => {
  console.log(props.musics);
  return (
    <Container className="container">
      <h2>{props.title}</h2>
      <Row className="music-row">
        {props.musics.map((music) => {
          console.log(music, "music");
          return (
            <Col xs={6} md={2}>
              <Music img={music.album.cover_medium} />{" "}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MusicRow;
