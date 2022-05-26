import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

const VbAdminLoader = () => {
  const navigate = useNavigate();
  const [allNews, setAllNews] = useState([]);
  const [error, setError] = useState([]);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(25);
  const [modified, setModified] = useState(false);
  const [activeToggle, setActiveToggle] = useState("");

  const loadNews = async () => {
    try {
      const resp = await axios.get(`http://localhost:3001/videoblog/noticias`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      const slice = temp.slice(offset - 1, offset - 1 + perPage);
      setAllNews(slice);
      setPageCount(Math.ceil(temp.length / perPage));
      console.log(allNews);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  if (error) {
    loadNews();
    setError(false);
  }

  useEffect(() => {
    loadNews();
  }, []);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    loadNews();
  }, [offset]);

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

  const publicarActivate = async (e, publi) => {
    setActiveToggle(publi);
    console.log("1 publicar -> " + publi + "  estado togle -> " + activeToggle);
    let payload;
    publi === "SI"
      ? (payload = { publicar: "NO" })
      : (payload = { publicar: "SI" });
    //console.log(payload);
    try {
      await axios
        .put(`http://localhost:3001/videoblog/noticias/edit/${e}`, payload, {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((e) => console.log(e));
      console.log(`http://localhost:3001/videoblog/noticias/edit/${e}`);
      console.log(
        "2 publicar -> " +
          publi +
          "  payload -> " +
          payload +
          "  estado togle -> " +
          activeToggle
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadNews();
  }, [activeToggle]);

  return (
    <>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"siguiente"}
        breakLabel={"..."}
        breakClassName={"break_me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activaClassName={"active"}
      />
      <div className="container">
        {allNews.map((item) => (
          <div className="row VbDisplay_wrapper" key={item.id}>
            <div className="col-6">
              <p className="table_items">{item.titulo}</p>
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

            <div className="table_items col-sm-2">
              {item.publicar === "SI" ? (
                <i
                  className="fa-solid fa-circle-check dashboard_icon"
                  //   onClick={(e) => publicarDeactivate(item.id, item.publicar)}
                  onClick={(e) => publicarActivate(item.id, item.publicar)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-circle dashboard_icon"
                  onClick={(e) => publicarActivate(item.id, item.publicar)}
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VbAdminLoader;
