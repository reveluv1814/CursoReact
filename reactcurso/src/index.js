//useState es un hook de react
//useEffect es un hook de react
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
//const handleChange=(e)=>{console.log(e.target.value)}
/* const users = [
  {
    id: 1,
    name: "Ryan Ray", //generar imagenes aleatorias "https://robohash.org"
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Neil",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Angel",
    image: "https://robohash.org/user3",
  },
]; */

function Counter() {
  //para poder actualizar se usa hooks
  // hay una variable y una funcion y en use estate se pone el valor seria como : const counter = 10
  //const [counter, setCounter] = useState(10) //este hook devuelve un arreglo
  /* return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)//funcion del hook que actualiza la variable
      }}>Sumar
      </button>

    <button onClick={()=>{
      setCounter(counter-1)
    }}>
      Restar
    </button>

    <button onClick={()=>{
      setCounter(1000)
    }}>
      Reiniciar
    </button>
    </div> )*/
  //otro ejemplo del hook 'usestate' con un input

  /*ahora veremos otro Hook el 'useEffect' que es como un variable que controla los cambios de unncomponente
  ej: cando la variable counter cambie se ejecutara la funcion del use effect y acepta dos parametros una funcion y un arreglo:   
  useEffect(()=>{
  console.log("render"), [counter]
 })
  */

  const [mensaje, setMensaje] = useState("");
  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("el mensaje es :" + mensaje);
        }}
      >
        Save
      </button>
    </div>
  );
}

root.render(
  <>
    {/*<Greeting title="hola mundo"/>
    <Greeting title="hola neil"/>
    <Greeting title="hola js"/>
    <Greeting title="hola react"/>
    <Greeting title="hola angel"/>*/}

    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    /> comentar shift +al +A*/}

    {/* <Button text="Click me" />
    <Button text="Pay" />
    <Button text="" name ="neil" /> */}
    {/* <TaskCard ready={true}/>
    <Saludar/>
    <Button text='Saludar'/>


    <input onChange={(e)=>{console.log(e.target.value)}}/> <input onChange={handleChange}/> */}
    {/* <Posts/> */}
    {/* {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })} */}
    <Counter />
  </>
);
