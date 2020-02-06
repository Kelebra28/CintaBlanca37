
let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
let texto = document.getElementById('texto');
let textoInput = document.getElementById('textoInput');
let boton = document.getElementById('boton');



// console.log(titulo);
// console.log(parrafo);
// console.log(boton);

// titulo.innerHTML = "Cambie el titulo"
// parrafo.innerHTML = 'Soy el parrafo'

function cambiar (){

titulo.innerHTML = "Cambie el titulo"
parrafo.innerHTML = 'Soy el parrafo'

let valorInput = texto.value
textoInput.innerHTML = valorInput

}

boton.addEventListener('',cambiar)
