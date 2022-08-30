//import { tasks as data } from "./task";
//import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  //vamos a guardar el json o los datos en un estado
  /*  const [tasks, setTasks] = useState([]); // la constante tasks toma el valor vacio []

  //en useEffect se ejecutara un areglo vacio cuando se ejecute el componente, y que cuando cargue solo establecera que setTasks se pondra el valor de la variable js tasks que lo renombramos data
  useEffect(() => {
    setTasks(data);
  }, []); */

  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-center text-white font-bold text-4xl">No hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {
        //vamos a recorrer tasks poniendo un div
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  );
}

export default TaskList;
