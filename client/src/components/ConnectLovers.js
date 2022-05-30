import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Player from "./Player";

const ConnectLovers = () => {
  const thumb = "https://img.youtube.com/vi/";
  // const youtube = "https://www.youtube.com/watch?v=";
  const youtube = "https://youtu.be/";

  const [connectLoversMedia, setConnectLoversMedia] = useState([]);

  //carga Dinamica

  const loadConnectLovers = async () => {
    const resp = await axios.get(
      "http://localhost:3001/digitalhub/connectlovers"
    );
    var temp = resp.data.sort((a, b) => a.id - b.id);
    temp = temp.reverse();
    temp = temp.slice(0, 4);
    setConnectLoversMedia(temp);
  };

  useEffect(() => {
    loadConnectLovers();
  }, []);

  // carga estática
  //
  //const connectLoversMedia = [
  //   {
  //     video: "YppmKjBSAe0",
  //     title: "La Univerisdad de Córdoba con #ConnecTreesDigHub",
  //   },
  //   {
  //     video: "qVOD7K46rx0",
  //     title:
  //       "Redes de conocimiento para el ecosistema digital de la #agricultura",
  //   },
  //   {
  //     video: "HD9kurUcql0",
  //     title:
  //       "Información y divulgación en redes de conocimiento en #agricultura",
  //   },
  //   {
  //     video: "maU4meUFA88",
  //     title: "Nace ConnectTrees DigitalHub #ConnecTreesDigHub",
  //   },
  // ];

  const connectLoversMediaShow = () => {
    return (
      <>
        {connectLoversMedia.map((item, i) => (
          <div key={i} className="col-lg-6 dt-card__wrap">
            <div className="card cl-card cl-frost">
              <div className="card-body dt-card-body d-flex align-items-center">
                <div className="dt-player__holder ">
                  <span className="dt-noticia__tittle color-white">
                    <h3>{item.titulo}</h3>
                  </span>
                  <Player
                    url={youtube + item.codigo}
                    light={thumb + item.codigo + "/maxresdefault.jpg"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section id="connectLovers">
      <div className="section_name text-center color-white ">
        <h2 className="section_name">CONNECTLOVERS</h2>
      </div>
      <div className="container gx-0">
        <div className="row ">{connectLoversMediaShow()}</div>
      </div>
    </section>
  );
};

export default ConnectLovers;
