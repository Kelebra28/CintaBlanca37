/*
  1) Obtener elementos y guardarlos en variablesx
*/

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");

// console.log(nombre);
// console.log(edad);
// console.log(boton);

/*
  2) Crear una funcion que lea las variables
     y cambie el texto de la etique P por 
     el resultado de mi funcion
*/
function puedoConducir() {

  // 2.1) Crear funcion que lea variables
  let valorNombre = nombre.value;
  let valorEdad = edad.value;
  let texto = "NO FUNCIONA";

  // 2.2) Comprobar si puede conducir
  if (valorEdad < 18) {
    texto = 'aún no puedes obtener una licencia de conducir';
  } else if (valorEdad >= 18 && valorEdad <= 100) {
    texto = 'puedes obtener una licencia de conducir';
  } else if (valorEdad > 100) {
    texto = 'es peligroso que conduzcas';
  } else {
    texto = 'ocurrió algo extraño...'
  }

  // 2.3) Cambiar el texto del parrafo por el resultado
  parrafo.innerHTML = valorNombre + ", " + texto;
}

/*
  3) Vincular el botobn con la funcion 
     creada en el punto anterior
*/
boton.addEventListener("click", puedoConducir);