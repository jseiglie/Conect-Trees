import React, { useEffect, useState } from "react";
import axios from "axios";

const VbBigData = () => {
  const url = process.env.REACT_APP_videoblog;
  const thumb = "https://img.youtube.com/vi/";
  const youtube = "https://www.youtube.com/watch?v=";

  const [bigData, setBigData] = useState([]);
  const load = async () => {
    try {
      const resp = await axios.get(`${url}noticias/bigdata`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 5);
      setBigData(temp);
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
    //window.location.href = `${youtube}${e.target.value}`
    //console.log(`${youtube + e.target.value}`)
  };
  return (
    <>
      <div className="container">
        <div className="row j-center">
          {bigData.map((item) => (
            <div className="col-lg-4" key={item.id}>
              <div className="card allCard">
                <div className="card_header">
                  <p className="m-0">{item.fecha}</p>{" "}
                  <p className="m-0">Big Data</p>
                </div>
                <img
                  src={`${thumb + item.codigo_video}/maxresdefault.jpg`}
                  className="card-img-top"
                  alt={item.titulo}
                />
                <div className="card-body">
                  <a
                    className="externalLink"
                    href={`${youtube + item.codigo_video}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4
                      onClick={handleClick}
                      id={item.id}
                      className="text_clamp VbNoticiaTitle"
                    >
                      {item.titulo}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VbBigData;
