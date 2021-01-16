/*import React, {Component} from 'react';
import '../assets/Container/stilo.css'
import { NavLink} from 'react-router-dom';


function Bottons(props){
    return(
        <div  className={props.class} id={props.Id}>
           <NavLink to={props.link}>
                <p>{props.name}</p>
           </NavLink>
        </div>
    )
}
function CtnRegister(props){
    return(
        <div className={props.stilo}>
            <Bottons name="Sign in" class = {props.in} link="/Login"/>
            <Bottons name="Sign up" class = {props.up} link="/Signup"/>
        </div>
    )
}
function CtnMenu(props){
    return(
        <div className={props.stilo}>
            <Bottons name="Inicio" class = {props.Fisica} Id={props.item} link="/"/>
            <Bottons name="Minicuentos" class={props.Mate} Id={props.item} link="/"/>
            <Bottons name="Reseñas" class={props.Tec} Id={props.tiem} link="/"/>
        </div>
    )

}
export default class Navbar extends Component{
    render(){
        return(
           <div className="Nav">
               <CtnRegister stilo="CtnRegister" in="Signin" up = "Signup"/>
                <CtnMenu stilo = "CtnMenu"/>
           </div>
        )

    }

}*/