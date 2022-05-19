import React from "react";

const AdminFooter = () => {
  const today = new Date();
  const year = today.getUTCFullYear();
  return (
    <div className="row  ">
      <footer className="admin_footer mt-auto ">
        <div className="admin_footerWrap mt-auto">
          <div className="row ">
            <div className="admin_imgFooter"></div>
          </div>
          <div className="row">
            <span className="admin_footerText color-white">
              <a className="externalLink" href="https://connecttrees.es">
                ConnectTrees
              </a>
              &reg; {year}. Todos los derechos reservados
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminFooter;
