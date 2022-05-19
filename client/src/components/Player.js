import React from "react";
import ReactPlayer from "react-player";
import "../styles/Player.css";

const Player = (props) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={props.url}
      light={props.light}
      className="react-player"
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
);

export default Player;
