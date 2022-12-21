import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({

    /* Atributos y propiedades compartidas como si fuera un objeto */
    name: 'todo',
    initialState: {
        Authenticated: true,
        orden: "ascendente",
        todos: [
            // {
            //     nombre: "a",
            //     ubicacion: "a",
            //     estatus: false,
            //     dias: 0,
            // },
        ],
    },

    /* Funciones (obtener, editar, etc.) */
    reducers: {
        onCrearTodo: (state, {payload}) => {  
            state.todos.push(
                { 
                    nombre: payload.name, 
                    ubicacion: payload.ubi, 
                    estatus: false,
                    dias: Math.floor(Math.random() * 100)
                }
            )
        },

        onCambiarEstatus: (state, {payload}) => {
            state.todos.forEach((todo, index) => {
                if (todo.nombre.toString()==payload.nombre){
                    state.todos[index].estatus = true
                }
            })
        },        

        onCambiarOrden: (state, {payload}) => {
            state.orden=payload
            
            switch(payload){
                case 'ascendente':
                    state.todos.sort(((a, b) => b.dias - a.dias))
                break;

                case 'descendente':
                    state.todos.sort(((a, b) => a.dias - b.dias))
                break;
            }
        },

        onCambiarOrden2: (state, {payload}) => {

            state.orden=payload

            const ordenamiento = {true: 1, false: 2};

            switch(payload){
                case 'ascendente':
                    state.todos.sort(((a, b) => ordenamiento[a.estatus] - ordenamiento[b.estatus]))
                break;

                case 'descendente':
                    state.todos.sort(((a, b) => ordenamiento[b.estatus] - ordenamiento[a.estatus]))
                break;
            }
        },

        onCerrarSesion: (state) => {
            state.Authenticated = false;
        },

        onIniciarSesion: (state) => {
            state.Authenticated = true;
        },

    }
}
);

export const {

    onCerrarSesion, 
    onIniciarSesion, 
    onCrearTodo,
    onCambiarEstatus,
    onCambiarOrden,
    onCambiarOrden2,

} = todoSlice.actions;