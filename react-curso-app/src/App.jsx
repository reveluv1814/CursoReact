import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  //const [tasks, setTasks] = useState([]); // la constante tasks toma el valor vacio []

  //en useEffect se ejecutara un areglo vacio cuando se ejecute el componente, y que cuando cargue solo establecera que setTasks se pondra el valor de la variable js tasks que lo renombramos data
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm/>
      <TaskList/>
      </div>
    </main>
  );
}

export default App;
