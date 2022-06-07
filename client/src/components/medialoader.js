import React, { useState } from "react";
import "../styles/MediaLoader.css";


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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medialoader;
