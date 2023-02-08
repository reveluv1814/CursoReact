import "./task.css";

export function TaskCard({ ready }) {
  /* const cardStyle = {background: '#202020',color:'#fff', padding : '20px'}
    const titleStyle = {fontWeight: 'lighter'} */

  /* return <div style={cardStyle}>
        <h1 style={titleStyle}>Mi Primer Tarea</h1>
        <p>Tarea Ralizada</p>
    </div> */

  ///usando archivo task css
  return (
    <div className="card">
      <h1>Mi Primer Tarea</h1>
      <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Tarea realizada" : "Tarea Pendiente"}
      </span>
      <span className={ready ? "bg-green" : "bg-red "}>
        {ready ? "Tarea realizada 2" : "Tarea Pendiente 2"}
      </span>
    </div>
  );
}
