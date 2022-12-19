import { useDispatch, useSelector } from "react-redux"
import { onAbrirForm } from "../store/ui/uiSlice";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        FormOpen
    } = useSelector(state => state.ui);

    const abrirForm = () => {
        dispatch(onAbrirForm())
    }

    return {
        /* Propiedades */
        FormOpen,

        /* Métodos */
        abrirForm,
    }
}