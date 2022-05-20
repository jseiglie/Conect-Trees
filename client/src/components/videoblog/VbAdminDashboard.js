import React, { Suspense } from "react";
const VbContent = React.lazy(() => import("./VbContent"));

const VbAdminDashboard = () => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <VbContent />
      </Suspense>
    </div>
  );
};

export default VbAdminDashboard;
