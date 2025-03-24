// Declaración de variables y constantes
const nombre = 'Ander'; // Constante que almacena el nombre
const apellido = 'Gonzalez'; // Constante que almacena el apellido

let valorDado = 5; // Variable que puede cambiar su valor
valorDado = 4; // Se reasigna un nuevo valor a la variable

// Imprime las variables en la consola
console.log(nombre, apellido, valorDado);

// Nota: No se recomienda usar 'var' para declarar variables debido a problemas de alcance

if (true) {
	// Declaración de una nueva constante dentro de un bloque
	const nombre = 'Peter'; // Esta constante solo existe dentro de este bloque
	console.log(nombre); // Imprime el valor de la constante dentro del bloque
}

// Imprime el valor de la variable fuera del bloque
console.log(valorDado);
