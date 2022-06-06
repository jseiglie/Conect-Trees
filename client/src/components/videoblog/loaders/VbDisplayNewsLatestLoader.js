import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const VbDisplayNewsLatestLoader = (props) => {
  const url = process.env.REACT_APP_videoblog;
  const youtube = process.env.REACT_APP_youtube;

  useEffect(() => {
    setTimeout(loadLatest, 500);
    loadLatest(); // eslint-disable-next-line
  }, []);
  const [latest, setLatest] = useState([""]);

  const [error, setError] = useState(false);

  const loadLatest = async () => {
    try {
      const resp = await axios.get(`${url}noticias/${props.get}`);
      var temp = await resp.data.sort(resp.data.id);
      temp = temp.reverse();
      temp = temp.slice(0, 4);
      setLatest(temp);
    } catch (error) {
      // console.log(error);
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
              <a
                className="externalLink VbExternal"
                href={`${youtube + item.codigo_video}`}
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="Vblatesttitle">{item.titulo}</h5>
              </a>
            </div>
          </div>
        ))}
        {/* {console.log(latest)} */}
      </div>
    </>
  );
};
export default VbDisplayNewsLatestLoader;
