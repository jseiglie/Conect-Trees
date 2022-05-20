import React, { useEffect, useState } from "react";
import axios from "axios";

export const VbTeledeteccion = () => {
  const [teledeteccion, setTeledeteccion] = useState([]);

  const load = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:3001/videoblog/noticias/teledeteccion"
      );
      setTeledeteccion(resp.data);
      console.log(teledeteccion);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return;
};

export const VbSoluciones = () => {
  const [soluciones, setSoluciones] = useState([]);
  return <div>VbCategoriasLoad</div>;
};

export const VbRiego = () => {
  const [riego, setRiego] = useState([]);
  return <div>VbCategoriasLoad</div>;
};

export const VbProteccion = () => {
  const [proteccion, setProteccion] = useState([]);
  return <div>VbCategoriasLoad</div>;
};

export const VbMaquinaria = () => {
  const [maquinaria, setMaquinaria] = useState([]);
  return <div>VbCategoriasLoad</div>;
};

export const VbSensorizacion = () => {
  const [sensorizacion, setSensorizacion] = useState([]);
  return <div>VbCategoriasLoad</div>;
};

export const VbBigData = () => {
  const [bigData, setBigData] = useState([]);
  return <div>VbCategoriasLoad</div>;
};
