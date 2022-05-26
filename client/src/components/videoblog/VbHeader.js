import React from "react";
import { Link } from "react-router-dom";
import "../../styles/videoblog.css";

const VbHeader = () => {
  return (
    <div className="row">
      <div className="header admin_header">
        <Link to="/videoblog/home">
          <div className="admin_navLogo"></div>
          <h3 className="VbLoginTitle">
            VIDEOBLOG
            </h3> 
        </Link>
        <span className=""></span>
      </div>
    </div>
  );
};

export default VbHeader;
