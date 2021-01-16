import React from  "react";
function Articulos(props){
    return(
        <div className="Articulo">
            <div className="ContainerImagenArticulo">
                <img src={props.Src} 
                    alt={props.Alt} className="ImagenArticulo"></img>
            </div>
            <div className="ContainerTextoArticulo">
                <div className="ContainerClasificacion">
                    <p className="Clasificacion">{props.Clasificacion}</p>
                </div>
                <h1 className="Titulo">{props.Titulo}</h1>
                <h2 className="Author"><span className="By">By</span> {props.Author}</h2>
                <p className="Descripcion">{props.Descripcion}</p>    
            </div>                       
        </div>
    )
};
export default Articulos;