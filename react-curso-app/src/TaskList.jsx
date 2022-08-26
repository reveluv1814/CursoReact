//import { tasks as data } from "./task";
//import { useState, useEffect } from "react";

function TaskList(props) {
  //vamos a guardar el json o los datos en un estado
  /*  const [tasks, setTasks] = useState([]); // la constante tasks toma el valor vacio []

  //en useEffect se ejecutara un areglo vacio cuando se ejecute el componente, y que cuando cargue solo establecera que setTasks se pondra el valor de la variable js tasks que lo renombramos data
  useEffect(() => {
    setTasks(data);
  }, []); */

  if (props.tasks.length === 0) {
    return <h1>No hay tarea aun</h1>;
  }
  return (
    <div>
      {
        //vamos a recorrer tasks poniendo un div
        props.tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default TaskList;
