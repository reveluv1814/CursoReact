import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // la constante tasks toma el valor vacio []

  //en useEffect se ejecutara un areglo vacio cuando se ejecute el componente, y que cuando cargue solo establecera que setTasks se pondra el valor de la variable js tasks que lo renombramos data
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task){
    //copia todas las tareas y añade una nueva que seria 'task'
    setTasks([...tasks, task])
  }

  return (
    <>
      <TaskForm createTask/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
