/*
  Ciclos FOR

  Crea un arreglo que contenga los siguientes platillos:
    1) Enchiladas
    2) Taco
    3) Tamal
    4) Pozole
    5) Barbacoa
    6) Picada
*/

let platillos = [
  "Enchiladas",   // 0
  "Taco",         // 1
  "Tamal",        // 2
  "Pozole",       // 3
  "Barbacoa",     // 4
  "Picada",       // 5
];

/*
  Mediante un ciclo FOR, muestra todos los platillos 
  (recuerda la propiedad length)
*/

// for (let i=0; i < platillos.length; i++) {
//   console.log(platillos[i]);
// }

/*
  Mediante ciclo FOR y condicional IF, muestra solo el pozole y la barbacoa.
*/

// for (let i=0; i < platillos.length; i++) {
//   let platillo = platillos[i];  
//   if (platillo === 'Pozole' || platillo === 'Barbacoa' ) {
//     console.log(platillo);
//   }
// }

// Otra solución...
// for (let i=0; i < platillos.length; i++) {
//   let platillo = platillos[i];  
//   if (i > 2 ) {
//     if (i < 5) {
//       console.log(platillo);
//     }
//   }
// }

/*
  Mediante ciclo FOR y condicional IF, muestra solo los elementos impares.
*/

for (let i=0; i < platillos.length; i++) {
  let platillo = platillos[i];  
  if (i%2 === 1){
    console.log(platillo);
  }
}

/*
  Mediante únicamente un ciclo FOR, muestra los elementos que sean pares.
*/

for (let i=0; i < platillos.length; i+=2) {
  let platillo = platillos[i];  
  console.log(platillo);
}
