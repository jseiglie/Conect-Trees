import React, { Suspense } from 'react'
import VbBigData from './loaders/VbBigData';
import VbMaquinaria from './loaders/VbMaquinaria';
import VbNutricion from './loaders/VbNutricion';

import VbProteccionVegetal from './loaders/VbProteccionVegetal';
import VbRiego from './loaders/VbRiego';
import VbSensorizacion from './loaders/VbSensorizacion';
const VbTeledeteccion = React.lazy(() => import("./loaders/VbTeledeteccion"));
const VbSoluciones = React.lazy(() => import("./loaders/VbSoluciones"));
const VbContent = () => {

  return (
    <Suspense fallback={<h1>Cargando</h1>}>

      <VbTeledeteccion/> 
      <VbSoluciones/>
      <VbRiego/>
      <VbProteccionVegetal/>
      <VbNutricion/>
      <VbMaquinaria/>
      <VbSensorizacion/>
      <VbBigData/>
    </Suspense>
    
  )
}

export default VbContent