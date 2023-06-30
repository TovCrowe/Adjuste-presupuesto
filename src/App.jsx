import { useState } from 'react'
import Header from './components/Header'
import IconNewSpent from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [IsValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)
  const handleNewSpent = () => {
    setModal(true)

    setTimeout(() => {
      setModalAnimation(true)
    
    }, 500 )
  }

  

  return (
    <div>
      <Header
    presupuesto={presupuesto}
    setPresupuesto={setPresupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}
    IsValidPresupuesto={IsValidPresupuesto}
    />
    {IsValidPresupuesto && (
      <div className='nuevo-gasto'>
        <img src={IconNewSpent} alt="" onClick={handleNewSpent}/>
        
      </div>
    )}
    {modal && <Modal
      setModal={setModal}
      modalAnimation={modalAnimation}
      setModalAnimation={setModalAnimation}
    />}

    </div>
  )
}

export default App
