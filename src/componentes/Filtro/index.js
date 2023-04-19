import React, { useState } from 'react'
import videos from 'json/db.json'
import Card from 'componentes/Card'
import style from './Filtro.module.css'
import iconeAnime from './icone-anime.png'

export default function Filtro() {
    const [filtraItem, setFiltraItem] = useState(''); //Define o estado filtraItem com um valor inicial vazio e a função setFiltraItem que permite atualizar o estado. O estado filtraItem será usado para armazenar o valor atual do campo de pesquisa
    const videosFiltrados = videos.filter((video) => video.anime.toLowerCase().includes(filtraItem.toLowerCase() //Este código cria uma nova lista de vídeos chamada videosFiltrados usando o método filter() do JavaScript. Ele filtra os vídeos da lista videos e retorna apenas aqueles cujo título contém a string filtraItem. Para fazer a comparação, o método toLowerCase() é usado tanto no título do vídeo quanto na string filtraItem, convertendo ambos para minúsculas.
    ));

    function handleBlur () {
        setFiltraItem('');
    };
    
    return (
    
        <section className={style.body}>
            <div className={style.inputBox}>
                <h3>Encontre seus animes preferidos <img className={style.imgIcone} src={iconeAnime} alt=''/></h3>
                <input
                    type='text'
                    value={filtraItem}
                    onChange={(event) => 
                    setFiltraItem(event.target.value)} //Este código cria um elemento <input> do HTML. Ele exibe o valor atual de filtraItem no campo de pesquisa, e permite que o usuário insira um novo valor. Quando o usuário digita algo no campo, o evento onChange é acionado, que chama a função setFiltraItem() para atualizar o valor de filtraItem com o novo valor digitado.
                    onBlur={() => {
                        handleBlur()
                    }}
                />
                
                <span>Procure seu momento epico !
                </span>
                <i></i>
            </div>
                <section className={style.container}> 
                    {videosFiltrados.map((video) => <Card {...video} key={video.id} 
            
                    />)}
                    
                </section>
                
        </section>
            
    )
}

//Por fim, a lista de vídeos filtrados é exibida na tela com o auxílio do método map(), que itera por todos os vídeos da lista videosFiltrados e exibe cada um deles usando um componente Card.
