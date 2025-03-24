// Función declarativa: se define con la palabra clave 'function' y tiene un nombre.
function saludar1(nombre) {
	return `Hola ${nombre}`;
}

console.log(saludar1('Ander'));

// Función anónima asignada a una constante: no tiene nombre y se asigna a una variable.
const saludar2 = function (nombre) {
	return `Hola ${nombre}`;
};

console.log(saludar2('Ander'));

// Función flecha (arrow function): una forma más concisa de escribir funciones.
const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar3('Ander'));

// Función flecha con cuerpo de bloque: se usa cuando hay más de una línea de código en el cuerpo.
const saludar4 = (nombre) => {
	return `Hola ${nombre}`;
};

console.log(saludar4('Ander'));
