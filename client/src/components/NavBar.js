import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.component.css";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <div className="row">
      <nav className="navbar navMenu sticky-top">
        <Link to="/">
          <span>
            <img
              className="navLogo"
              src={"./img/connect1.png"}
              alt="ConnectTrees Digital Hub"
            ></img>
          </span>
        </Link>
        <ul className="navbar">
          <li className="navItem navbarLink">
            <HashLink to="#Nosotros">NOSOTROS</HashLink>
          </li>
          <li className="navItem navbarLink">
            <HashLink to="#connectLovers">CONNECTLOVERS</HashLink>
          </li>
          <li className="navItem navbarLink">
            <HashLink to="#digitalizate">DIGITALÍZATE</HashLink>
          </li>
          <li className="navItem navbarLink">
            <HashLink to="#contacto">CONTACTO</HashLink>
          </li>
          <li className="navItem navbarLink">
            <HashLink to="#connecNews">CONNECNEWS</HashLink>
          </li>
          <li className="navItem navbarLink">
            <HashLink to="#digitraining">DIGITRAINING</HashLink>
          </li>
          <li className="navItem navbarLink">
            <Link to={"/videoblog/home"}>VIDEOBLOG</Link>
          </li>
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
