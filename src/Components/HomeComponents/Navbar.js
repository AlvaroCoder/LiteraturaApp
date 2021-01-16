import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as User} from "/Users/LENOVO/english-app/src/img/user.svg"
 
function Links(props){
    return(
        <NavLink to={props.ruta}>
            <li className="Li">{props.nombre}</li>
        </NavLink>
    );
}
function Buttons(props){
    return(
        <div>
            <NavLink to={props.ruta}>
                <li className="Li-Register">{props.Name}</li>
                <User/>
            </NavLink>
        </div>
    )
}
function BurguerButton(){
    return(
        <div className="Ctn-Burguer" onClick={()=>alert("Click")}>
            <div className="Burguer"></div>
            <div className="Burguer"></div>
            <div className="Burguer"></div>
        </div>
    )
}

const NavBar = ()=>{
    var Nombres = {
        articulo :"Aritculo",
        minicuentos : "Minicuentos",
        reseñas :"Reseñas",
        Login :"Login",
        Signup :"SignUp",
        Registrar :"Registrarse"
    }
    var Rutas = {
        Home :"/",
        Articulo:"/Articulos"
    }
    return(
        <header className="Header" >
            <div className="Container">
                <BurguerButton/>
                    <div className="ctn-Title">
                        <h1 className="Title">
                        Club de <br></br>
                        Literatura
                        </h1>
                    </div>
                    <div className="ctn-Nav1">
                        <nav className="Nav1">
                            <ul>
                                <Links nombre={Nombres.articulo} ruta={Rutas.Articulo} class="li"/>
                                <Links nombre={Nombres.minicuentos} ruta={Rutas.Home} class="li"/>
                                <Links nombre = {Nombres.reseñas} ruta={Rutas.Home} class="li"/>
                            </ul>
                        </nav>
                    </div>
                    <div className="ctn-Nav2">
                        <div className="btn-Registrar">
                            <nav className="Nav2">
                                <Buttons Name={Nombres.Registrar} ruta={Rutas.Home}/>
                            </nav>
                        </div>
                    </div>
            </div>
        </header>
    );
}
export default NavBar;