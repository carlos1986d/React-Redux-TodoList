import React from 'react'
import { NavBar } from '../../components/NavBar'
import { TodoList } from '../../components/TodoList'
import { useTodoStore } from '../../hooks/useTodoStore'

export const TodoPage = () => {

  const {todos, orden} = useTodoStore();

  console.log(orden)
  
  return (
    <>
      <NavBar />
      {

        

        todos.map((id)=> {

          return (
            <li key={id.nombre.toString()}>
              <TodoList 
                nombre={id.nombre.toString()} 
                ubicacion={id.ubicacion.toString()}
                estatus={id.estatus}      
                dias={id.dias}        
              />
            </li>
          )
        })
      }
    </>
  )
}
