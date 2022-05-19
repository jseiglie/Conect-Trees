import React from "react";
import { Link } from "react-router-dom";
import "../styles/Admin.css";

const AdminHeader = () => {
  return (
    <div className="row">
      <div className="header admin_header">
        <Link to="/">
          <div className="admin_navLogo"></div>
        </Link>
        <span className=""></span>
      </div>
    </div>
  );
};

export default AdminHeader;
