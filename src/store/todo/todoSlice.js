import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({

    /* Atributos y propiedades compartidas como si fuera un objeto*/
    name: 'todo',
    initialState: {
        Authenticated: false,
        nombre: "",
        ubicacion:"",
    },

    /* Funciones (obtener, editar, etc.) */
    reducers: {
        onCerrarSesion: (state) => {
            state.Authenticated = false;
        },

        onIniciarSesion: (state) => {
            state.Authenticated = true;
        },

        onChangeNombre: (state, {payload}) => {
            state.nombre = payload
        },

        onChangeUbicacion: (state, {payload}) => {
            state.ubicacion = payload
        }
    }
});

export const {onCerrarSesion, onIniciarSesion, onChangeNombre, onChangeUbicacion} = todoSlice.actions;