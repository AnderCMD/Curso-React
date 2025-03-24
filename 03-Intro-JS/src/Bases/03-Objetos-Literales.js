// Definición de un objeto literal con propiedades anidadas
const persona = {
	nombre: 'Ander',
	apellido: 'Gonzalez',
	edad: 21,
	profesion: {
		nombre: 'Ingeniero en Software',
		experiencia: 2,
		lenguajes: ['JavaScript', 'TypeScript', 'Python', 'C#'], // Array de lenguajes
	},
};

// Desestructuración de objetos para extraer propiedades de manera más sencilla
const { nombre, apellido, edad, profesion } = persona;
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Soy ${profesion.nombre} y tengo ${profesion.experiencia} años de experiencia`);

// Desestructuración de arrays para obtener elementos específicos
const { lenguajes } = profesion;
const [lenguaje1, lenguaje2, lenguaje3] = lenguajes;
console.log(`Los lenguajes que manejo son: ${lenguaje1}, ${lenguaje2} y ${lenguaje3}`);

// Uso del operador spread (...) para clonar objetos y evitar mutaciones
const persona2 = { ...persona }; // Clonación del objeto persona
console.log(`Persona 2 su nombre es: ${persona2.nombre}`);

// Mostrar el objeto en formato de tabla en la consola
console.table(persona);

// Mostrar el objeto completo en la consola
console.log(persona);
