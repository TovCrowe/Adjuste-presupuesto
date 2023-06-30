import { useState } from "react";
import Mensaje from "./Mensaje";

/* eslint-disable react/prop-types */
function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {
  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un numero");

      return;
    }

    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
            placeholder="Añade tu presupuesto"
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
