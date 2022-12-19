import React from 'react'

export const TodoDelete = () => {

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
            <div className="flex flex-col text-sm rounded-md">
                <h2>¿Deseas eliminar la Lista seleccionada?</h2>
            </div>
            <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" 
            type="submit">Eliminar</button>
            <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" 
            type="submit">Cancelar</button>
        </div>
    </div>
  )
}
