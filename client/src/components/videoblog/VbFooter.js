import React from 'react'
import "../../styles/videoblog.css"

const VbFooter = () => {
     const today = new Date();
    const year = today.getUTCFullYear();
  
    return (
      
      <footer className="Vbfooter">
        <div className="VbfooterWrap">
          <div className="row">
            <img
              className="VbimgFooter mx-auto"
              src={"/../img/connect2_1.png"}
              alt="ConnectTrees Digital Hub"
            ></img> 
          </div>
          <div className="row">
            <span className="VbfooterText color-white">
              <a className="externalLink" href="https://connecttrees.es">
                ConnectTrees
              </a>
              &reg; {year}. Todos los derechos reservados
            </span>
          </div>
        </div>
      </footer>
    );
}

export default VbFooter