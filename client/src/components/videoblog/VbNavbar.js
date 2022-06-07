import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/Navbar.component.css";

export const VbNavbar = () => {
  const url = process.env.REACT_APP_videoblog;
  const youtube = process.env.REACT_APP_youtube;
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    loadNews(); // eslint-disable-next-line
  }, []);

  //FUNCTION TO LOAD ALLNEWS
  const loadNews = async () => {
    try {
      const resp = await axios.get(`${url}noticias`);
      setData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  //SEARCH

  const search = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (q.length > 1) {
        resp = await axios.get(`${url}noticias/${q}`);
        setSearchResult(resp.data);
        setVisible(true);
      } else {
        alert("Debe introducir un valor para buscar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displaySearch(); // eslint-disable-next-line
  }, [searchResult]);

  const updateView = async (value) => {
    try {
      await axios.put(`${url}noticias/count/${value}`);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(()=>{
  if (q.length==0) setVisible(false)
},[q])


  const handleClickSearchItem = (e) => {
    updateView(e.target.id);
  };

  const displaySearch = () => {
    return searchResult.length > 0
      ? searchResult.map((item) => (
          <ul className="dhNavBar">
            <a
              className="externalLink VbExternal"
              href={`${youtube + item.codigo_video}`}
              target="_blank"
              rel="noreferrer"
            >
              <li
                onClick={(e) => handleClickSearchItem}
                className="navItem Vbrrss VbSearchLi"
              >
                {item.titulo}
              </li>
            </a>
          </ul>
        ))
      : "No data";
  };

  const handleCloseSearch = () => {
    setVisible(false);
    setQ("");
  };

  return (
    <>
      <div className="row VbnavbarWrap">
        <nav className="navbar VbnavMenu sticky-top">
          <Link to="/">
            <span>
              <img
                className="VbnavLogo"
                src={"/../img_blog/connect1.png"}
                alt="ConnectTrees Digital Hub"
              ></img>
            </span>
          </Link>
          <Link to="/videoblog/home">
            <h1 className="VbnavbarTitle">VideoBlog</h1>
          </Link>
          {/* <span className="VbTitleMainHolder">
          <h1 className="VbTitleMain">VideoBlog</h1>
        </span> */}

          <form className="form VbFormSearch" onSubmit={(e) => search(e)}>
            <input
              className="form-control VbInputSearch"
              type="text"
              placeholder="Buscar"
              aria-label="Buscar"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
            />
            <i
              onClick={search}
              className="fa-solid fa-magnifying-glass VbSearchIcon"
            ></i>
          </form>

          <ul className="Vbnavbar">
            <li className="VbnavItem">
              <div className="Vbrrss">
                <a
                  href="https://www.instagram.com/connectrees_dighub/"
                  rel="noreferrer"
                  target="_blank"
                  className="VbnavItem navbarLink rrss"
                >
                  <i className="rrss-icon fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/ConnecTreesDig"
                  target="_blank"
                  rel="noreferrer"
                  className="VbnavItem navbarLink rrss"
                >
                  <i className="rrss-icon fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/connectrees/?viewAsMember=true"
                  rel="noreferrer"
                  target="_blank"
                  className="VbnavItem navbarLink rrss"
                >
                  <i className="rrss-icon fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.facebook.com/ConnecTrees-DigitalHub-108510918487855"
                  rel="noreferrer"
                  target="_blank"
                  className="VbnavItem navbarLink rrss"
                >
                  <i className="rrss-icon fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCN61YFLuNAduUNAcL8IKhRQ"
                  rel="noreferrer"
                  target="_blank"
                  className="VbnavItem navbarLink rrss"
                >
                  <i className="rrss-icon fab fa-youtube"></i>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {visible ? (
        <div className="row VbSearchResultBar ">
          <div className="container VbSearchWrapper">
            <span className="iconX VbCloseSeatch">
              <i
                onClick={handleCloseSearch}
                className=" XCloseIconSearch fa-solid fa-xmark"
              ></i>
            </span>
            {displaySearch()}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default VbNavbar;
