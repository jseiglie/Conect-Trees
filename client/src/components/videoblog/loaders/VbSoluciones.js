import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VbSoluciones = () => {
  const navigate = useNavigate();
  const [soluciones, setSoluciones] = useState([]);

  const load = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:3001/videoblog/noticias/solucionesintegrales"
      );

      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 5);
      //    console.log(temp);
      setSoluciones(temp);
      //   console.log(temp);
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(load, 500)
    load();
  }, []);

  const handleClick = (e) => {
    navigate(`/videoblog/news/${e.target.id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row j-center">
          {soluciones.map((item) => (
            <div className="col-lg-2" key={item.id}>
              <div className="card allCard">
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="VbCard_fecha">{item.fecha}</p>
                  <h5 onClick={handleClick} id={item.id} className="text_clamp">
                    {item.titulo}
                  </h5>
                </div>
                <div className="card-footer">
                  <p>Soluciones</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VbSoluciones;
