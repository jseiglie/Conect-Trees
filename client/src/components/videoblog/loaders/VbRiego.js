import React, { useEffect, useState } from "react";
import axios from "axios";

const VbRiego = () => {
  const [riego, setRiego] = useState([]);
  const load = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:3001/videoblog/noticias/riego"
      );

      var temp = resp.data.sort((a, b) => a.id - b.id);
       temp = temp.reverse();
       temp = temp.slice(0, 5);
      console.log(temp);
      setRiego(temp);
      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {riego.map((item) => (
            <div className="col-lg-2" key={item.id}>
              <div className="card">
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="VbCard_fecha">{item.fecha}</p>
                  <h4>{item.titulo}</h4>
                </div>
                <div className="card-footer">
                  <p>Riego</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VbRiego;
