import React, { useEffect, useState } from "react";
import axios from "axios";

const VbRiego = () => {
  const youtube = process.env.REACT_APP_youtube;
  const url = process.env.REACT_APP_videoblog;
  const [riego, setRiego] = useState([]);
  const load = async () => {
    try {
      const resp = await axios.get(`${url}noticias/riego`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 5);
      setRiego(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const updateView = async (value) => {
    try {
      await axios.put(`${url}noticias/count/${value}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(load, 500);
    load(); // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    updateView(e.target.id);
  };
  return (
    <>
      <div className="container">
        <div className="row j-center">
          {riego.map((item) => (
            <div className="col-lg-2" key={item.id}>
              <div className="card allCard">
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="VbCard_fecha">{item.fecha}</p>
                  <a
                    className="externalLink VbExternal"
                    href={`${youtube + item.codigo_video}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h5
                      onClick={handleClick}
                      id={item.id}
                      className="text_clamp VbNoticiaTitle"
                    >
                      {item.titulo}
                    </h5>
                  </a>
                </div>
                <div className="card-footer">
                  <p>Riego</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VbRiego;
