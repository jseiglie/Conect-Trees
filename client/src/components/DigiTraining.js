import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Player from "./Player";

const DigiTrain = () => {
  const thumb = "https://img.youtube.com/vi/";
  const youtube = "https://www.youtube.com/watch?v=";
  const [digiTrainMedia, setDigiTrainMedia] = useState([]);

  //Carga dinamica

  const loadDigitraining = async () => {
    await axios
      .get("http://localhost:3001/digitalhub/digitraining")
      .then((res) => {
        setDigiTrainMedia(res.data);
        //console.log(res.data);
      });
  };

  useEffect(() => {
    loadDigitraining();
  }, []);

  //Carga estática

  // const digiTrainMedia = [
  //   {
  //     video: "-9zcMMXTcBU",
  //     title: "Pedro Gallardo se conecta a #ConnecTreesDigHub",
  //   },
  //   {
  //     video: "wDb-uS0MR44",
  //     title: "Mejorar las decisiones para ser eficaces y ahorrar costes",
  //   },
  //   {
  //     video: "BMNovHiCzKU",
  //     title: "El Plan A de la #agricultura de alto valor es la #digitalización",
  //   },
  //   {
  //     video: "F01qM6OU464",
  //     title:
  //       "El éxito de la digitalización necesita un ecosistema colaborativo",
  //   },
  // ];
  const digiTrainMediaShow = () => {
    return (
      <>
        {digiTrainMedia.map((item, i) => (
          <div key={i} className="col-lg-6 dt-card__wrap ">
            <div className="card dt-card dt-frost">
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
    <section id="dt">
      <div className="section_name text-center color-white connectLovers__title">
        <h2 className="section_name color-theme">#DigiTraining</h2>
      </div>
      <div className="container gx-0">
        <div className="row ">{digiTrainMediaShow()}</div>
      </div>
    </section>
  );
};

export default DigiTrain;
