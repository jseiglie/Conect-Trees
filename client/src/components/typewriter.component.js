import React from "react";
import Typewriter from "typewriter-effect/dist/core";

const Typewriter = () => {
  new Typewriter("#typewriter", {
    strings: ["DIGITALHUB", "TRAZAMOS LOS CULTUVOS DEL FUTURO"],
    autoStart: true,
  });
  return <div>Typewriter.component</div>;
};

export default Typewriter.component;
