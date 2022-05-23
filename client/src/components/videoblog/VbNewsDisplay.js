import React, { useState, useEffect } from "react";
import axios from "axios";
import VbHeader from "./VbHeader";
import VbFooter from "./VbFooter";
import { useNavigate, useParams } from "react-router-dom";

const VbNewsDisplay = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState([])

  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3001/videoblog/news/${id}`
    );
    setNews(data.data);
  };

  useEffect(() => {
    dataLoad();
     // eslint-disable-next-line
  }, []);

  return (
    <>
      <VbHeader />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="NewsDisplay_img_holder">
                <img src={news.ruta_img} alt={news.alt_img} />
              </div>
              <div className="NewsDisplay_news">
                <p className="NewsDisplay_fecha">{news.fecha}</p>
                <h1 className="NewsDisplay_title">{news.titulo}</h1>
                <span className="NewsDisplay_subtitle">{news.intro}</span>
                <div className="container">
                  <p className="NewsDisplay_Categoria">{news.id_categoria}</p>
                  <div className="rrss">
                    <i className="rrss-icon fa-brands fa-twitter-square"></i>
                    <i className="rrss-icon fa-brands fa-whatsapp-square"></i>
                    <i className="rrss-icon fa-brands fa-facebook-square"></i>
                    <i className="rrss-icon fa-brands fa-linkedin"></i>
                    <i className="rrss-icon fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div className="NewsDisplay_Descripcion">
                  <p className="NewsDisplay_texto">{news.descripcion}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="NewsDisplay_Tags"></div>
              <div className="NewsDisplay_Destacados"></div>
            </div>
          </div>
        </div>
      </article>
      <VbFooter />
    </>
  );
};

export default VbNewsDisplay;
