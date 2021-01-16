import React from   "react";
import { NavLink} from "react-router-dom";
function Articles(){
    return(
        <div>
            <h1>Estas en la seccion Articulos</h1>
            <NavLink to="/">
                <p>Regresar</p>
            </NavLink>
        </div>
    )
}
export default Articles;