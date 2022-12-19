import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { TodoPage } from '../todo/pages/TodoPage'
import { useTodoStore } from '../hooks/useTodoStore'

export const AppRouter = () => {

  const {Authenticated} = useTodoStore();

  return (
    <Routes>
        { /* Protección de rutas en base a la autenticación */
            ( Authenticated )  
                ? <Route path="/*" element={ <TodoPage /> } />
                : <Route path="/auth/*" element={ <LoginPage /> } />
        }

        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
