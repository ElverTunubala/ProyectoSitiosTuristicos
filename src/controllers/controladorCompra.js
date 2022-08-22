console.log("hola estamos comprando")
console.log(localStorage.getItem('infoProducto'))
let producto=JSON.parse(localStorage.getItem('infoProducto'))

let carrito
//revisar y verificar si hay productos en el carrito
if(JSON.parse(localStorage.getItem("carrito"))==null){

    //creamos el carrito de compras
    carrito=[]
}else{
    carrito=JSON.parse(localStorage.getItem("carrito"))
}


console.log(JSON.parse(localStorage.getItem("carrito")))

//pintamos la foto desde el objeto del localstorage
let foto=document.getElementById("foto")
foto.src=producto.foto

let nombre=document.getElementById("nombre")
nombre.textContent=producto.nombre

let precio=document.getElementById("precio")
precio.textContent=producto.precio
precio.classList.add("textositios")



let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion

let contenedor = document.getElementById("estrella")
estrellas= producto.popularidad
for (var i = 1; i <= estrellas; i++) {
    let popularidad = document.createElement("i")
    popularidad.classList.add("bi", "bi-star-fill")
    contenedor.appendChild(popularidad)
}

//capturar la cantidad del producto seleccionado
//capturamos el value del input
// let cantidad=document.getElementById("cantidad").value
// agrego un nuevo atributo(cantidad) al objeto producto
let botonagregar = document.getElementById("botonagregar")
//CREAMOS EL CARRITO DE COMPRAS


botonagregar.addEventListener("click", function(evento){

    Swal.fire({
        
        icon: 'success',
        title: 'Sitio agregado con Exito',
        showConfirmButton: false,
        timer: 1500
      })

    // let alerta=document.getElementById("alerta")
    // alerta.classList.remove("invisible")

    // setTimeout(function(){

    //     alerta.classList.add("invisible")
    // },3000)

    let cantidad= document.getElementById("cantidad").value
    producto.cantidad=cantidad
    console.log(cantidad)

    //agregando un nuevo elemento a un arreglo
    //agregando un producto al carrito de compras
    carrito.push(producto)

    //almaceno el carrito en el localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito))

    let suma = 0
    carrito.forEach(function(producto){
        
        suma =suma + Number(producto.cantidad)
        

    })
    console.log(suma)
    localStorage.setItem("cantidad",suma)
    let bolita= document.getElementById("bolita")
    bolita.textContent=suma
   

})
let bolita=localStorage.getItem("cantidad")
document.getElementById("bolita").innerHTML=bolita


