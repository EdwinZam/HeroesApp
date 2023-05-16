import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { Navbar } from '../ui'
import { PrivateRouter } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <div className='container'>
        <Routes>

          <Route path='/login' element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }/>
            
         {/*  <Route path='login' element={<LoginPage />} /> */}

          <Route path="/*" element ={
            <PrivateRouter>
              <HeroesRoutes />  
            </PrivateRouter>
          } />


        {/*   <Route path='/*' element={<HeroesRoutes />} /> */}
            
        </Routes>
        </div>
    </>
  )
}
