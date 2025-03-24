// Este archivo demuestra el uso de desestructuración de arreglos en JavaScript.

// Declaración del arreglo de personajes
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Desestructuración para obtener el tercer personaje, las comas indican que se omiten los primeros dos elementos
const [, , personaje3] = personajes;

// Imprime el tercer personaje en la consola
console.log(personaje3);

const retornaArreglo = () => {
	// Retorna un arreglo con un string y un número
	return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

// Imprime el arreglo desestructurado en la consola
console.log(letras, numeros);

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
