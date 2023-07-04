/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'

function ControlPresupuesto({ presupuesto, expenses }) {

  const [available, setAvailable] = useState(0)
  const [spents, setSpents] = useState(0)

  // useEffec y aque cada que haya cambios en el presupuesto o en las gastos se haga render
  useEffect(() => {
    const totalSpents = expenses.reduce((total, expense) => Number(expense.amount) + total, 0);
    const totalAvailable = presupuesto - totalSpents;
    setSpents(totalSpents);
    setAvailable(totalAvailable);
  }, [expenses, presupuesto]);
  
  const formatQuantity = (q) => {
    return q.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };
  


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <p>Grafica</p>
        <div className='contenido-presupuesto'>
            <p><span>Presupuesto:</span>{formatQuantity(presupuesto)}</p>
            <p><span>Disponible:</span>{formatQuantity(available)}</p>
            <p><span>Gastado:</span>{formatQuantity(spents)}</p>

        </div>
        
    </div>
  )
}

export default ControlPresupuesto