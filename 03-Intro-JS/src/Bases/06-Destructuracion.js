// Definición de un objeto llamado 'persona' con propiedades básicas
const persona = {
	nombre: 'Ander', // Nombre de la persona
	edad: 21, // Edad de la persona
	clave: 'AnderCMD', // Clave única de la persona
};

// Desestructuración del objeto 'persona' para extraer sus propiedades
const { nombre, edad, clave } = persona;

// Imprime en consola las propiedades desestructuradas del objeto
console.log(nombre); // Imprime el nombre de la persona
console.log(edad); // Imprime la edad de la persona
console.log(clave); // Imprime la clave de la persona

// Función que recibe un objeto 'persona' y desestructura sus propiedades
const retornaPersona = (persona) => {
	// Desestructuración de las propiedades 'nombre' y 'edad' del objeto recibido
	const { nombre, edad } = persona;

	// Imprime en consola el nombre y la edad de la persona
	console.log(nombre, edad);
};

// Función que recibe un objeto 'persona' y desestructura sus propiedades directamente en los parámetros
const retornaPersona2 = ({ nombre, edad }) => {
	// Imprime en consola el nombre y la edad de la persona
	console.log(nombre, edad);
};

// Función que utiliza desestructuración con valores por defecto
const useContext = ({ nombre, edad, clave, rango = 'Ingeniero' }) => {
	// Retorna un nuevo objeto con las propiedades desestructuradas y el valor por defecto de 'rango'
	return {
		nombre: nombre, // Nombre de la persona
		edad: edad, // Edad de la persona
		clave: clave, // Clave única de la persona
		rango: rango, // Rango de la persona (por defecto 'Ingeniero')
	};
};

// Llamada a la función 'useContext' pasando el objeto 'persona'
const usuario = useContext(persona);

// Imprime en consola las propiedades 'clave' y 'rango' del objeto retornado
console.log(usuario.clave, usuario.rango); // Imprime la clave y el rango del usuario
