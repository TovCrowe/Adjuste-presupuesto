import { useState } from 'react'
import Mensaje from './Mensaje';

/* eslint-disable react/prop-types */
function NuevoPresupuesto({ presupuesto, setPresupuesto }) {

  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un numero");
    } else {
      console.log("Es un numero");
    }
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
            onChange={(e) => setPresupuesto(e.target.value)}
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
