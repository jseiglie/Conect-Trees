import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ConnecnewsLoad = () => {
  const navigate = useNavigate();
   // eslint-disable-next-line
  const { id } = useParams();
  const [connecnews, setConnecnews] = useState([]);
  const [modified, setModified] = useState(false);
  const loadConnecnews = async () => {
    const data = await axios.get("http://localhost:3001/digitalhub/connecnews");
    setConnecnews(data.data);
  };

  useEffect(() => {
    loadConnecnews();
  }, []);

  useEffect(() => {
    loadConnecnews();
  }, [modified]);

  const handleTrashClick = async (id) => {
    await axios.delete(
      `http://localhost:3001/digitalhub/connecnews/eliminar/${id}`,

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
      {connecnews.map((item, i) => (
        <div className="row line" key={i}>
          <div className="col-sm-8">
            <p className="table_items ">{item.titulo}</p>
          </div>
          <div className="table_items col-sm-2">
            <i
              onClick={() => navigate(`/admin/connecnews/editnews/${item.id}`)}
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

export default ConnecnewsLoad;
