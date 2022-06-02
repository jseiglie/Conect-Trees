import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const VbEtiquetasLoad = (props) => {
  const [tags, setTags] = useState([]);
  const url = process.env.REACT_APP_videoblog;
  
  useEffect(() => {
    setTimeout(loadTags, 500)
    loadTags();// eslint-disable-next-line
  }, []);
  
  const loadTags = async () => {
    try {
      const resp = await axios.get(
        `${url}/asigetiquetas/${props.id}`
      );
      setTags(resp.data[0]);
    } catch (error) {
     console.log(error);
    }
  };

  return (
    <div>
      <h5>Etiquetas:</h5>
      <div className="NewsDisplay_Tags">
        {tags.map((item, i) => (
          <div key={item.id}>
            <p className="tags">{item.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VbEtiquetasLoad;