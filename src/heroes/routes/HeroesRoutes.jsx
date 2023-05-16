import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui'
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../pages'


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            <Route path='/' element={<Navigate to="/marvel"/>} />
        </Routes>
    </>
  )
}
