import axios from "axios";
import React, { useEffect, useState } from "react";

const VbTeledeteccion = () => {
  const [teledeteccion, setTeledeteccion] = useState([]);

  const load = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:3001/videoblog/noticias/teledeteccion"
      );
      
      var temp = resp.data.sort((a, b) => a.id - b.id)
       temp = temp.reverse()
       temp = temp.slice(0,5)
    //  console.log(temp)
      setTeledeteccion(temp);
   //   console.log(temp);
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
        <div className="row j-center">
          {teledeteccion.map((item) => (
            <div className="col-lg-2" key={item.id}>
                <div className="card allCard">
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body"> 
                    <p className="VbCard_fecha">{item.fecha}</p>
                    <h5 className="text_clamp">{item.titulo}</h5>
                    </div>
                    <div className="card-footer">
                        <p>Teledeteccion</p>
                         </div>

                </div>
                 </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VbTeledeteccion;