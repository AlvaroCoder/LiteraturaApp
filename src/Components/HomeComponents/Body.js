import React ,{Component } from "react";
import Articulos from "./Articulo"
function ContenedorFrase(){
    return(
        <div className="ctn-Img">
            <div className="ctn-Frase">
                <h2>
                    "Un lector vive mil vidas <br></br>
                    antes de morir.....<br></br>
                    aquel que no lee <br></br> 
                    solo vive una".
                </h2>
                <p className="Frase-author">George R.R.Martin</p>
            </div>
            <img src='https://ep01.epimg.net/cultura/imagenes/2018/08/15/babelia/1534351691_997591_1534352892_noticia_normal_recorte1.jpg'
                alt="imagen de libro" className="Imagen"></img>
        </div>
    )
}

export default class Body extends Component{
    state={
        articulos : [
            {titulo:"El Quijote de la Mancha", img:"https://www.telesurtv.net/export/sites/telesur/img/multimedia/2015/01/15/molinos-de-viento.jpg_1149960893.jpg",
            alt:"Imagen del Quijote",clasificacion:"Aventura" ,author:"Alvaro Felipe",descripcion :"Es un muy buen libro"},
            {titulo:"Crimen y castigo",img:"https://fervor.com.ar/wp-content/uploads/2019/12/Crimen-y-castigo-2.jpg"
            ,alt:"Imagen de Crimen y Castigo",clasificacion:"Drama",author:"Fedor Dostoviesky",descripcion:"Me encanto su obra"},
            {titulo:"Principe y Mendigo",img:"https://www.denia.com/wp-content/uploads/2010/12/El-principe-y-el-mendigo.jpg", 
            alt:"Imagen de Principe y Mendigo", clasificacion:"Aventura",author:"Charles Dickens", descripcion:"La recomiendo"}
        ],
        microrelatos:[
            {titulo:"La cucaracha feliz",img:"",alt:"Imagen de la Cucaracha Feliz", clasificacion:"Aventura",author:"Rojas Espinoza",descripcion:"Narra la historia de una cucaracha"}
        ],
        reseñas:[
            {titulo:"Reseña a La Odisea",img:"img"}
        ]
    }
    render(){
        return(
            <div className="ContainerBody">
                <ContenedorFrase/>
                <h3>Historias</h3>
                <div className="ContainerArticulos">
                    {
                        this.state.articulos.map((articulo,key)=>{
                            return(
                               <Articulos key={key} Src={articulo.img} Alt={articulo.alt} Clasificacion={articulo.clasificacion}
                                Titulo={articulo.titulo} Author={articulo.author} Descripcion={articulo.descripcion}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}