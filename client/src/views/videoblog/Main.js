import React from "react";
import VbAdminDashboard from "../../components/videoblog/VbAdminDashboard";
import VbDestacadaTop from "../../components/videoblog/VbDestacadaTop";

import VbFooter from "../../components/videoblog/VbFooter";
import VbNavbar from "../../components/videoblog/VbNavbar";
import VbNavigation from "../../components/videoblog/VbNavigation";

const Main = () => {
  return (
    <>
      <VbNavbar />
      <VbDestacadaTop/>
      <VbNavigation/>
      <VbAdminDashboard/>
      <VbFooter />
    </>
  );
};

export default Main;
