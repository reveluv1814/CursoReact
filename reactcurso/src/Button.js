import PropTypes from 'prop-types'

export function Button({text, name ='Usuario'}){
    console.log(text)
    if (!text){
        console.error('el texto es requerido')
    }
    return <button onClick={function(){console.log("hola mundo")}}>
        {text} - {name}
    </button>
}
Button.propTypes={
    text: PropTypes.string.isRequired
}