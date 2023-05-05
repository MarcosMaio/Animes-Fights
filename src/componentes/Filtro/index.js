import React, { useState } from 'react'
import videos from 'json/db.json'
import Card from 'componentes/Card'
import style from './Filtro.module.css'


export default function Filtro() {
    const [filtraMomentoEpico, setFiltraMomentoEpico] = useState(''); //Define o estado filtraMomentoEpico com um valor inicial vazio e a função setFiltraMomentoEpico que permite atualizar o estado. O estado filtraMomentoEpico será usado para armazenar o valor atual do campo de pesquisa

    const [botaoTrocaEstado, setBotaoTrocaEstado] = useState(false)  //Botão responsavel por exibir a lista com os animes quando o estado mudar para true.
    const [filtraTagAnime, setfiltraTagAnime] = useState(videos) //Estado responsavel por armazenar os animes que serão filtrados ao clicar na tag com o nome do anime desejado para exibir apenas seus cards.
    const animesTags = [...new Set(videos.map((video) => video.anime))]; //Const responsavel por pegar todos os nome de animes de videos e exibir apenas os nomes unicos.
    
    const [startId, SetStartId] = useState(1) //Estado inicial startId
    const [endId, SetEndId] = useState(30)  //Estado final do endId
    const maxId = videos.reduce((max, item) => Math.max(max, item.id), 0) //const para pegar o maior id que contem dentro do json de forma dinamica

    const exibiçãoDeAnimes = videos.filter((anime => {
        
        const videosFiltrados =  anime.titulo.toLowerCase().includes(filtraMomentoEpico.toLowerCase()); //Este código cria uma nova lista de vídeos chamada videosFiltrados usando o método filter() do JavaScript. Ele filtra os vídeos da lista videos e retorna apenas aqueles cujo título contém a string filtraMomentoEpico. Para fazer a comparação, o método toLowerCase() é usado tanto no título do vídeo quanto na string filtraMomentoEpico, convertendo ambos para minúsculas.
        const controleDeAnimesExibido = anime.id >= startId && anime.id <= endId; //Filtra o id para pegar os animes que possuem o id entre startId e EndId 
        return videosFiltrados && controleDeAnimesExibido
    }));

    function handleRangeChange(start, end) {
        SetStartId(start);
        SetEndId(end);
    }
    
    

    function filtraAnimeTag (anime) {  //função responsavel por pegar o nome clicado e comparar se existe um anime com aquele nome clicado se sim ele retorna e armazena no estado setfiltraTagAnime.
        const animes = videos.filter((videos => {
            return videos.anime === anime
        }))

        setfiltraTagAnime(animes)
    }

    function handleBlur () {
        setFiltraMomentoEpico('');
    };
    

    console.log(animesTags)

    return (

      <section className={style.body}>
        <div>
          <h3>
            Encontre seus animes preferidos
            <div
              style={{
                transform: botaoTrocaEstado
                  ? "rotate(-135deg) "
                  : "rotate(45deg)",
              }}
              onClick={() => setBotaoTrocaEstado(!botaoTrocaEstado)}
              class={style.arrowCta}
            ></div>
          </h3>

          {botaoTrocaEstado && (
            <section className={style.caixa_Container_Lista_Anime}>
              <div className={style.caixaTagTodos}>
                <span
                  onClick={() => setfiltraTagAnime(videos)}
                  className={style.tagTodos}
                >
                  Todos
                </span>
              </div>

              <div className={style.container_animeLista}>
                <ul className={style.caixaLista}>
                  {animesTags.map((anime) => (
                    <li
                      onClick={() => {
                        filtraAnimeTag(anime);
                      }}
                      className={style.animeLista}
                    >
                      {anime}
                    </li>
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
              {exibiçãoDeAnimes.map((video) => (
                <Card {...video} key={video.id} />
              ))}
              <div
                className={style.containerShowMoreButton}
                onClick={() => handleRangeChange(1, endId + 10)}
                style={{ display: endId >= maxId ? "none" : "block" }}
              >
                <button class={style.more_btn}>
                  <span class={style.more_dot}></span>
                  <span class={style.more_dot}></span>
                  <span class={style.more_dot}></span>
                </button>
              </div>
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
    );
}