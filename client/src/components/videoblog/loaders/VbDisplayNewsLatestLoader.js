import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const VbDisplayNewsLatestLoader = (props) => {
  useEffect(() => {
    loadLatest();
  }, []);
  const [latest, setLatest] = useState([""]);

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
      console.log(error);
    }
  };

  
  return (
    <>
     
      
        <div className="card-body">
          <p></p>
        </div>
      
      <div className="NewsDisplay_Tags"></div>
      <h4>Noticias recientes</h4>
      <div className="NewsDisplay_Destacados">
        {latest.map((item, i) => (
          <div className="card" key={i}>
            {/* {console.log(item)} */}
            <div className="card-body">
              <p>{item.fecha}</p>
              <h5>{item.titulo}</h5>
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
