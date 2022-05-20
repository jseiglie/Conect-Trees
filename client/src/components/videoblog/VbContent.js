import React, { Suspense } from 'react'
const VbTeledeteccion = React.lazy(() => import("./VbTeledeteccion"));
const VbContent = () => {

  return (
    <Suspense fallback={<h1>loading</h1>}>

      <VbTeledeteccion/> 
    </Suspense>
    
  )
}

export default VbContent