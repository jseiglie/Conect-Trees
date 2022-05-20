import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/videoblog.css";
const VbNavigation = () => {
  const [categorias, setCategorias] = useState([]);

  const categoriasLoad = async () => {
    await axios
      .get("http://localhost:3001/videoblog/categorias")
      .then((res) => {
        setCategorias(res.data);
        //  console.log(categorias)
      });
  };

  useEffect(() => {
    categoriasLoad();
  }, []);

  const categoriasShow = () => {
    return categorias.map((item) => (
      <li key={item.id} className="VbNavigationLi navItem">
        {item.nombre}
      </li>
    ));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <ul className="VbNavigationUl navbar">
          <li className="VbNavigationLi navItem"> Todas</li>
          {categoriasShow()}
        </ul>
      </div>
    </div>
  );
};

export default VbNavigation;
