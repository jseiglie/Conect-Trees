import axios from "axios";
import React, { useEffect, useState } from "react";

const VbDestacadaTop = () => {
  const [ultimas, setUltimas] = useState([]);

  const loadUltimas = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:3001/videoblog/noticias/ultimas"
      );
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 4);
      //  console.log(temp);
      setUltimas(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUltimas();
  }, []);

  const display = () => {
    return ultimas.map((item) => (
      <div className="card Vblatest-card">

      <div className="card-body Vblatest-card-body key={item.id}">
        <p>{item.titulo}</p>
      </div>
      </div>
    ));
  };

  return (
    <div className="container VbDestacadaHolder">
      <div className="row VbDestacadasWrap">
        <div className="col-12 col-md-8">
          <div className="VbDestacadaTop"></div>
        </div>
        <div className="col-12 col-md-4 VbDestacadasWrap">
          <div className="container VbDestacadasListWrap">
            <div className="card Vblatest-card-wrap">
              <div className="card-header Vbcard-header">
                <h4 className="VbLoMas">Lo mas nuevo</h4>
              </div>
              {display()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VbDestacadaTop;
