import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ColabLoad = () => {
  const navigate = useNavigate(); // eslint-disable-next-line
  const { id } = useParams();
  const [colaboradores, setColaboradores] = useState([]);
  const [modified, setModified] = useState(false);

  useEffect(() => {
    loadColab();
  }, [modified]);

  const loadColab = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:3001/digitalhub/colaboradores"
      );
      setColaboradores(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadColab(); // eslint-disable-next-line
  }, []);

  const handleTrashClick = (id) => {
    try {
      axios.delete(
        `http://localhost:3001/digitalhub/colaboradores/eliminar/${id}`,
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )(modified === true ? setModified(false) : setModified(true));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {colaboradores.map((item, i) => (
        <div className="row line" key={i}>
          <div className="col-8">
            <p className="table_items ">{item.nombre}</p>
          </div>
          <div className="table_items col-2">
            <i
              onClick={() => navigate(`/colaboradores/edit/${item.id}`)}
              className="fas fa-pen dashboard_icon"
            ></i>
          </div>

          <div className="table_items col-2">
            <i
              onClick={() => handleTrashClick(item.id)}
              className="fas fa-trash dashboard_icon"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default ColabLoad;
