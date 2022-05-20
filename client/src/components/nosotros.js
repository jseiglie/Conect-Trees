import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import * as bootstrap from "bootstrap";

export const Nosotros = () => {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/digitalhub/colaboradores").then((res) => {
      //console.log(res.data);
      setColaboradores(res.data);
      ReactTooltip.rebuild();
    });
  }, []);

  const colaboradoresShow = () => {
    //tooltip activation
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
     // eslint-disable-next-line
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    return (
      <>
        {colaboradores.map((item, i) => (
          <div key={i} className="col-lg-4 img__wrap">
            <div
              className="img__holder text-center"
              data-tip
              data-for={item.nombre}
            >
              <a
                className="colab__a"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="colaboradoresImg"
                  key={i}
                  src={"./img/colaboradores/" + item.logo}
                  alt={item.nombre}
                  data-toggle="tooltip"
                  data-placement="top"
                  title={item.info}
                ></img>
              </a>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section id="Nosotros">
      <div className="container gx-0">
        <div className="row">
          <div className="nosotros">
            <h2 className="section_name text-center section_title">Nosotros</h2>
            <br />
            <br />
            <div className="nosTextWrap text-center">
              <p className="nosText">
                La agricultura especializada en cultivos de alto valor ha dejado
                de ser una oportunidad para marcar el futuro de la
                sostenibilidad de las explotaciones en la triple vertiente:
                económica, social y medioambiental.
              </p>
              <p className="nosText">
                Pero hay una demanda para transformar digitalmente los cultivos
                más rentables y alcanzar los objetivos sostenibles del Pacto
                Verde Europeo
              </p>
              <p className="nosText">
                Y nos hemos unido en una plataforma para transferir el
                conocimiento digital y que se aplique de verdad a pie de campo
                en los cultivos leñosos de elevada rentabilidad.
              </p>
              <br />
              <br />

              <p className="nosText2 ">
                Somos una red de conocimiento para transferir la digitalización
                a los cultivos de alto valor.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="row">
          <span className="textStrong text-center">
            <br />
            <strong> ¿TE CONECTAS?</strong>
          </span>
          <div className="colaboradoresShow__holder row mx-auto justify-content-evenly">
            <span className="colab__text text-center">
              <br />
              <h2>Colaboradores</h2> <br />
            </span>
            <div className="container colab__ d-flex ">
              <div className="row colab__wrap">{colaboradoresShow()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
