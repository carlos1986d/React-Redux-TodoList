import React from 'react'
import { NavBar } from '../../components/NavBar'
import { TodoForm } from '../../components/TodoForm'
import { TodoList } from '../../components/TodoList'
import { TodoDelete } from '../../components/TodoDelete'
import { useUiStore } from '../../hooks/useUiStore'

export const TodoPage = () => {

  const {FormOpen} = useUiStore();

  const eliminar = false;
  
  return (
    <>
      <NavBar />
      {
        (FormOpen) 
        ? <TodoForm />
        : (eliminar)
          ? <TodoDelete />
          : <TodoList />
      }
    </>
  )
}
