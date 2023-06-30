import { useState } from 'react'
import Header from '../components/Header'
Header
function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  return (
    <div>
    {isValidPresupuesto ? (
      <p>control presupuesto</p>
    ) : (
      <Header
    presupuesto={presupuesto}
    setPresupuesto={setPresupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}
    />
    )}
    </div>
  )
}

export default App
