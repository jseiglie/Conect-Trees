import React, { useContext, useEffect } from "react";
import AdminFooter from "../../components/AdminFooter";
import { AuthContext } from "../../helpers/AuthContext";
import AdminHeader from "../../components/AdminHeader";
import { Tab } from "../../components/Tab.component";
import { useNavigate } from "react-router-dom";
import AdminLogout from "../../components/AdminLogout";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState) navigate("/admin");
     // eslint-disable-next-line
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
