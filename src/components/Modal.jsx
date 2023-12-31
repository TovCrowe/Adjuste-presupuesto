/* eslint-disable react/prop-types */
import closeBtn from "../img/cerrar.svg";
import { useState } from "react";
import Mensaje from "./Mensaje";

function Modal({ setModal, modalAnimation, setModalAnimation, saveExpense }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState(""); 
    const [message, setMessage] = useState("");
    

  const hideModal = () => {
    setModalAnimation(false);

    setTimeout(() => { // 
      setModal(false);
    }, 500); // 500 milisegundos
  };// hideModal

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, amount, category].includes("")) {
      setMessage("Todos los campos son obligatorios");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
  }
    saveExpense({name, amount, category})



  }


  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={closeBtn} alt="" onClick={hideModal} />
      </div>
      <form
      onSubmit={handleSubmit}
        action=""
        className={`formulario ${modalAnimation ? "animar" : "cerrar"}  `}//
      >
        <legend>Nuevo Gasto</legend>
        {message && <Mensaje tipo="error">{message}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Añade la cantidad del gasto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Casa">Casa</option>
            <option value="Gastos">Gastos Varios</option>
            <option value="Ocio">Ocio</option>
            <option value="Salud">Salud</option>
            <option value="Sus">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
}

export default Modal;
