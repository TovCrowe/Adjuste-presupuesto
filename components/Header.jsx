/* eslint-disable react/prop-types */
import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";

function Header({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </header>
  );
}

export default Header;
