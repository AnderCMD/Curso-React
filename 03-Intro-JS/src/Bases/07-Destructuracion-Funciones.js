// Este archivo demuestra el uso de desestructuración en arreglos y funciones en JavaScript.

// Sección 1: Desestructuración de un arreglo existente
// Declaración del arreglo de personajes
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Desestructuración para obtener el tercer personaje, las comas indican que se omiten los primeros dos elementos
const [, , personaje3] = personajes;

// Imprime el tercer personaje en la consola
console.log(personaje3);

// Sección 2: Función que retorna un arreglo y su desestructuración
const retornaArreglo = () => {
	// Retorna un arreglo con un string y un número
	return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

// Imprime el arreglo desestructurado en la consola
console.log(letras, numeros);

// Sección 3: Simulación de un hook useState y desestructuración del resultado
const useState = (valor) => {
	return [
		valor,
		() => {
			console.log('Hola Mundo');
		},
	];
};

const arreglo = useState('Goku');

// Desestructuración del arreglo retornado por la función useState
const [nombre, setNombre] = arreglo;

// Imprime el nombre en la consola
console.log(nombre);
