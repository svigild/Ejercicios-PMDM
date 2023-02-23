/*
Genera un script usando el playground de TypeScript (pero configurado para JavaScript) que
pida cinco sueldos enteros al usuario usando un bucle for normal (usa prompt para pedir los
datos y conviértelos a valor numérico posteriormente usando parseInt(string) ). Almacena los
salarios introducidos por el usuario en un objeto donde los nombres de cada propiedad serán
“Salario 1”, “Salario 2”, …
Ahora escribe en pantalla el objeto creado. A continuación, usando un for-in que recorra el objeto, muestra un mensaje informando del
resultado de multiplicar cada uno de los salarios por 10
 */

//Creo el objeto.
var objeto = new Object();

//Pido 5 sueldos al usuario y los guardo en el objeto con el nombre "Sueldo i".
for (let i=1; i<6; i++){
    let sueldoIntroducido = prompt("Introduzca el sueldo " + i);
    let sueldoInt = parseInt(sueldoIntroducido);
    objeto["Sueldo " + i] = sueldoInt;
}

//Muestro en consola el objeto creado
console.log(objeto);

//Muestro el resultado de multiplicar cada sueldo por 10
for (let sueldo in objeto){
   let numero = parseInt(objeto[sueldo]) * 10;
   console.log(numero);
}