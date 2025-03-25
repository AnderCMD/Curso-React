import { createSlice } from '@reduxjs/toolkit';

export const contadorSlice = createSlice({
	name: 'contador',
	initialState: {
		contador: 0,
	},
	reducers: {
		incrementar: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes.
			// Also, no return statement is required from these functions.
			state.contador += 1;
		},
		decrementar: (state) => {
			state.contador -= 1;
		},
		resetear: (state) => {
			state.contador = 0;
		},
	},
});

// Action creators are generated for each case reducer function
export const { incrementar, decrementar, resetear } = contadorSlice.actions;
