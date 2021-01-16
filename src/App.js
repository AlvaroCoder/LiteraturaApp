import React, { Component } from 'react'; 
import {HashRouter,Route,Switch} from "react-router-dom";
//import Signup_Form from "./Components/Form_Signup";
//import Container from "../src/Components/Container";
//import Principal from '../src/Components/Home';
import Home from "../src/Components/HomeComponents/Home";
import Articles from "./Components/ArticulosComponents/ArticleBody"
class App extends Component{
    render(){
      return(
          <>
         <HashRouter basename="/Home">
          <div>
            <Switch>
              <Route exact path="/" render={()=><Home/>}/>
              <Route exact path="/Articulos" render={()=><Articles/>}/>
              {/*<Route path = "/Login" render={()=><Container/>}/>
              <Route path="/Signup" render={()=><Signup_Form/>}/>*/}
            </Switch>
          </div>
          </HashRouter>
          </>
        )

    }

}
export default App;
