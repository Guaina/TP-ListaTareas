import React, { useState, useRef } from "react";

function TaskList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();
  const descriptionRef = useRef();

  const agregarItem = () => {
    const valor = inputRef.current.value;
    const descripcion = descriptionRef.current.value;
    setItems([...items, { valor, descripcion }]);
    inputRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const eliminarItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editarItem = (index) => {
    const nuevoValor = prompt("Editar tarea:", items[index].valor);
    const nuevaDescripcion = prompt(
      "Editar descripción:",
      items[index].descripcion
    );
    if (nuevoValor && nuevaDescripcion) {
      setItems(
        items.map((item, i) =>
          i === index
            ? { ...item, valor: nuevoValor, descripcion: nuevaDescripcion }
            : item
        )
      );
    }
  };

  return (
    <div>
      <h1>Tareas</h1>
      <h3>Listado de Tareas</h3>

      <input ref={inputRef} type="text" placeholder="Tarea"></input>
      <input ref={descriptionRef} type="text" placeholder="Descripción"></input>
      <button onClick={agregarItem}>Agregar Tarea</button>
      <ul>
        {items.map((item, index) => (
          <div key={index}>
            <li>
              {item.valor} - {item.descripcion}
              <input type="checkbox"></input>
            </li>
            <button onClick={() => editarItem(index)}>Editar</button>
            <button onClick={() => eliminarItem(index)}>Eliminar</button>
          </div>
        ))}
      </ul>
      <br></br>
    </div>
  );
}

export default TaskList;
