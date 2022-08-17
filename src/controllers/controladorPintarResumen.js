
export function pintarResumenCompra(fotoURL,nombremensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto,subtotal){
    
    //crear una referencia para almacenar el contenedor
    let contenedor=document.getElementById("contenedor")

    //limpiar el contenedor
    // contenedor.innerHTML=""

    let fila=document.createElement("div")
    fila.classList.add("row")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-6")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=fotoURL

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center")
    nombre.textContent=nombremensaje

    let boton=document.createElement("a")
    boton.classList.add("btn","btn-primary","w-50","d-block","mx-auto")
    boton.textContent="Ir a la tienda"
    boton.setAttribute("href","../../index.html")

    let precio=document.createElement("h3")
    precio.textContent="percio UND"+precioProducto

    let cantidad=document.createElement("h3")
    cantidad.textContent=cantidadProducto

    let subtotalEtiqueta=document.createElement("h4")
    subtotalEtiqueta.textContent=subtotal

    //padres e hijos
    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    if(banderaBoton==true){
        columna2.appendChild(boton)
    }
    if(banderaPrecio==true){
        columna2.appendChild(precio)
    }
    if(banderaCantidad==true){
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotalEtiqueta)
    }
    fila.appendChild(columna1)
    fila.appendChild(columna2)

    contenedor.appendChild(fila)

}