import React from "react"


function Card({ nombre, animal }) {
  return (
    <div>
      <h2>¡Gracias por responder el Formulario!</h2>
      <p>Ahora conocemos que tu animal favorito es {animal} y tu nombre es {nombre}.</p>
    </div>
  );
}

export default Card;

