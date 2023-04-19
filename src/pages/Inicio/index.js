import React, {} from 'react'
import Banner from '../../componentes/Banner';
import Titulo from '../../componentes/Titulo';
import Filtro from 'componentes/Filtro';


export default function Inicio() {
    return (
        <main>
            <section>
                <Banner imagem="anime-two" />
                <Titulo>
                    <h1>Um lugar para rever os momentos mais epicos dos animes!</h1>
                </Titulo>
                <Filtro/>
            </section>
        </main>
    )
}
