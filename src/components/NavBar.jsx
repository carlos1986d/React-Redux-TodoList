import React from 'react'
import { useTodoStore } from '../hooks/useTodoStore'
import obtenerNombre from '../pokeApi/obtenerNombre';
import obtenerUbicacion from '../pokeApi/obtenerUbicacion';

export const NavBar = () => {

  const {cerrarSesion, crearTodo, cambiarOrden, orden, todos} = useTodoStore();

  const onCerrarSesion = () => {
    cerrarSesion();
  }

  async function onCrearTodo(){
    const nPokemon = {
      name: await obtenerNombre(),
      ubi: await obtenerUbicacion(),
    }
    
    crearTodo(nPokemon)
  }

  const onCambiarOrdennn = () => {

      switch(orden){
          case 'ascendente':
            cambiarOrden("descendente");
          break;

          case 'descendente':
            cambiarOrden("ascendente");
          break;
      }
  }

  return (
      <div className="flex items-center justify-between border-b bg-blue-400"
      >
        <button
          type="button"
          onClick={onCrearTodo}
          className="border border-indigo-500 bg-indigo-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Crear nueva
        </button>

        <button
          type="button"
          onClick={onCambiarOrdennn}
          className="border border-indigo-500 bg-indigo-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Orden por Día: {(orden=="ascendente") ? 'ascendente' : 'descendente' }
        </button>

        <h3 className="text-white text-2xl font-bold ml-3">Mis Lista</h3>

        <button
          type="button"
          onClick={onCerrarSesion}
          className="border border-indigo-500 bg-indigo-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Cerrar Sesión
        </button>
      </div>
  )
}
