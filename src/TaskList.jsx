import React, { useState, useRef } from "react"


function Lista() {
    const [items,setItems] = useState([]);
    
    
    const inputRef = useRef();
    const agregarItem = () => {
        const valor = inputRef.current.value;
        setItems([...items, valor]);
        inputRef.current.value = "";

    }
 
 return ( 

    <div>
        <h1>Tareas</h1>
        <h3>Listado de Tareas</h3>
       
       <input ref={inputRef} type="text"></input>
       <button onClick={agregarItem}>Agregar Tarea</button>
        <ul>
            {items.map((item, index) => (
                <div>
            <li key={index}>{item}</li>
            <input type="checkbox"></input>
            
                </div>
            ))}
        </ul>
        <br></br>
        
    </div>
 );
    }   


export default Lista