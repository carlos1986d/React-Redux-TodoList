import {createSlice} from '@reduxjs/toolkit';

export const uiSlice = createSlice({

    /* Atributos y propiedades compartidas como si fuera un objeto*/
    name: 'ui',
    initialState: {
        FormOpen: false
    },

    /* Funciones (obtener, editar, etc.) */
    reducers: {
        onAbrirForm: (state) => {
            state.FormOpen = true;
        },
    }
});

export const {onAbrirForm} = uiSlice.actions;