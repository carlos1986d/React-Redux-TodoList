import React from 'react'
import { useTodoStore } from '../hooks/useTodoStore'

export const TodoList = (pokemon) => {

    /* TODO: En lugar de recibir el pokemon, tomarlo del Store */
    
    const { cambiarEstatus} = useTodoStore();


    const onChangeEstatus = () => {
        cambiarEstatus(pokemon)
    }

  return (
    <div className='ml-10'>
        <ol className='mt-8'>
            <li className="border-l-2 border-purple-600">
                <div className="md:flex flex-start">
                    <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                        </svg>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                        <div className="flex justify-between mb-4">
                        <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Capturar pokemón: {pokemon.nombre}</a>
                        <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Tiempo resptante: {pokemon.dias} días</a>
                        </div>
                        <p className="text-gray-700 mb-6">Ha sido visto por última vez en: {pokemon.ubicacion}, debe ser capturado lo antes posible</p>
                            <div className="">
                                <button 
                                    className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                                    onClick={onChangeEstatus}>
                                    <div className={` ${pokemon.estatus ? 'w-full' : 'w-3'} absolute inset-0 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                                    <span className="relative text-black group-hover:text-white">{
                                        (pokemon.estatus) ? 'Completa' : 'Pendiente'
                                    }</span>
                                </button>
                            </div>
                    </div>
                </div>
            </li>
        </ol>
    </div>
  )
}
