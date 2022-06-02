import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

const ColabLoad = () => {
  const url = process.env.REACT_APP_digitalhub;
  const navigate = useNavigate(); // eslint-disable-next-line
  const { id } = useParams();
  const [colaboradores, setColaboradores] = useState([]);
  const [modified, setModified] = useState(false);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(25);


  useEffect(() => {
    loadColab();// eslint-disable-next-line
  }, [modified]);

  const loadColab = async () => {
    try {
      const resp = await axios.get(`${url}colaboradores`);
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
      axios.delete(`${url}/eliminar/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })(modified === true ? setModified(false) : setModified(true));
    } catch (error) {
      console.log(error);
    }
  };

//======================PAGINATION==============
  //SETS SELECTED PAGINATION PAGE
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  }; 

  // LOAD NEXT PAGINATION PAGE
  useEffect(() => {
    loadColab();// eslint-disable-next-line
  }, [offset]);
//===================///PAGINATION==============

  return (
    <>
    <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            breakClassName={"break_me"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activaClassName={"active"}
          />
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
