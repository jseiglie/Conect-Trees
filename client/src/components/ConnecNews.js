import React from "react";

const ConnecNews = () => {
  const dataNews = [
    {
      noticia:
        "Nace la red de conocimiento para digitalizar la agricultura de alta rentabilidad: ConnecTrees DigitalHub",
      url: "https://revistaalimentaria.es/agricultura/servicios/red-de-conocimiento-para-digitalizar-la-agricultura-de-alta-rentabilidad-connectrees-digitalhub",
      img: "url('https://revistaalimentaria.es/img_noticias/2022/04/FOTO10076.jpg')",
    },
    {
      noticia: "El bum del pistacho inunda los campos manchegos",
      url: "https://elpais.com/economia/2022-04-14/el-bum-del-pistacho-inunda-los-campos-manchegos.html",
      img: "url('https://imagenes.elpais.com/resizer/PwS3f2jOqJe2Sg_wcl8PIjrkpXw=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/PXMF4MPBDRGENI2LKFILJYCEBM.jpg')",
    },
    {
      noticia:
        "El IMIDA ensaya la adaptación de huertos de frutales al cambio climático",
      url: "https://www.phytoma.com/noticias/noticias-de-actualidad/el-imida-ensaya-la-adaptacion-de-huertos-de-frutales-al-cambio-climatico",
      img: "url('https://www.phytoma.com/images/buttons/IMIDA_DREAM.jpg')",
    },
    {
      noticia: "Seminario de Aguacates de España 2022",
      url: "https://agrofoodseminars.com/seminario-de-aguacates-de-espana-2022/",
      img: "url('https://agrofoodseminars.com/wp-content/uploads/2022/02/fondo-aguacate.jpg')",
    },
  ];

  const datamap = () => {
    return dataNews.map((item, i) => (
      <div className="col-lg-6" key={i}>
        <div className="card cn-card">
          <div
            className="card-body cn-card-body d-flex align-items-center"
             // eslint-disable-next-line
            style={{ backgroundImage: "" + `${item.img}` }}
          >
            <a className="cn-card__link" href={item.url}>
              <div className="cn-img-wrapper ">
                <div className="cn-img__holder "></div>
                <span className="cn-noticia__tittle ">
                  <div className="frost">
                    <h3>{item.noticia}</h3>
                  </div>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <section id="connecNews">
      <h2 className="section_name">#ConnecNews</h2>
      <div className="container gx-0">
        <div className="row ">{datamap()}</div>
      </div>
    </section>
  );
};

export default ConnecNews;
