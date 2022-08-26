import{pintarResumenCompra} from './controladorPintarResumen.js'

//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

//comparo o pregunto si el carrito esta vacio
if(carrito==null){
    pintarResumenCompra('../../assets/img/carrovacio.jpg','Carrito Vacio',true,false,null,false,null,null)

}else{
    //el carrito esta lleno

    let total=0;
    //recorro el carrito de compras
    carrito.forEach(function(producto){

        let precioProducto=producto.precio.split("$")[1].split("€")[0]
        let cantidadProducto=producto.cantidad
        let subtotal=Number(precioProducto)*Number(cantidadProducto)
        total=total+subtotal


       pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,subtotal)

    })
    let totall=document.getElementById("total")
    totall.textContent=total

    let eliminar=document.getElementById("botonlimpiar")

    eliminar.addEventListener("click",function(evento){
        
        localStorage.clear();
        location.reload();
    })

    //funcion para convertir el dolar
    
    let dolar=document.getElementById("botondolar")
    dolar.addEventListener("click",function(evento){
        
        let dolarr=total*2
        console.log("el dolar es: "+dolarr)
    })



}
