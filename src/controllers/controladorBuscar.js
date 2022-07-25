import {productosBD} from '../helpers/database.js'
import { pintarProductos } from './controladorPintar.js'
export function buscarProductos(){
    //controlar el input donde escribe el usuario

    let buscador=document.getElementById("busqueda")

    //detectamos que el usuario escribe y capturamos lo 
    // que esta escribiendo
    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value
        
        let filtro=productosBD.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())

        })
        pintarProductos(filtro)
    })
}