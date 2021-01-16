import React,{Component} from 'react';
import NavBar from "../HomeComponents/Navbar";
import Body from "../HomeComponents/Body";
import Footer from "../HomeComponents/Footer";
import "../HomeAssets/main.css"
// Vamos a crear la clase home
export default class Home extends Component{
    render(){
        return(
           <div className="Body">
               <NavBar/>
                <Body/>
                <Footer/>
           </div>
        )
    }
}
