import { configureStore } from '@reduxjs/toolkit';
import { contadorSlice } from './Slices/Contador/ContadorSlice';

export const store = configureStore({
	reducer: {
		contador: contadorSlice.reducer,
	},
});
