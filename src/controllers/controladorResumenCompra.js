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
        Swal.fire({
            // html:'<img src="https://cdn.dribbble.com/users/2124240/screenshots/6118828/delete_icon_intraction.gif" alt="">',
            icon: 'success',
            title: 'limpiando.....',
            showConfirmButton: false,
            timer: 6000
          })
        
        localStorage.clear();
        location.reload();
    })

    //funcion para convertir el dolar
    
    let dolar=document.getElementById("botondolar")
    dolar.addEventListener("click",function(evento){
        
        let dolarr=Math.round(total/4396)
        console.log("el dolar es: "+dolarr)
        let totalll=document.getElementById("total")
        totalll.textContent=dolarr+" USD"

        Swal.fire({
        
            icon: 'success',
            title: 'pago en USD',
            showConfirmButton: false,
            timer: 1500
          })
    })


    //funcion para convertir el pesos
    
    let pesos=document.getElementById("botonpesos")
    pesos.addEventListener("click",function(evento){
        
        
        let totall=document.getElementById("total")
        totall.textContent="$"+total

        Swal.fire({
        
            icon: 'success',
            title: 'pago en pesos colombianos',
            showConfirmButton: false,
            timer: 1500
          })
    })





}
