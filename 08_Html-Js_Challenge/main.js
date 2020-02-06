//Inputs
let inNombre = document.getElementById('inNombre');
let inTel = document.getElementById('inTel');
let inPizza = document.getElementById('inPizza');
let inDirec = document.getElementById('inDirec');
// etiquedas p
let nombre = document.getElementById('nombre');
let telefono = document.getElementById('telefono');
let pizza = document.getElementById('pizza');
let direccion = document.getElementById('direccion');
//boton
let boton = document.getElementById('boton');


function enviarPedido (){

    let valorNombre = inNombre.value
    let valorTelefono = inTel.value
    let valorPizza = inPizza.value
    let valorDireccion = inDirec.value

    nombre.innerHTML = valorNombre
    telefono.innerHTML = valorTelefono
    pizza.innerHTML = valorPizza
    direccion.innerHTML = valorDireccion

}

boton.addEventListener('click',enviarPedido)