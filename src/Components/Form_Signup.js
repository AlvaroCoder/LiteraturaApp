/*import React,{ useEffect,useState,useReducer} from "react";
function Signup_Form(){
    const[error,setError] = useState(null);
    const [items,setItems] = useState([]);
    const [isLoaded,setIsloaded] = useState(false);
    const [redirect,setRedirect] = useState(false);
    useEffect(()=>{
        fetch(`http://localhost:4000/bd`)
        .then(res=>res.json())
        .then((result)=>{
            setIsloaded(true)
            setItems(result)
        },(err)=>{
            setIsloaded(true);
            setError(err)
        })
    },[])
    const [inputValues, setInputValues] = useReducer(
        (state,newState) => ({...state, ...newState}),
        {usuario : "",contraseña : "",email:""}
    );
    
    const onChange = event=>{
        const {name,value} = event.target;
        setInputValues({[name]:value})
    }
    const Click = event =>{
        const options = {
            method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(inputValues)
        };
        fetch(`http://localhost:4000/bd`,options)
        
        event.preventDefault();
        console.log(inputValues);
    }
    if(error){
        return(
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }else if(!isLoaded){
        return <p>Loading....</p>
    }else{
        return(
            <div>
                <Form funcion={onChange} click={Click}/>
                {items.map(val=>(
                    <p>Hello {val.nombre}</p>
                ))}
                
            </div>
        )
    }
}

const Form = ({funcion,click})=>{
    return(
            <div>
                <p>..........</p><input placeholder="usuario" name="usuario" onChange={funcion}></input><br></br>
                <p>..........</p><input placeholder="contraseña" name="contraseña" type="password" onChange={funcion}></input><br></br>
                <p>..........</p> <input placeholder="email" name="email" onChange={funcion}></input><br></br>
             <button onClick={click}>ENVIAR</button>
            </div>
        )
}

export default Signup_Form;*/