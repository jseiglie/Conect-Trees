import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.component.css";

export const VbNavbar = () => {
  return (
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
          <h1 className="VbnavbarTitle">
            VideoBlog
            </h1> 
        </Link>
        {/* <span className="VbTitleMainHolder">
          <h1 className="VbTitleMain">VideoBlog</h1>
        </span> */}

        <form className="form">
          <input
            className="form-control VbInputSearch"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
          />
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
  );
};

export default VbNavbar;
