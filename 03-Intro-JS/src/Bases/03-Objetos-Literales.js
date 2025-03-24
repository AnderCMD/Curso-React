const persona = {
    nombre: 'Ander',
    apellido: 'Gonzalez',
    edad: 21,
    profesion: {
        nombre: 'Ingeniero en Software',
        experiencia: 2,
        lenguajes: ['JavaScript', 'TypeScript', 'Python', 'C#']
    }
}

// Desestructuración de objetos
const { nombre, apellido, edad, profesion } = persona;
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Soy ${profesion.nombre} y tengo ${profesion.experiencia} años de experiencia`);

// Desestructuración de arrays
const { lenguajes } = profesion;
const [lenguaje1, lenguaje2, lenguaje3] = lenguajes;
console.log(`Los lenguajes que manejo son: ${lenguaje1}, ${lenguaje2} y ${lenguaje3}`);

// El uso de "..." es para evitar la mutación del objeto (La mutación es el cambio de un objeto o array)
// Clonación de objetos
const persona2 = { ...persona };
console.log(`Persona 2 su nombre es: ${persona2.nombre}`);

// Tabla de datos para mostrar en consola
console.table(persona);

// Mostrar en consola
console.log(persona);