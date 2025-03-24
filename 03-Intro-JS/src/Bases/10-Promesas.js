// Importaciones
import { getHeroeById } from './08-Import-Export'

// ? resolve: Es una función que se ejecuta cuando la promesa se resuelve
// ? reject: Es una función que se ejecuta cuando la promesa se rechaza
// ? Promise: Es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante

// Ejemplo de una promesa
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // ? setTimeout: Es una función que ejecuta un bloque de código después de un tiempo determinado
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
};

// ? then: Es un método que se ejecuta cuando la promesa se resuelve
// ? catch: Es un método que se ejecuta cuando la promesa se rechaza
// ? finally: Es un método que se ejecuta cuando la promesa se resuelve o se rechaza

// Ejemplo de uso de la promesa
getHeroeByIdAsync(1)
    .then((heroe) => {
        console.log('Héroe: ', heroe);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Proceso finalizado');
    });
