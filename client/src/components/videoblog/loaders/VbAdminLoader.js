import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate, useParams } from "react-router-dom";

const VbAdminLoader = () => {
  const url = process.env.REACT_APP_videoblog;
  const urlAdmin = process.env.REACT_APP_videoblog_admin;
  const navigate = useNavigate();
  const [allNews, setAllNews] = useState([]);
  const [error, setError] = useState([]);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(25);
  const [activeToggle, setActiveToggle] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [destacar, setDestacar] = useState();

  //FUNCTION TO LOAD ALLNEWS
  const loadNews = async () => {
    try {
      const resp = await axios.get(`${url}noticias`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      const slice = temp.slice(offset - 1, offset - 1 + perPage);
      setAllNews(slice);
      setPageCount(Math.ceil(temp.length / perPage));
      //console.log(allNews);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  //FUNC TO LOAD CATEGORIES
  const loadCategoria = async () => {
    try {
      const resp2 = await axios.get(`${url}categorias`);
      setCategorias(resp2.data);
      //console.log(categorias)
    } catch (error) {}
  };

  //IF ERROR LOAD NEWS
  if (error) {
    loadNews();
    setError(false);
  }

  //LOAD NEWS
  useEffect(() => {
    loadNews();
  }, []);

  //LOADS CATEGORIA WHEN ALLNEWS LOADED
  useEffect(() => {
    loadCategoria();
  }, [allNews]);
//======================PAGINATION==============
  //SETS SELECTED PAGINATION PAGE
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  // LOAD NEXT PAGINATION PAGE
  useEffect(() => {
    loadNews();
  }, [offset]);
//===================///PAGINATION==============
  //DELETE
  const handleTrashClick = async (id) => {
    await axios.delete(`${urlAdmin}/noticias/${id}`, {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    });
    loadNews();
  };
  //PUBLICAR
  const publicarActivate = async (e, publi) => {
    setActiveToggle(publi);
    let payload;
    publi === "SI"
      ? (payload = { publicar: "NO" })
      : (payload = { publicar: "SI" });
    try {
      await axios
        .put(`${urlAdmin}/noticias/edit/${e}`, payload, {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((e) => console.log(e));
      // console.log(`${url}/noticias/edit/${e}`);
    } catch (error) {
      console.log(error);
    }
  };

  //DESTACADA
  const handleDestacadaClick = async (e, value) => {
    setDestacar(value);
    let payload;
    value ? (payload = { destacada: 0 }) : (payload = { destacada: 1 });
    console.log(payload);
    try {
      await axios
        .put(`${url}/noticias/destacada/${e}`, payload, {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
  }, [activeToggle, destacar]);

  const handleAddVbNews = () => {
    navigate("/videoblog/admin/addnews");
  };

  return (
    <>
      <div className="row">
        <div className="container text-center">
          <button
            className="btn btn-primary dashboard_btn__add VbBtn"
            onClick={handleAddVbNews}
          >
            Añadir noticia
          </button>
        </div>
        <div className="container ">
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
        </div>
      </div>
      <div className="container">
        {allNews.map((item) => (
          <div className="row VbDisplay_wrapper VbTitleDisplay" key={item.id}>
            <div className="col-6 ">
              <p className="table_items text_clamp ">{item.titulo}</p>
            </div>
            <div className="col-6">
              <div className="row m-0 p-0 VbDestacadaWrap">
                <div className="col-8">
                  <span className="listCategoria">
                    Categoria:
                    <strong>{` ${
                      categorias[item.id_categoria - 1].nombre
                    }`}</strong>
                  </span>
                </div>
                <div
                  className="col-4 VbDestacar"
                  onClick={(e) => handleDestacadaClick(item.id, item.destacada)}
                >
                  Destacada
                  {item.destacada ? (
                    <i className="VbDestacadaIcon fa-solid fa-object-group dashboard_icon" />
                  ) : (
                    <i className="VbDestacadaIcon fa-solid fa-square-xmark dashboard_icon"></i>
                  )}
                </div>
              </div>
              <div className="row m-0 p-0">
                <div className="table_items col-4">
                  <i
                    onClick={() =>
                      navigate(`/videoblog/admin/editnews/${item.id}`)
                    }
                    className="fas fa-pen dashboard_icon"
                  ></i>
                </div>
                <div className="table_items col-4">
                  <i
                    onClick={() => handleTrashClick(item.id)}
                    className="fas fa-trash dashboard_icon"
                  ></i>
                </div>

                <div className="table_items col-3">
                  {""}Publicar {""}
                  {item.publicar === "SI" ? (
                    <i
                      className="fa-solid fa-circle-check dashboard_icon"
                      onClick={(e) => publicarActivate(item.id, item.publicar)}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-circle dashboard_icon"
                      onClick={(e) => publicarActivate(item.id, item.publicar)}
                    ></i>
                  )}
                </div>
                <hr className="VbOutterLine" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VbAdminLoader;
