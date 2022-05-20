import React from "react";

const Digitalizate = () => {
  const survey = [
    {
      titulo: "Bigdata",
      img: "url('./img/secciones/encuesta_bigdata.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeFojNZIeoa0eGdIRJF-aHyqEwV2teBf4fLbvdMlV8Ku3X6xw/viewform?usp=sf_link",
      alt: "Captura y gestión de big data",
    },
    {
      titulo: "mapeo",
      img: "url('./img/secciones/encuesta_mapeo.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScp5gNQqLk2xE1y-XV7iJcaVzrOfT5jJwkCe8Cc0yFIbZLydQ/viewform?usp=sf_link",
      alt: "Teledetección",
    },
    {
      titulo: "maquinaria",
      img: "url('./img/secciones/encuesta_maquinaria.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdW_w-eDq2qeiSwkUsL9UjJncSL36BrzCMWkwbdzU5Oew7dBA/viewform?usp=sf_link",
      alt: "Agricultura de precisión",
    },
    {
      titulo: "nutrición vegetal",
      img: "url('./img/secciones/encuesta_nutricion_vegetal.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScM6MFwfCJ5FRbkVBKnFaZ7Us4LSdF0Gj1Eso6ALOoiCYcgQQ/viewform?usp=sf_link",
      alt: "Nutrición vegetal",
    },
    {
      titulo: "proteccion cultivos",
      img: "url('./img/secciones/encuesta_proteccion_cultivos.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSddpfZQfnbuBGImKlI7vfP2GnBFWhrbWsycjI1VfCtwk7DxPw/viewform?usp=sf_link",
      alt: "Pulverización de alta tecnología y maquinaria agrícola",
    },
    {
      titulo: "riego eficiente",
      img: "url('./img/secciones/encuesta_riego.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeRTmyCkoRBnHvWG2uLKfvlv7YEJqdn1DDwLNKrdgDXLd2KVQ/viewform?usp=sf_link",
      alt: "Riego eficiente",
    },
    {
      titulo: "sensórica",
      img: "url('./img/secciones/encuesta_sensorica.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScClI-lKDBw00Ucg2N5ap1HQ69nP1s0k57wBCuTNMVXfh1Llg/viewform?usp=sf_link",
      alt: "Control de flota y sensorización",
    },
    {
      titulo: "soluciones integrales",
      img: "url('./img/secciones/encuesta_soluciones_integrales.gif')",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfdN2My0bABE4NXvlRP2e8om5-pM1NB1yoBD1PGeicm_9jyHQ/viewform?usp=sf_link",
      alt: "Soluciones integrales de cultivos de alto valor",
    },
  ];

  const surveyShow = () => {
    return (
      <>
        {survey.map((item, i) => (
          <div className="col-lg-6 " key={i}>
            <div className="card digitalizate_card">
              <a className="cn-card__link" href={item.url} target="_blank" rel="noreferrer">
              <div
                className="card-body digitalizate-card-body"
                 // eslint-disable-next-line
                style={{ backgroundImage: "" + `${item.img}` }}
              >
              <div className="digitalizate__wrapper">
          </div>
              </div>
                </a>
              </div>
            </div>
        ))}
      </>
    );
  };

  return (
    <>
      <h2 className="section_name">Digitalizate</h2>
      <div className="container gx-0">
        <div className="row ">{surveyShow()}</div>
      </div>

    </>
  );
};

export default Digitalizate;
