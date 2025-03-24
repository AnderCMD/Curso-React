// Declaración de variables para el nombre y apellido
const nombre = 'Ander';
const apellido = 'Gonzalez';

// Uso de template string para concatenar el nombre completo
const nombreCompleto = `${nombre} ${apellido}`;

// Imprime el nombre completo en la consola
console.log(nombreCompleto);

// Función que retorna un saludo personalizado
function getSaludo(nombre) {
	return 'Hola ' + nombre; // Concatenación de texto con el nombre
}

// Llama a la función getSaludo y muestra el resultado en la consola
console.log(`Este es un texto: ${getSaludo(nombre)}`);
