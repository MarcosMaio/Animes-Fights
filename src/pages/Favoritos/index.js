import React from 'react'
import styles from './Favoritos.module.css'
import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'
import Card from 'componentes/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    
    return (
        <main>
            <Banner imagem="anime-two" />
                <Titulo>
                    <h1>Meus Favoritos</h1>
                </Titulo>
            <section className={styles.container}>
            {favorito.map((favoritos) => {
                return <Card {...favoritos} key={favoritos.id} />
            })}
            </section>
                
        </main>
    )
}
