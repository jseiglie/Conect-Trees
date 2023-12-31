import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
const AdminControl = () => {
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("active")
    setAuthState(false);
    navigate("/admin");
  };

  return (
        <button className="btn admin_logout" onClick={handleLogOut}>
          Salir
        </button>
  );
};

export default AdminControl;
