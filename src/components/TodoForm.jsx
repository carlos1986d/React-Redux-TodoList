import React from 'react'

export const TodoForm = () => {

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
            <div className="flex flex-col text-sm rounded-md">
                <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " 
                type="text" 
                placeholder="Título Principal" />
                <input className=" w-[25rem] h-[6rem] mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " 
                type="text" 
                placeholder="Descripción de la tarea" />
            </div>
            <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" 
            type="submit">Guardar</button>
        </div>
    </div>
  )
}
