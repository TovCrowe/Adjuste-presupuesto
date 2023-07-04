/* eslint-disable react/prop-types */
import React from 'react'
import Gasto from './Gasto'

function ListadoGastos({expenses}) {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Gastos' : 'No hay gastos añadidos'}</h2>

        {expenses.map(expense => (
            <Gasto 
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
  )
}

export default ListadoGastos