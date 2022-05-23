import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const VbDisplayNewsLatestLoader = (props) => {
  useEffect(() => {
    loadLatest()
  }, []);
  const [latest, setLatest] = useState([""]);

  const loadLatest = async () => {
    const data = await axios
      .get(`http://localhost:3001/videoblog/noticias/${props.get}`)
      setLatest(data.data);
    console.log(
      `https://localhost:3001/videoblog/noticias/${props.log}`
    );
  };

  return (
    <div className="col">
      <div className="NewsDisplay_Tags"></div>
      <div className="NewsDisplay_Destacados">
        {console.log(latest)}
      </div>
    </div>
  );
};

VbDisplayNewsLatestLoader.propTypes = {};

export default VbDisplayNewsLatestLoader;
