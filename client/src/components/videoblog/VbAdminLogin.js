import React from "react";
import AdminFooter from "../AdminFooter";


import VbHeader from "./VbHeader";
import VbLoginForm from "./VbLoginForm";

const VbAdminLogin = () => {
  return (
    <div className="login__wrapper">
      <VbHeader />

      <VbLoginForm/>
      <AdminFooter />
    </div>
  );
};

export default VbAdminLogin;
