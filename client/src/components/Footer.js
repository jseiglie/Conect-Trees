import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getUTCFullYear();

  return (
    
    <footer className="footer">
      <div className="footerWrap">
        <div className="row">
          <img
            className="imgFooter mx-auto"
            src={"./img/connect2_1.png"}
            alt="ConnectTrees Digital Hub"
          ></img> 
        </div>
        <div className="row">
          <span className="footerText color-white">
            <a className="externalLink" href="https://connecttrees.es">
              ConnectTrees
            </a>
            &reg; {year}. Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
