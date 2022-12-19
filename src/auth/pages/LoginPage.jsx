import React from 'react'
import { useTodoStore } from '../../hooks/useTodoStore';

export const LoginPage = () => {

  const {Authenticated, iniciarSesion} = useTodoStore();

  const onIniciarSesion = () => {
    iniciarSesion();
    console.log(Authenticated)
  }

  return (
    <button
          type="button"
          onClick={onIniciarSesion}
          className="border border-indigo-500 bg-indigo-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Iniciar Sesión
        </button>
  )
}
