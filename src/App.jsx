import { useState } from "react";
import Header from "./components/Header";
import IconNewSpent from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generatorId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [IsValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const [expenseEdit, setExpenseEdit] = useState({});

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setModalAnimation(true);
    }, 500);
  };

  const saveExpense = (exp) => {
    exp.id = generatorId();
    exp.date = Date.now();
    setExpenses([...expenses, exp]);

    setModal(false);
    setTimeout(() => {
      setModalAnimation(false);
    });
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        expenses={expenses}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        IsValidPresupuesto={IsValidPresupuesto}
      />

      {IsValidPresupuesto && (
        <>
          <main>
            <ListadoGastos expenses={expenses} />
          </main>
          <div className="nuevo-gasto">
            <img src={IconNewSpent} alt="" onClick={handleNewSpent} />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          modalAnimation={modalAnimation}
          setModalAnimation={setModalAnimation}
          saveExpense={saveExpense}
        />
      )}
    </div>
  );
}

export default App;
