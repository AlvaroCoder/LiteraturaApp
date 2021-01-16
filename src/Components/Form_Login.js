/*import React,{useReducer,useState} from 'react';
import "../assets/Container/style.css";

function InputForm({name_style}) {
    const initialState = {
        usuario : "",
        email : "",
        contraseña : "",
        isValidate : false
    }
    
    const [inputValues, setInputValues] = useReducer((state,newState) => ({...state,...newState}),initialState);
    
    const onChange = event=>{
        const {name,value} = event.target;
        setInputValues({[name]:value})
    }
    const onClic = event => {
        console.log(inputValues); 

        event.preventDefault();
    }
    return(
        <div className={name_style}>
            <input placeholder="Usuario" name="usuario" onChange={onChange} className="input"></input>
            <input placeholder="Email" name="email" onChange={onChange} className="input"></input>
            <input placeholder="Contraseña" type="password" name="contraseña" onChange={onChange} className="input"></input>
            <button onClick={onClic}>ENVIAR</button>
            <Containerbtn/>
        </div>
    )
};


export default InputForm;*/