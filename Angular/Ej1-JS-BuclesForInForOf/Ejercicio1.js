/*
Genera un script usando el playground de TypeScript (pero configurado para JavaScript) que
pida cinco números al usuario usando un bucle for normal (usa prompt para pedir los datos y
conviértelos a valor numérico posteriormente usando parseInt(string) ). Almacena los números
introducidos por el usuario en un array. A continuación, usando un for-of y con for-in que recorra el array,
muestra un mensaje informando del resultado de multiplicar cada uno de los números por 3.
*/

let array = [];

//Pido al usuario que introduzca los 5 números y los añado a la array.

for (let i=1; i<6; i++){
    let numero = prompt("Introduce un número " + i);
    array[i] = numero;
}

//Muestro la multiplicación por 3 de cada número con un for-of
for (let numeroArray of array){
    let numeroInt = parseInt(numeroArray);
    console.log(numeroInt*3);
}

//Muestro la multiplicación por 3 de cada número con un for-in
for (let arrayIndice in array){
    let numero = parseInt(array[arrayIndice]);
    console.log(numero*3);
}