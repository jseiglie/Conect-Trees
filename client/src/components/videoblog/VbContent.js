import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";
const VbTeledeteccion = React.lazy(() => import("./loaders/VbTeledeteccion"));
const VbSoluciones = React.lazy(() => import("./loaders/VbSoluciones"));
const VbMaquinaria = React.lazy(() => import("./loaders/VbMaquinaria"));
const VbNutricion = React.lazy(() => import("./loaders/VbNutricion"));
const VbProteccionVegetal = React.lazy(() =>
  import("./loaders/VbProteccionVegetal")
);
const VbRiego = React.lazy(() => import("./loaders/VbRiego"));
const VbBigData = React.lazy(() => import("./loaders/VbBigData"));
const VbSensorizacion = React.lazy(() => import("./loaders/VbSensorizacion"));

const VbContent = () => {
  const url = process.env.REACT_APP_videoblog;
  const [categorias, setCategorias] = useState([]);
  const [active, setActive] = useState(0);

  const getActiveClass = (index, className) =>
    active === index ? className : "";

  const categoriasLoad = async () => {
    await axios.get(`${url}categorias`).then((res) => {
      setCategorias(res.data);
      //console.log(categorias);
    });
  };

  useEffect(() => {
    setTimeout(categoriasLoad, 500);
    categoriasLoad(); // eslint-disable-next-line
  }, []);

  const categoriasShow = () => {
    return categorias.map((item) => (
      <li
        key={item.id}
        className="VbNavigationLi navbarLink rrss navItem VbnavbarLink"
        onClick={handleClick}
        value={item.id}
      >
        {item.nombre}
      </li>
    ));
  };

  const handleClick = (e) => {
    // console.log(e.target.value);
    setActive(e.target.value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row VbNavigationwrap">
          <ul className="VbNavigationUl navbar">
            <li
              className="VbNavigationLi navbarLink rrss navItem VbnavbarLink"
              onClick={handleClick}
              value={`${0}`}
            >
              Todas
            </li>
            {categoriasShow()}
          </ul>
        </div>
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          0,
          "Vb__active__content"
        )}`}
      >
        <Suspense fallback={<h1>Cargando</h1>}>
          <VbTeledeteccion />
          <VbSoluciones />
          <VbRiego />
          <VbProteccionVegetal />
          <VbNutricion />
          <VbMaquinaria />
          <VbSensorizacion />
          <VbBigData />
        </Suspense>
      </div>

      <div
        className={`Vb__content  ${getActiveClass(1, "Vb__active__content")}`}
      >
        <VbTeledeteccion />
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          2,
          "Vb__active__content"
        )}`}
      >
        <VbSoluciones />
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          3,
          "Vb__active__content"
        )}`}
      >
        <VbRiego />
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          4,
          "Vb__active__content"
        )}`}
      >
        <VbProteccionVegetal />
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          5,
          "Vb__active__content"
        )}`}
      >
        <VbNutricion />
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          6,
          "Vb__active__content"
        )}`}
      >
        <VbMaquinaria />
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          7,
          "Vb__active__content"
        )}`}
      >
        <VbSensorizacion />
      </div>
      <div
        className={`Vb__content tele ${getActiveClass(
          8,
          "Vb__active__content"
        )}`}
      >
        <VbBigData />
      </div>
    </>
  );
};

export default VbContent;
