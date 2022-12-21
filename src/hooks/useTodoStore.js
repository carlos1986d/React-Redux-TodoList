import { useDispatch, useSelector } from "react-redux"

import { 
    onCerrarSesion, 
    onIniciarSesion, 
    onCrearTodo,
    onCambiarEstatus,
    onCambiarOrden,

} from "../store/todo/todoSlice";

export const useTodoStore = () => {

    const dispatch = useDispatch();

    const {
        Authenticated, todos, orden
    } = useSelector(state => state.todo);

    const crearTodo = (nPokemon) => {
        dispatch(onCrearTodo(nPokemon))
    }

    const cerrarSesion = () => {
        dispatch(onCerrarSesion())
    }

    const cambiarOrden = (nOrden) => {
        dispatch(onCambiarOrden(nOrden))
    }

    const iniciarSesion = () => {
        dispatch(onIniciarSesion())
    }

    const cambiarEstatus = (pokemon) => {
        dispatch(onCambiarEstatus(pokemon))
    }


    return {
        /* Propiedades */
        Authenticated,
        todos,
        orden,

        /* Métodos */
        cerrarSesion,
        iniciarSesion,
        crearTodo,
        cambiarEstatus,
        cambiarOrden,
    }
}