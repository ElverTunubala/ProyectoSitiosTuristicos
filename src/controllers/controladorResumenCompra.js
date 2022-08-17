import{pintarResumenCompra} from './controladorPintarResumen.js'

//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

//comparo o pregunto si el carrito esta vacio
if(carrito==null){
    pintarResumenCompra('../../assets/img/carrovacio.jpg','Carrito Vacio',true,false,null,false,null,null)

}else{
    //el carrito esta lleno
    
    //recorro el carrito de compras
    carrito.forEach(function(producto){

        let precioProducto=producto.precio.split("$")[1].split("€")[0]
        let cantidadProducto=producto.cantidad
        let subtotal=Number(precioProducto)*Number(cantidadProducto)

       pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,subtotal)

    })

}
