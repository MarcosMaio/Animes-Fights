import React, {} from 'react'
import Banner from '../../componentes/Banner';
import Titulo from '../../componentes/Titulo';
import Filtro from 'componentes/Filtro';
import Scroll from 'componentes/Scroll';


export default function Inicio() {
    return (
        <main>
            <section>
                <Banner imagem="anime-two" />
                <Titulo>
                    <h1>Um lugar para rever os momentos mais epicos dos animes!</h1>
                </Titulo>
                <Filtro/>
                <Scroll showBelow={600} />
            </section>
        </main>
    )
}
