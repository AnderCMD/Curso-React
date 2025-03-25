import { useDispatch, useSelector } from 'react-redux';
import { decrementar, incrementar, resetear } from './Store/Slices/Contador/ContadorSlice'; // Importar la acción increment del slice de Redux

export default function App() {
	const { contador } = useSelector((state) => state.contador); // Acceder a la propiedad counter del estado global de Redux
	const dispatch = useDispatch(); // Hook para despachar acciones a Redux

	return (
		<section>
			<h1>Contador: {contador}</h1>
			<div className='card'>
				<button onClick={() => dispatch(incrementar())}>Incrementar</button>
				<button onClick={() => dispatch(decrementar())}>Decrementar</button>
				<button onClick={() => dispatch(resetear())}>Resetear</button>
			</div>
		</section>
	);
}
