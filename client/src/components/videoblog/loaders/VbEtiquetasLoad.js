import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const VbEtiquetasLoad = (props) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3001/videoblog/asigetiquetas/${props.id}`
      );
      setTags(resp.data[0]);
      // console.log(tags);
      // console.log(`http://localhost:3001/videoblog/asigetiquetas/${props.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h5>Etiquetas:</h5>
      <div className="NewsDisplay_Tags">
        {tags.map((item, i) => (
          <p key={item.id}>
            <span className="tags">{item.nombre},</span>
          </p>
        ))}
      </div>
    </div>
  );
};

VbEtiquetasLoad.propTypes = {};

export default VbEtiquetasLoad;