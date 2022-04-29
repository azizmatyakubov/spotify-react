import React from "react";
import "./musicPlayer.css";

const MusicPlayer = () => {
  return (
    <div class="music-player mt-4">
      <div class="song-bar">
        <div class="song-infos">
          <div class="image-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Michael_Jackson_-_Thriller.jpg/220px-Michael_Jackson_-_Thriller.jpg"
              alt="Michael Jackson album cover"
            />
          </div>
          <div class="song-description">
            <p class="title">Thriller</p>
            <p class="artist">Michael Jackson</p>
          </div>
        </div>
        <div class="icons">
          <i class="far fa-heart"></i>
          <i class="fas fa-compress"></i>
        </div>
      </div>
      <div class="progress-controller">
        <div class="control-buttons">
          <i class="fas fa-random"></i>
          <i onclick="pause()" class="fas fa-step-backward"></i>
          <i onclick="play()" class="play-pause fas fa-play"></i>
          <i class="fas fa-step-forward"></i>
          <i class="fas fa-undo-alt"></i>
        </div>
        <div class="progress-container">
          <span>0:49</span>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
          <span>4:20</span>
        </div>
      </div>
      <div class="other-features">
        <i class="fas fa-list-ul"></i>
        <i class="fas fa-desktop"></i>
        <div class="volume-bar">
          <i class="fas fa-volume-down"></i>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
