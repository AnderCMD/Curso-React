// ? Importaciones
import PropTypes from 'prop-types'; // Librería para definir tipos de datos (Se tiene que instalar)

export default function PropTypesComponent({ nombre, titulo }) {
	return (
		<div>
			<h1>Hola {nombre}</h1>
			<h2>{titulo}</h2>
		</div>
	);
}

// ? PropTypes (Sirve para definir el tipo de dato que se espera recibir)
PropTypesComponent.propTypes = {
	nombre: PropTypes.string.isRequired,
	titulo: PropTypes.string,
};
