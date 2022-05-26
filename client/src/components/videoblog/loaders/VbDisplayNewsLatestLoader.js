import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const VbDisplayNewsLatestLoader = (props) => {
  useEffect(() => {
    setTimeout(loadLatest, 500);
    loadLatest();
  }, []);
  const [latest, setLatest] = useState([""]);

  const [error, setError] = useState(false);

  const loadLatest = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3001/videoblog/noticias/${props.get}`
      );
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 4);
      setLatest(temp);
      //console.log(`https://localhost:3001/videoblog/noticias/${props.log}`)
      //console.log(latest)
    } catch (error) {
      //console.log(error);
      setError(true);
    }
  };

  if (error) {
    loadLatest();
    setError(false);
  }

  return (
    <>
      <div className="NewsDisplay_Tags"></div>
      <h4>Noticias recientes</h4>
      <div className="NewsDisplay_Destacados">
        {latest.map((item, i) => (
          <div className="card mb-3" key={i}>
            {/* {console.log(item)} */}
            <div className="card-header displayNews_card_header">
              <p>{item.fecha}</p>
            </div>
            <div className="card-body VbLatestBody">
              <h5 className="Vblatesttitle">{item.titulo}</h5>
            </div>
          </div>
        ))}
        {/* {console.log(latest)} */}
      </div>
    </>
  );
};

VbDisplayNewsLatestLoader.propTypes = {};

export default VbDisplayNewsLatestLoader;
