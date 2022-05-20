import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DigiTrainingLoad = () => {
  const navigate = useNavigate();
   // eslint-disable-next-line
  const { id } = useParams();
  const [digitraining, setDigitraining] = useState([]);
  const [modified, setModified] = useState(false);
  
  const loadDigitraining = () => {
    axios.get("http://localhost:3001/digitalhub/digitraining").then((res) => {
      setDigitraining(res.data);
    });
  };
  useEffect(() => {
    loadDigitraining();
  }, []);
  useEffect(() => {
    loadDigitraining();
  }, [modified]);

  const handleTrashClick = async (id) => {
    await axios.delete(
      `http://localhost:3001/digitalhub/connectlovers/eliminar/${id}`,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    );
    modified === true ? setModified(false) : setModified(true);
  };

  return (
    <>
      {digitraining.map((item, i) => (
        <div className="row line" key={i}>
          <div className="col-sm-8">
            <p className="table_items ">{item.titulo}</p>
          </div>
          <div className="table_items col-sm-2">
            <i
              onClick={() => navigate(`/admin/editvideo/${item.id}`)}
              className="fas fa-pen dashboard_icon"
            ></i>
          </div>

          <div className="table_items col-sm-2">
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

export default DigiTrainingLoad;
