import React, { useState } from 'react'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { useFavoritoContext } from 'contextos/Favoritos'
import { Link } from 'react-router-dom'


export default function Card({id, titulo, capa, anime, imagem, personagem}) {
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    const [isHovered, setIsHovered] = useState(false);
    const [imageType, setImageType] = useState('imagem'); // estado para controlar qual imagem deve ser exibida
    const [isBorderHidden, setIsBorderHidden] = useState(false); // Define se a borda da imagem está oculta
    
    function handleHoverBorder() {
        setIsBorderHidden(true); // quando o mouse estiver em cima da div, oculta a borda da imagem
      }
    
      function handleMouseLeaveBorder() {
        setIsBorderHidden(false); // quando o mouse sair da div, exibe a borda da imagem
      }
    


    function handleHover() {
      setImageType('capa'); // quando o mouse estiver em cima da imagem, troca para "capa"
    }
  
    function handleMouseLeave() {
      setImageType('imagem'); // quando o mouse sair da imagem, troca para "imagem"
    }
  
    return (
<div onMouseEnter={handleHoverBorder} onMouseLeave={handleMouseLeaveBorder}>
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <div className={styles.container} 
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/${id}`} className={styles.titulo}> 
         
          {imageType === 'imagem'? (
            <div >
                <h2>{personagem}</h2>
                <img src={imagem} alt={titulo} className={styles.capa}/>
           </div>
          ) : (
            <img style={{ border: isBorderHidden ? "none" : "" }} src={capa} alt={titulo} className={styles.capa}/>
            
          )}
        </Link>
        {isHovered &&  (
          <div>
            <Link className={styles.link} to={`/${id}`}> 
              
              <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                 alt='Favoritar filme'
                 className={styles.favoritar} 
                 onClick={() => {
                   adicionarFavorito({id, titulo , capa , anime , imagem , personagem})
                 }}
            />
          </div>
        )}
      </div> 
    </div>
</div>
    )
  }