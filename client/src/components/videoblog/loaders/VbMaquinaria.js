import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VbMaquinaria = () => {
  const url = process.env.REACT_APP_videoblog;
  const navigate = useNavigate();
  const [maquinaria, setMaquinaria] = useState([]);

  const load = async () => {
    try {
      const resp = await axios.get(`${url}noticias/maquinaria`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 5);
      setMaquinaria(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(load, 500);
    load(); // eslint-disable-next-line
  }, []);

  const updateView = async (value) => {
    try {
      await axios.put(`${url}noticias/count/${value}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    updateView(e.target.id);
    navigate(`/videoblog/news/${e.target.id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row j-center">
          {maquinaria.map((item) => (
            <div className="col-lg-2" key={item.id}>
              <div className="card allCard">
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="VbCard_fecha">{item.fecha}</p>
                  <h5
                    onClick={handleClick}
                    id={item.id}
                    className="text_clamp VbNoticiaTitle"
                  >
                    {item.titulo}
                  </h5>
                </div>
                <div className="card-footer">
                  <p>Maquinaria</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VbMaquinaria;
