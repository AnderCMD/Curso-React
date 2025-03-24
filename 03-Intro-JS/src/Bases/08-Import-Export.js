
// Este archivo contiene funciones para manejar héroes y un ejemplo de su uso.
// Importa la lista de héroes desde el archivo 'Heroes'.
import { heroes } from './Data/Heroes';

// Función para obtener un héroe por su ID.
const getHeroeById = (id) => {
	return heroes.find((hero) => hero.id === id); // La función 'find' busca el primer héroe que cumpla con la condición dada (en este caso, que su ID coincida con el proporcionado).
};

// Ejemplo de uso: Imprime en consola el héroe con ID 1.
console.log(getHeroeById(1));

// Función para obtener héroes por su editorial (DC o Marvel).
const getHeroesByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner); // La función 'filter' devuelve un nuevo arreglo con todos los héroes que pertenecen a la editorial especificada.
};

// Ejemplo de uso: Imprime en consola todos los héroes de DC.
console.log(getHeroesByOwner('DC'));

// Ejemplo de uso: Imprime en consola todos los héroes de Marvel.
console.log(getHeroesByOwner('Marvel'));