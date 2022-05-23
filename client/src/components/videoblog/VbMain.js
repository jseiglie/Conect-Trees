import React, { Suspense } from "react";
const VbContent = React.lazy(() => import("./VbContent"));

const VbMain = () => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <VbContent />
      </Suspense>
    </div>
  );
};

export default VbMain;
