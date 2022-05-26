import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
import VbHeader from "./VbHeader";
import VbFooter from "./VbFooter";
import VbNavbar from "./VbNavbar"
import { useHref, useNavigate, useParams } from "react-router-dom";

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
    "maquinaria",
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
      <VbNavbar />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9">
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
                  <div className="row">
                  <div className="col">
                    <p className="NewsDisplay_Categoria">
                      {categoria === "solucionesintegrales"
                        ? "soluciones integrales"
                        : categoria === "proteccionvegetal"
                        ? "protección vegetal"
                        : categoria}
                    </p>
                  </div>
                  <div className="col-12 col-lg-3  NewsDisplay_rsscol">
                    <div className="rrss">
                      <div className="NewsDisplay_wrap_rrss">
                        <a
                          href="https://twitter.com/ConnecTreesDig"
                          target="_blank"
                          rel="noreferrer"
                          className="navItem navbarLink Vbrrss"
                        >
                          <i className="rrss-icon fab fa-twitter"></i>
                        </a>

                        <a
                          className="navItem navbarLink Vbrrss"
                          href="https://api.whatsapp.com/send?text=Mira%20lo%20que%20he%20encontrado%20en%20el%20videoblog%20de%20ConnecTrees"
                        >
                          <i className="rrss-icon fa-brands fa-whatsapp-square"></i>
                        </a>

                        <a
                          href="https://www.facebook.com/ConnecTrees-DigitalHub-108510918487855"
                          rel="noreferrer"
                          target="_blank"
                          className="navItem navbarLink Vbrrss"
                        >
                          <i className="rrss-icon fab fa-facebook-f"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/connectrees/?viewAsMember=true"
                          rel="noreferrer"
                          target="_blank"
                          className="navItem navbarLink Vbrrss"
                        >
                          <i className="rrss-icon fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href="mailto:????@???.??"
                          className="navItem navbarLink Vbrrss"
                        >
                          <i
                            className="rrss-icon fa-solid fa-envelope"
                            onClick={(e) => {}}
                          ></i>
                        </a>
                      </div>
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
            <div className="col-md-12 col-lg-3">
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
