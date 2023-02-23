/*
Genera un script usando el playground de TypeScript (pero configurado para JavaScript) que
pida el nombre, edad, ciudad, y estado civil de un empleado usando prompt() para ello y vete
guardando esos datos en un objeto Javascript que crearás y que se llamará Empleado.
A continuación, imprime en pantalla ese objeto usando un for-in.
 */

//Creo el objeto
let empleado = new Object();

//Pido los diferentes datos
let nombre = prompt("Introduzca el nombre");
let edad = prompt("Introduzca la edad");
let ciudad = prompt("Introduzca la ciudad");
let estadoCivil = prompt("Introduzca el estado civil");

//Asigno los datos introducidos al objeto
empleado["nombre"] = nombre;
empleado["edad"] = edad;
empleado["ciudad"] = ciudad;
empleado["estado civil"] = estadoCivil;

//Muestro en pantalla el objeto
for (let valor in empleado){
    console.log(valor + " -> " + empleado[valor]);
}