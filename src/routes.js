import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Favoritos from 'pages/Favoritos'
import Player from 'pages/Player'
import NaoEncontrada from 'pages/NaoEncontrada'
import PaginaBase from 'pages/PaginaBase'

export default function routes() {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<PaginaBase />}>
                            <Route index  element={<Inicio/>}></Route>
                            <Route path='favoritos' element={<Favoritos />}></Route>
                            <Route path=':id' element={<Player />}></Route>
                            <Route path='*' element={<NaoEncontrada />}></Route>
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}
