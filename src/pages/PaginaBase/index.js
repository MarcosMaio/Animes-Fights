import Cabecalho from 'componentes/Cabecalho'
import Container from 'componentes/Container'
import Rodape from 'componentes/Rodape'
import FavoritosProvider from 'contextos/Favoritos'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet /> 
                </Container>
            </FavoritosProvider>
            <Rodape /> 
        </main>
    ) //<Outlet>, componente do react-router-dom. Esse componente nos possibilita criar uma rota pai, enquanto o <Outlet> corresponde a todas as rotas filhas que serão encaixadas nessa rota.
}
