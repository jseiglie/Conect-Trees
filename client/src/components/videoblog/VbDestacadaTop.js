import axios from "axios";
import React, { useEffect, useState } from "react";
import Player from "../Player";

const VbDestacadaTop = () => {
  const [ultimas, setUltimas] = useState([]);
  const thumb = process.env.REACT_APP_thumb;
  const youtube = process.env.REACT_APP_youtube;
  const url = process.env.REACT_APP_videoblog;
  const [destacadaNews, setDestacadasNews] = useState([]);
  const categorias = [
    "Teledetección",
    "Soluciones integrales",
    "Riego",
    "Protección vegetal",
    "Nutrición",
    "Maquinaria",
    "Sensorización",
    "Big-Data",
  ];

  const loadUltimas = async () => {
    try {
      const resp = await axios.get(`${url}noticias/ultimas`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 3);
      setUltimas(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const loadDestacadaNews = async () => {
    const resp = await axios.get(`${url}noticias/destacada`);
    var temp = resp.data.sort((a, b) => a.id - b.id);
    temp = temp.reverse();
    temp = temp.slice(0, 1);
    setDestacadasNews(temp);
  };

  useEffect(() => {
    loadUltimas();
    loadDestacadaNews();// eslint-disable-next-line
  }, []);

  const display = () => {
    return ultimas.map((item) => (
      <div className="card Vblatest-card" key={item.id}>
        <div className="card-body Vblatest-card-body">
          <p className="VbFechaDestacadaTop mb-0">{item.fecha}</p>
          <p className="VbDestacadaMasNuevoText mb-0">{item.titulo}</p>
          <p className="VbDestacadaMasNuevoText mb-0 VbCategoriaTop">
            {categorias[item.id_categoria - 1]}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="container VbDestacadaHolder">
      <div className="row VbDestacadasWrap">
        <div className="col-12 col-lg-8">
          {destacadaNews.map((item) => (
            <div key={item.id}>
              <Player
                url={youtube + item.codigo_video}
                light={thumb + item.codigo_video + "/maxresdefault.jpg"}
              />
              <p className="mb-0">{item.fecha}</p>
              <a
                className="destacadaExtLink"
                href={youtube + item.codigo_video}
              >
                <h3>{item.titulo}</h3>
              </a>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-4 VbDestacadasWrap">
          <div className="container VbDestacadasListWrap">
            <div className="card Vblatest-card-wrap">
              <div className="card-header Vbcard-header">
                <h4 className="VbLoMas">Lo mas nuevo</h4>
              </div>
              {display()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VbDestacadaTop;
