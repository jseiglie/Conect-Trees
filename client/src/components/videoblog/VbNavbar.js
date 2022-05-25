import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.component.css";

export const VbNavbar = () => {
  return (
    <div className="row">
      <nav className="navbar navMenu sticky-top">
        <Link to="/">
          <span>
            <img
              className="navLogo"
              src={"/../img_blog/connect1.png"}
              alt="ConnectTrees Digital Hub"
            ></img>
          </span>
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

        <ul className="navbar">
          <li className="navItem">
            <div className="rrss">
              <a
                href="https://www.instagram.com/connectrees_dighub/"
                rel="noreferrer"
                target="_blank"
                className="navItem navbarLink rrss"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/ConnecTreesDig"
                target="_blank"
                rel="noreferrer"
                className="navItem navbarLink rrss"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/connectrees/?viewAsMember=true"
                rel="noreferrer"
                target="_blank"
                className="navItem navbarLink rrss"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.facebook.com/ConnecTrees-DigitalHub-108510918487855"
                rel="noreferrer"
                target="_blank"
                className="navItem navbarLink rrss"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCN61YFLuNAduUNAcL8IKhRQ"
                rel="noreferrer"
                target="_blank"
                className="navItem navbarLink rrss"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VbNavbar;
