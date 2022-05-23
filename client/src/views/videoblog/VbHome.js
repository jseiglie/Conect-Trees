import React from "react";
import VbMain from "../../components/videoblog/VbMain";
import VbAdminDashboard from "../../components/videoblog/VbMain";
import VbDestacadaTop from "../../components/videoblog/VbDestacadaTop";

import VbFooter from "../../components/videoblog/VbFooter";
import VbNavbar from "../../components/videoblog/VbNavbar";


const Main = () => {
  return (
    <>
      <VbNavbar />
      <VbDestacadaTop/>
      <VbMain/>
      <VbFooter />
    </>
  );
};

export default Main;
