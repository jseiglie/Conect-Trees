import { useState, useContext, useEffect } from "react";
import ColabLoad from "./ColabLoad";
import AddColab from "./AddColab";
import DigiTrainingLoad from "./DigiTrainingLoad";
import ConnecloversLoad from "./ConnecloversLoad";
import { useNavigate } from "react-router-dom";
import ConnecnewsLoad from "./ConnecnewsLoad";
import { AuthContext } from "../helpers/AuthContext";

export const Tab = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [ToggleState, setToggleState] = useState(1);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState) navigate("/admin");
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleAddVideo = () => {
    navigate("/admin/addvideo");
  };
  const handleAddConnenews = () => {
    navigate("/admin/addnews");
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="row gx-0">
      <div className="container-fluid admin_wrapper gx-0 ">
        <div className="admin_tab_list">
          {/* <div className="col-lg-4 col-sm-12"> */}
          <ul className=" tab-list row ">
            <li
              className={` col  tabs admin_tabs ${getActiveClass(
                1,
                "active-tabs"
              )}`}
              onClick={() => toggleTab(1)}
            >
              Colaboradores
            </li>
            <li
              className={`col   tabs admin_tabs ${getActiveClass(
                2,
                "active-tabs"
              )}`}
              onClick={() => toggleTab(2)}
            >
              ConnectLovers
            </li>
            <li
              className={`col tabs admin_tabs ${getActiveClass(
                3,
                "active-tabs"
              )}`}
              onClick={() => toggleTab(3)}
            >
              ConnecNews
            </li>
            <li
              className={`col   tabs admin_tabs ${getActiveClass(
                4,
                "active-tabs"
              )}`}
              onClick={() => toggleTab(4)}
            >
              DigiTraining
            </li>
          </ul>
          {/* </div> */}
        </div>

        <div className="content-container admin_content_display text-center ">
          <div
            className={`content admin_content ${getActiveClass(
              1,
              "active-content"
            )}`}
          >
            <h2 className="text-center dashboard_title ">Colaboradores</h2>
            <ColabLoad />
            <button
              className="btn btn-primary dashboard_btn__add"
              onClick={() => setModalShow(true)}
            >
              Añadir
            </button>
            <AddColab show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <div
            className={`content admin_content ${getActiveClass(
              2,
              "active-content"
            )}`}
          >
            <h2 className="text-center dashboard_title ">ConnectLovers</h2>
            <ConnecloversLoad />
            <button
              className="btn btn-primary dashboard_btn__add"
              onClick={handleAddVideo}
            >
              Añadir
            </button>
          </div>
          <div
            className={`content admin_content ${getActiveClass(
              3,
              "active-content"
            )}`}
          >
            <h2 className="text-center dashboard_title ">ConnecNews</h2>
            <ConnecnewsLoad />
            <button
              className="btn btn-primary dashboard_btn__add"
              onClick={handleAddConnenews}
            >
              Añadir
            </button>
          </div>
          <div
            className={`content admin_content ${getActiveClass(
              4,
              "active-content"
            )}`}
          >
            <h2 className="text-center dashboard_title ">Digitrainig</h2>
            <DigiTrainingLoad />
            <button
              className="btn btn-primary dashboard_btn__add"
              onClick={handleAddVideo}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
