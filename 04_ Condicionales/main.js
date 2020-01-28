// alert('Descarga ya!!!!!!')

// if(condicion){
//     accion si se cumple
// }else{
//     accion si no se cumple
// }
// = dar valor
// == comparar
// === comparar identico

// let x = "10";

// if(x === 10){
//     console.log('Es el numero 10')
// }else{
//     console.log("No es el numero 10")
// };

// Preguntar al usuario un numero 1-100
// decir si es par o non
// En la consola
// 10 : es par
// 11 : es impar

// let numero = prompt("Dime un numeor de 1 -100")

// console.log(numero)
// let n = Number(numero)

// if(n % 2 === 0){
//     console.log(n + ' : Es un numero par')
// }else{
//     console.log(n + ' : Es un numero impar')
// }

// Preguntar dos numero del 1-100 y decir cual es mayor
// let a = Number(prompt('Dime un numero del 1-100'));

// let b = Number(prompt('Dime un numero del 1-100'));

// if(a > b){
//     console.log(a + " es mayor que " + b);
// }else{
//     console.log(a + " es menor que " + b);
// }

// let preguta1 = prompt("Dime un numero menor de 100")

// let numeroMenor = Number(preguta1)

// let preguta2 = prompt("Dime un numero mayor de 100")

// let numeroMayor = Number(preguta2)

// if(numeroMenor < 100){
//     console.log(numeroMenor + " Es menor que 100");
// }else if(numeroMayor > 100){
//     console.log (numeroMayor + " es mayor que 100");
// }else{
//     console.log("No es un numero");
// }

//operadores logicos
// &&    ||
// let pregutaEdad = prompt("Ingresa tu edad")
// let edad = Number(pregutaEdad)

// if(edad >= 18 && edad <= 70){
//     console.log("Puedes conducir");
// }else if(edad === 16 || edad === 17){
//     console.log("Puedes sacar tu permiso");
// }else if(edad < 16 || edad >70){
//     console.log("No puedes conducir");
// }else{
//     console.log("Ocurrio un erro");
// }

//Challenge Piedra pael o Tijera--------->

let player1 = prompt("Elige: Piedra, Papel o Tijera").toLocaleLowerCase();

//  console.warn(player1);

let player2 = prompt("Elige: Piedra, Papel o Tijera").toLocaleLowerCase();

if(player1 === player2){
    console.log("Es empate");
}else if(player1 === "tijera" && player2 === "papel"){
    console.log("Gana player 1, tijera gana a papel");
}else if (player1 === "papel" && player2 === "piedra"){
    console.log("Gana player 1, papel, gana a piedra");
}else if(player1 === "piedra" && player2 === "tijera" ){
    console.log("Gana player 1, pidra gana a tijera");
}if(player2 === "tijera" && player1 === "papel"){
    console.log("Gana player 2, tijera gana a papel");
}else if (player2 === "papel" && player1 === "piedra"){
    console.log("Gana player 2, papel, gana a piedra");
}else if(player2 === "piedra" && player1 === "tijera" ){
    console.log("Gana player 2, pidra gana a tijera");
}else{
    console.error("Ocurrio un error");
}