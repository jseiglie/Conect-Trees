import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Player from "./Player";

const ConnectLovers = () => {
  const url = process.env.REACT_APP_digitalhub

  const [connectLoversMedia, setConnectLoversMedia] = useState([]);

  //carga Dinamica

  const loadConnectLovers = async () => {
    const resp = await axios.get(`${url}connectlovers`
    );
    var temp = resp.data.sort((a, b) => a.id - b.id);
    temp = temp.reverse();
    temp = temp.slice(0, 4);
    setConnectLoversMedia(temp);
  };

  useEffect(() => {
    loadConnectLovers();
  }, []);

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
                    url={process.env.REACT_APP_youtube + item.codigo}
                    light={process.env.REACT_APP_thumb + item.codigo + "/maxresdefault.jpg"}
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
    <section id="connectLovers" className="pb-5">
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
