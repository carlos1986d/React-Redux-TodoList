import { todoSlice } from "./todo/todoSlice";
import {configureStore} from '@reduxjs/toolkit';
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        ui: uiSlice.reducer
    }
})