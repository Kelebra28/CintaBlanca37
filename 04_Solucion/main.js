let j1 = prompt("J1. Introduce tu opcion: piedra, papel o tijera");
let j2 = prompt("J2. Introduce tu opcion: piedra, papel o tijera");

// Aquí convertiríamos a minúsculas...
d
// Checar si es piedra, papel o tijera...
if (j1 === 'piedra' || j1 === 'papel' || j1 === 'tijera'){
    if (j2 === 'piedra' || j2 === 'papel' || j2 === 'tijera'){
      // Aquí se ejecuta mi programa principal...
      // Empate
      if (j1 === j2) {
        console.log('Empate');
      }

      else if (j1 === 'piedra') {
        if (j2 === 'papel') {
          console.log('Gana j2');
        } else if (j2 === 'tijera') {
          console.log('Gana j1')
        }
      }

      else if (j1 === 'papel') {
        if (j2 === 'piedra') {
          console.log('Gana j1');
        } else if (j2 === 'tijera') {
          console.log('Gana j2')
        }
      }

      else if (j1 === 'tijera') {
        if (j2 === 'piedra') {
          console.log('Gana j2');
        } else if (j2 === 'papel') {
          console.log('Gana j1')
        }
      }

      else console.log('Algo raro ocurrio... 🚫');
    } else console.log('J2: Debes escribir piedra, papel o tijera!!!');
} else console.log('J1: Debes escribir piedra, papel o tijera!!!');
