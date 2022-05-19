import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/lazy";
import "../styles/MediaLoader.css";
import YoutubeEmbed from "./YoutubeEmbed.component";

const Medialoader = (props) => {
  
 


  return (
    <div className="row mx-auto justify-content-center">
      <div className="col-lg-12 text-center">
        <div className="card card__wrap ">
          <div className="card-body mediaLoader__card">
            <div className="d-flex align-items-center justify-content-center">
              <i className="play3 fa fa-play play__simbol"></i>
              <span className="mediaLoader__title"> {props.title}</span>
              <div className="">
                  <div className="asdas" style={{background:'https://img.youtube.com/vi/YppmKjBSAe0/maxresdefault.jpg'}}></div>
                  
                  
              {/* <YoutubeEmbed embedId={props.videoURL}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medialoader;
