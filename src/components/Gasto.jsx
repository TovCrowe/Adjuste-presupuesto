/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Gasto({expense}) {
    const {category, name, amount} = expense

  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{category}</p>	
                <p className='nombre-gasto'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Gasto