import React, {} from 'react'
import styles from './Player.module.css'
import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import videos from 'json/db.json'

export default function Player() {
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })
        if (!video) {
            return <NaoEncontrada />
        }

    return (
    <main>
        <Banner imagem={"player"} />
        <Titulo>
            <h1>Player</h1>
        </Titulo> 
        <div className={styles.player}>
            <iframe width="1000" 
                height="600" 
                src={video.link} 
                title={video.titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </div>
    </main>

    )
}
