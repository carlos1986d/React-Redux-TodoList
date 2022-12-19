import React from 'react'
import { useTodoStore } from '../hooks/useTodoStore'
import obtenerNombre from '../pokeApi/obtenerNombre';
import { useState } from 'react';
import obtenerUbicacion from '../pokeApi/obtenerUbicacion';

export const NavBar = () => {

  const {Authenticated, cerrarSesion, changeNombre, changeUbicacion} = useTodoStore();

  const onCerrarSesion = () => {
    cerrarSesion();
    console.log(Authenticated)
  }

  async function onChangeNombre (){
    changeNombre(await obtenerNombre());
    changeUbicacion(await obtenerUbicacion());
  }

  const [nPokemon, setNPokemon] = useState('');

    async function ejec(){
        setNPokemon(await obtenerNombre(10)) 
        console.log(nPokemon)
    }

  return (
      <div className="flex items-center justify-between border-b bg-blue-400"
      >
        <button
          type="button"
          onClick={onChangeNombre}
          className="border border-indigo-500 bg-indigo-800 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Crear nueva
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
