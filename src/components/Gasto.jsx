/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatDate } from "../helpers";
import IconSavings from "../img/icono_ahorro.svg";
import IconHome from "../img/icono_casa.svg";
import IconFood from "../img/icono_comida.svg";
import IconExpenses from "../img/icono_gastos.svg";
import IconHobby from "../img/icono_ocio.svg";
import IconHealth from "../img/icono_salud.svg";
import IconSubscriptions from "../img/icono_suscripciones.svg";

const dictionaryIcon = {
  Ahorro: IconSavings,
  Comida: IconFood,
  Casa: IconHome,
  Gastos: IconExpenses,
  Ocio: IconHobby,
  Salud: IconHealth,
  Suscripciones: IconSubscriptions,
};

function Gasto({ expense }) {
  const { category, name, amount, id, date } = expense;

  function leadingActions() {
    return (
      <LeadingActions>
        <SwipeAction onClick={() => {}}>Eliminar</SwipeAction>
      </LeadingActions>
    );
  }
  function trailingActions() {
    return (
      <TrailingActions>
        <SwipeAction onClick={() => {}}>Editar</SwipeAction>
      </TrailingActions>
    );
  }

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dictionaryIcon[category]} alt="icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Gasto;
