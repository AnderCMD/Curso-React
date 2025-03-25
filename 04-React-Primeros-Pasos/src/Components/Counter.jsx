// ? Importaciones
import { useState } from "react";

export default function Counter() {
    // ? Estado
    const [contador, setContador] = useState(0);

    // ? Funciones
    const incrementar = () => {
        setContador(contador + 1);
    };

    const reiniciar = () => {
        setContador(0);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    // ? Renderizado
    return (
        <div>
            <h1>Contador</h1>
            <h2>{contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}