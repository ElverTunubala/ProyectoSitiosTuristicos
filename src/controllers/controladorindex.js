
//etradas==variables
let nombre="juan"
let numero= 5
let numeros=[1,2,3,4]
let poli={
    nombre:"luis",
    poder :"dinero",
    eda : 64
}
//controlando etiquetas
//1.nesecito almacenar la etiqueta en una variable
let titulo=document.getElementById("titulo")
let imagen=document.getElementById("foto")
let titulo2= document.getElementById('titulo2')
let boton=document.getElementById("button")
console.log(titulo)

//2.identifico que quiero controlar





// notas : https://animate.style/ (animaciones)     https://placeimg.com/ (un banco de imagenes)  https://cssgradient.io/ (para fondos degrados)

//3 MODIFICANDO ESTILOS
//3.1 Agregando una clase

titulo.classList.add('text-danger','fuente2')
//3.2 quitando clase
titulo2.classList.remove('text-info')
titulo2.classList.add('text-danger')

//4 escuchando eventos
boton.addEventListener("click",function(){
    //2.1 cambiando el texto
    titulo.textContent="chao"
    //2.2 cambiando la fuente src
    imagen.src="https://placeimg.com/640/480/any"

})


