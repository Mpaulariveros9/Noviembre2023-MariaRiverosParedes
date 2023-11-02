import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [animal, setAnimal] = useState('');
  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const nombreValido = nombre.trim().length >= 3 && !/^\s/.test(nombre);
    const animalValido = animal.trim().length >= 6;

    if (!nombreValido || !animalValido) {
      setError(true);
      setEnviado(false);
      setMostrarCard(false);
    } else {
      setError(false);
      setEnviado(true);
      setMostrarCard(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Tu Nombre: </label>
        <input
          type='text'
          placeholder='Ingresa tu nombre (mínimo 3 caracteres, sin espacios al principio)'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor='animal'>Nombre de tu Animal Favorito: </label>
        <input
          type='text'
          placeholder='Ingresa el nombre de tu animal favorito (mínimo 6 caracteres)'
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        />

        <input type='submit' value='Enviar datos' />
      </form>

      {error && !enviado && <p className="error-message">Por favor, chequea que la información sea correcta.</p>}

      {/* Mostrar la Card solo si no hay error, se ha enviado y se debe mostrar */}
      {enviado && mostrarCard && <Card nombre={nombre} animal={animal} />}
    </div>
  );
};

export default Formulario;
