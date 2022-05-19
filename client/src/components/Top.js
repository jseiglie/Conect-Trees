import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export const Top = () => {
  return (
    <>
      <div className="row">
        <div className="background-video">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            poster=".\img\video.mp4"
          >
            <source src=".\img\video_nuevo.mp4" type="video/mp4" />
          </video>

          <h1 className="text__video"> CONNECTREES</h1>
          <h1 className="tw__text">
            <Typewriter
              options={{
                strings: ["DIGITALHUB", "TRAZAMOS LOS CULTIVOS DEL FUTURO"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          </h1>
        </div>
      </div>
    </>
  );
};
