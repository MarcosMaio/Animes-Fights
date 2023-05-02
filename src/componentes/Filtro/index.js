import React, { useState } from 'react'
import videos from 'json/db.json'
import Card from 'componentes/Card'
import style from './Filtro.module.css'


export default function Filtro() {
    const [filtraMomentoEpico, setFiltraMomentoEpico] = useState(''); //Define o estado filtraMomentoEpico com um valor inicial vazio e a função setFiltraMomentoEpico que permite atualizar o estado. O estado filtraMomentoEpico será usado para armazenar o valor atual do campo de pesquisa
    const videosFiltrados = videos.filter((video) => video.titulo.toLowerCase().includes(filtraMomentoEpico.toLowerCase() //Este código cria uma nova lista de vídeos chamada videosFiltrados usando o método filter() do JavaScript. Ele filtra os vídeos da lista videos e retorna apenas aqueles cujo título contém a string filtraMomentoEpico. Para fazer a comparação, o método toLowerCase() é usado tanto no título do vídeo quanto na string filtraMomentoEpico, convertendo ambos para minúsculas.
));

    const [botaoTrocaEstado, setBotaoTrocaEstado] = useState(false)  //Botão responsavel por exibir a lista com os animes quando o estado mudar para true.

    const [filtraTagAnime, setfiltraTagAnime] = useState(videos) //Estado responsavel por armazenar os animes que serão filtrados ao clicar na tag com o nome do anime desejado para exibir apenas seus cards.
    
    const animesTags = [...new Set(videos.map((video) => video.anime))]; //Const responsavel por pegar todos os nome de animes de videos e exibir apenas os nomes unicos.

    
    function filtraAnimeTag (anime) {  //função responsavel por pegar o nome clicado e comparar se existe um anime com aquele nome clicado se sim ele retorna e armazena no estado setfiltraTagAnime.
        const animes = videos.filter((videos => {
            return videos.anime === anime
        }))

        setfiltraTagAnime(animes)
    }

    function handleBlur () {
        setFiltraMomentoEpico('');
    };


    return (
            <section className={style.body}>
                    <div>
                        <h3>Encontre seus animes preferidos 
                        <div style={{ transform: botaoTrocaEstado ? "rotate(-135deg) " : "rotate(45deg)" }}
                            onClick={() => 
                            setBotaoTrocaEstado(!botaoTrocaEstado)} 
                            class={style.arrowCta}>
                        </div>
                        
                        </h3>
                            {botaoTrocaEstado && (
                                <section className={style.caixa_Container_Lista_Anime}>
                                    <div className={style.caixaTagTodos}>
                                        <span onClick={()=> setfiltraTagAnime(videos)} className={style.tagTodos}>Todos</span>
                                    </div>
                                    
                                    <div className={style.container_animeLista}>
                                        <ul className={style.caixaLista}>
                                            {animesTags.map((anime) => (
                                                    <li onClick={() => {filtraAnimeTag(anime)}} className={style.animeLista}
                                                    >{anime}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                            
                            )}
                        </div>
                        
                            {!botaoTrocaEstado && (
                            <>
                                <div className={style.inputBox}>
                                    <input
                                        type="text"
                                        value={filtraMomentoEpico}
                                        onChange={(event) => setFiltraMomentoEpico(event.target.value)}
                                        onBlur={() => handleBlur()}
                                    />
                                    <span>Procure seu momento épico!</span>
                                    <i></i>
                                </div>

                                    <section className={style.containerCardsAnimes}> 
                                        {videosFiltrados.map((video) => (
                                            <Card {...video} key={video.id} />
                                        ))}
                                    </section>
                                    </>
                            )}

                    {botaoTrocaEstado && (
                        <section className={style.containerCardsAnimes}>
                        {filtraTagAnime.map((video) => (
                            <Card {...video} key={video.id} />
                                                        ))}
                        </section>
                    )}

                </section>
    )
}

//Por fim, a lista de vídeos filtrados é exibida na tela com o auxílio do método map(), que itera por todos os vídeos da lista videosFiltrados e exibe cada um deles usando um componente Card.
/* <section className={style.containerCardsAnimes}> 
                            {videosFiltrados.map((video) => (
                                <Card {...video} key={video.id} />
                            ))}
                        </section>
            */