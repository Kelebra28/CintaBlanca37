// ¿Cómo imprimo los números del 1 al 5?

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// if () {}

/*
  1) iterador o variable de control
  2) condición de iteración
  3) cómo afectar al iterador tras ciclo(iteracion)
*/

// for (let i=1; i>1; i++) {
//   console.log('¡Hola Mundo!');
//   console.log(i);
// }

/*
  Ejercicio 1)
  Empleando un ciclo FOR
  muestra en consola los numeros pares del 0 al 100
*/

// i = i + numero
// i += numero
// for (let i=0; i<=100; i+=2) {
//   console.log(i);
// }

/*
  Ejercicio 2)
  Empleando un ciclo FOR y un IF
  muestra en consola los numeros impares del 0 al 100
*/

// for (let i=0; i<=100; i++) {
//   if (i%2===1){
//     console.log(i);
//   } 
// }

/* 
  Arreglos
*/

let numero = 10; // number
let texto = "hola"; // string
let booleano = false; // boolean

// tipo de dato ARREGLO
let lista = [1, 2, 3, 4, 5];

let arreglo = [
  1,                // 0
  "texto",          // 1
  true,             // 2
  "otro texto...",  // 3
  5,                // 4
  [1,2,3]           // 5
];

// console.log(arreglo);
// console.log(arreglo[2]);
// console.log(arreglo[2][1]);

let animales = [
  "Gato",
  "Hamster",
  "Gato egipcio",
  "Dragon"
];

// console.log(animales[0]);
// console.log(animales[1]);
// console.log(animales[2]);
// console.log(animales[3]);
// console.log(animales[4]);

for (let i=0; i<animales.length; i++) {
  console.log(animales[i]);
}
