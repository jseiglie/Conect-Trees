import React, { useState, useContext, useEffect } from "react";
import AdminFooter from "../../components/AdminFooter";
import { AuthContext } from "../../helpers/AuthContext";
import AdminHeader from "../../components/AdminHeader";
import { Tab } from "../../components/Tab.component";
import { useNavigate } from "react-router-dom";
import AdminLogout from "../../components/AdminLogout";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState) navigate("/admin");
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminLogout />
      <div className="row content__wrapp ">
        <Tab />
      </div>

      <AdminFooter />
    </>
  );
};
export default AdminDashboard;
