/* eslint-disable react/prop-types */
import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";


// eslint-disable-next-line react/prop-types
function Header({ presupuesto, setPresupuesto, setIsValidPresupuesto, IsValidPresupuesto }) {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {IsValidPresupuesto ? (
        <ControlPresupuesto 
        presupuesto={presupuesto}
        />
      ) : (
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}

    </header>
  );
}

export default Header;
