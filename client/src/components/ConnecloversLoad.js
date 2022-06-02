import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const ConnecloversLoad = () => {
  const url = process.env.REACT_APP_digitalhub;
  const navigate = useNavigate(); // eslint-disable-next-line
  const { id } = useParams();
  const [conneclovers, setConnecLovers] = useState([]);
  const [modified, setModified] = useState(false);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(25);

  const loadConnectlovers = async () => {
    try {
      const resp = await axios.get(`${url}connectlovers`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      setConnecLovers(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadConnectlovers(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadConnectlovers();// eslint-disable-next-line
  }, [modified]);

  const handleTrashClick = async (id) => {
    await axios.delete(
      `${url}/connectlovers/eliminar/${id}`,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    );
    modified === true ? setModified(false) : setModified(true);
  };


//======================PAGINATION==============
  //SETS SELECTED PAGINATION PAGE
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  // LOAD NEXT PAGINATION PAGE
  useEffect(() => {
    loadConnectlovers();// eslint-disable-next-line
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
      {conneclovers.map((item, i) => (
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

export default ConnecloversLoad;
