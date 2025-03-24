// Declaración de un arreglo inicial con números del 1 al 5
const arreglo = [1, 2, 3, 4, 5];

// Creación de un nuevo arreglo copiando los elementos del arreglo original y añadiendo un nuevo elemento (6)
let arreglo2 = [...arreglo, 6];

// Creación de un tercer arreglo aplicando una transformación (multiplicación por 2) a cada elemento del segundo arreglo
const arreglo3 = arreglo2.map(function (numero) {
	return numero * 2;
});

// Impresión de los arreglos en la consola para verificar los resultados
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
