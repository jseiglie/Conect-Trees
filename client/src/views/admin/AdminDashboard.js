import React, { useContext, useEffect, useState } from "react";
import AdminFooter from "../../components/AdminFooter";
import { AuthContext } from "../../helpers/AuthContext";
import AdminHeader from "../../components/AdminHeader";
import { Tab } from "../../components/Tab.component";
import { useNavigate } from "react-router-dom";
import AdminControl from "../../components/AdminControl";
import VbAdminDashboard from "../../components/videoblog/VbAdminDashboard";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const [showDigitalHub, setShowDigitalHub] = useState(false);
  const [showVideoBlog, setShowVideoBlog] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("active")) {
      var last = sessionStorage.getItem("active");
    } 
    if (last === "digitalhub") setShowDigitalHub(true);
    if (last === "videoblog") setShowVideoBlog(true);
    else setShowDigitalHub(true);
  }, [showDigitalHub]);

  const handleclick = () => {
    if (showDigitalHub === true) {
      sessionStorage.setItem("active", "videoblog");
      return (setShowDigitalHub(false), setShowVideoBlog(true))
    }
    if (showVideoBlog === true) {
      sessionStorage.setItem("active", "digitalhub");
      return setShowVideoBlog(false), setShowDigitalHub(true);
    }
  };

  useEffect(() => {
    if (!authState) navigate("/admin");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="row">
        <div className="container wrapperControl">
          <button
            className="btn btn-primary btn_toggler"
            type="button"
            onClick={handleclick}
          >
            {`${showDigitalHub === true ? "VideoBlog" : "DigitalHub"}`}
          </button>
          <AdminControl />
        </div>
      </div>
      <hr />
      <div className="row content__wrapp ">
        {showDigitalHub === true ? <Tab /> : <VbAdminDashboard />}
      </div>

      <AdminFooter />
    </>
  );
};
export default AdminDashboard;
