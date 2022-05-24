import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
import VbHeader from "./VbHeader";
import VbFooter from "./VbFooter";
import { useNavigate, useParams } from "react-router-dom";

const VbEtiquetasLoad = lazy(() => import("./loaders/VbEtiquetasLoad"));

const VbDisplayNewsLatestLoader = lazy(() =>
  import("./loaders/VbDisplayNewsLatestLoader")
);

const VbNewsDisplay = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  const categorias = [
    "teledeteccion",
    "solucionesintegrales",
    "riego",
    "proteccionvegetal",
    "nutricion",
    "marquinaria",
    "sensorizacion",
    "bigdata",
  ];

  const dataLoad = async () => {
    const data = await axios.get(`http://localhost:3001/videoblog/news/${id}`);
    setNews(data.data);
  };

  useEffect(() => {
    dataLoad();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    categoriaformat(`${news.id_categoria}`); // eslint-disable-next-line
  }, [news]);

  const categoriaformat = (cat) => {
    return categorias[cat - 1];
  };

  let categoria = categoriaformat(`${news.id_categoria}`);
  //console.log(news);

  return (
    <>
      <VbHeader />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="NewsDisplay_img_holder">
                <img
                  className="NewsDisplay_img"
                  src={news.ruta_img}
                  alt={news.alt_img}
                />
              </div>
              <div className="NewsDisplay_news">
                <p className="NewsDisplay_fecha">{news.fecha}</p>
                <h1 className="NewsDisplay_title">{news.titulo}</h1>
                <span className="NewsDisplay_subtitle">{news.intro}</span>
                <div className="container NewsDisplay_catrrss mt-3 mb-3">
                  <div className="col">
                    <p className="NewsDisplay_Categoria">
                      {categoria == "solucionesintegrales"
                        ? "soluciones integrales"
                        : categoria == "proteccionvegetal"
                        ? "protección vegetal"
                        : categoria}
                    </p>
                  </div>
                  <div className="col NewsDisplay_rsscol">
                    <div className="rrss">
                      <div className="NewsDisplay_wrap_rrss">
                        <i className="rrss-icon fa-brands fa-twitter-square"></i>
                        <i className="rrss-icon fa-brands fa-whatsapp-square"></i>
                        <i className="rrss-icon fa-brands fa-facebook-square"></i>
                        <i className="rrss-icon fa-brands fa-linkedin"></i>
                        <i className="rrss-icon fa-solid fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="NewsDisplay_Descripcion">
                  <p className="NewsDisplay_texto">{news.descripcion}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <Suspense>
                
                <div className="card">
                  <div className="card-body">

                  <VbEtiquetasLoad id={`${news.id}`} />
                  </div>
                </div>
                <VbDisplayNewsLatestLoader
                  get={`${categoria}`}
                  log={categoria}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </article>
      <VbFooter />
    </>
  );
};

export default VbNewsDisplay;
