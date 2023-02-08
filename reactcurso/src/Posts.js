import {VscBug} from 'react-icons/vsc'

export const Posts =()=>{
    return <button onClick={()=>{
        //estudiar promesas callback y asincaway
        //ventanas modales - material ui - react-icons
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data) )
            .catch(error => console.error(error))
    }}>
        <VscBug/>
        Traer Datos
    </button>
}