import { useDispatch, useSelector } from "react-redux"
import { onCerrarSesion, onIniciarSesion, onChangeNombre, onChangeUbicacion} from "../store/todo/todoSlice";

export const useTodoStore = () => {

    const dispatch = useDispatch();

    const {
        Authenticated, nombre, ubicacion
    } = useSelector(state => state.todo);

    const cerrarSesion = () => {
        dispatch(onCerrarSesion())
    }

    const iniciarSesion = () => {
        dispatch(onIniciarSesion())
    }

    const changeNombre = (nuevoNombre) => {
        dispatch(onChangeNombre(nuevoNombre))
    }

    const changeUbicacion = (nuevaUbicacion) => {
        dispatch(onChangeUbicacion(nuevaUbicacion))
    }

    return {
        /* Propiedades */
        Authenticated,
        nombre,
        ubicacion,

        /* Métodos */
        cerrarSesion,
        iniciarSesion,
        changeNombre,
        changeUbicacion,
    }
}