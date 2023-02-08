export function Greeting({ title } /*props*/) {
  //props es como mandar parametros al componente
  //console.log(props)
  //return <h1>{props.title}</h1>;
  console.log(title);
  return <h1>{title}</h1>;
}
//eliminar una palabra es seleccionar la palabra y ctrl+d
export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>💵{props.amount}</h2>
      <p>{props.married ? "married" : "single"}</p>
      <ul>
        <li>City:{props.address.city}</li>
        <li>Address:{props.address.street}</li>
      </ul>
    </div>
  );
}
