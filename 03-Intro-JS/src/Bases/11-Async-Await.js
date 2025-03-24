// Función principal para obtener una imagen aleatoria desde la API de Giphy
const getImagen = async () => {
	try {
		// Obtención de la clave de API desde las variables de entorno
		const apiKey = import.meta.env.VITE_API_KEY_GIPHY;

		// Realiza la solicitud a la API de Giphy
		const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

		// Verifica si la respuesta es válida
		if (!respuesta.ok) throw new Error('No se pudo realizar la peticion');

		// Extrae los datos necesarios de la respuesta
		const { data } = await respuesta.json();
		const { url } = data.images.original;

		// Crea un elemento de imagen y lo agrega al DOM
		const img = document.createElement('img');
		img.src = url;
		document.body.append(img);
	} catch (error) {
		// Manejo de errores en caso de que falle la solicitud
		console.error(error);
	}
};

// Llama a la función para ejecutar el flujo
getImagen();
