/* eslint-disable react/prop-types */
import React from 'react'

function ControlPresupuesto({ presupuesto }) {


  const formatQuantity = (q) => {

    return q.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    }
  )}


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <p>Grafica</p>
        <div className='contenido-presupuesto'>
            <p><span>Presupuesto:</span>{formatQuantity(presupuesto)}</p>
            <p><span>Disponible:</span>0</p>
            <p><span>Gastado:</span>0</p>

        </div>
        
    </div>
  )
}

export default ControlPresupuesto