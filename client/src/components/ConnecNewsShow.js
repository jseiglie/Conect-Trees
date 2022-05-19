import React from "react";

const ConnecNewsShow = (props) => {
  return (
    <>
      <div className="card card-wrap ">
        <div className="card-body  ">
          <div className="player-wrapper">
           
            <div className="card-footer">
              <span className="video__tittle color-white">
                <h3>{props.noticia}</h3>
                <img src={props.img} alt={props.noticia} />
                <p>Más información <a href={props.url}>aquí</a> </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnecNewsShow;
