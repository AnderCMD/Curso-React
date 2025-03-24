// Función principal para obtener una imagen aleatoria desde la API de Giphy
const getImagen = () => {
    const apiKey = import.meta.env.VITE_API_KEY_GIPHY;

    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then((respuesta) => {
            if (!respuesta.ok) throw new Error('No se pudo realizar la peticion');
            return respuesta.json();
        })
        .then(({ data }) => {
            const { url } = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
        .catch((error) => {
            console.error(error);
        });
}

getImagen();