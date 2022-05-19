import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../helpers/AuthContext";
const AdminLogout = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useContext(AuthContext);
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);
    navigate("/admin");
  };
  return (
    <div className="container-fluid logout_container">
      <div className="logout_container">
        <button className="btn admin_logout" onClick={handleLogOut}>
          Salir
        </button>
      </div>
    </div>
  );
};

export default AdminLogout;
