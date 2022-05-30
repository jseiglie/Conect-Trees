import React, { Suspense, useContext, useEffect, lazy } from "react";
import { AuthContext } from "../../helpers/AuthContext";
import { useNavigate } from "react-router-dom";
import VbFooter from "./VbFooter";
const VbAdminLoader = lazy(() => import("./loaders/VbAdminLoader"));


const VbAdminDashboard = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState) navigate("/admin");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="row content__wrapp ">
        <Suspense fallback={<h1>Cargando</h1>}>
          <VbAdminLoader />
        </Suspense>
      </div>

      <VbFooter />
    </>
  );
};
export default VbAdminDashboard;
