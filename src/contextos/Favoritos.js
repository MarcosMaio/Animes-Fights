import React, { createContext, useContext, useState } from 'react'

export const FavoritosContext = createContext();  //Criei meu create context aonde eu armazeno os contextos ,  estamos criando um contexto, uma funcionalidade permitida pelo React para conseguirmos compartilhar alguns estados e valores.
FavoritosContext.displayName = "Favoritos"; //Defini o nome desse contexto como Favoritos

export default function FavoritosProvider({ children }) {  //Função responsavel por fazer o fornecimento do contexto , quando usada oque tiver dentro estará usufluindo do contexto
    const [favorito, setFavorito] = useState([]); //No useState() temos dois valores: favorito, que é o valor inicial do estado, e o setFavorito, que é responsável para atualização do favorito

    return (
      <FavoritosContext.Provider value={{ favorito , setFavorito}}>
          {children}
      </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() { //Nós criamos um hook personalizado, no caso é um hook porque começa com use. Fizemos esse hook personalizado para criar funcionalidades nesse contexto.
  const { favorito, setFavorito } = useContext(FavoritosContext); // criação de a constante { favorito, setFavorito }, que usamos como um useContext() para chamarmos o contexto do Favorito, retornando os valores que passamos para o Provider. 

  function adicionarFavorito(novoFavorito) { //Depois criamos a função adicionarFavorito() que especificamente fará a ação de favoritar.
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id); //Dentro da função criamos a variável favoritoRepetido que verifica se o favorito está repetido. Essa variável recebe o método .some() e procura, dentro da lista da favoritos, se existe algum item com o mesmo ID que estamos tentando adicionar. Caso tenha, ele retorna "true".
  

    let novaLista = [...favorito]; //Em seguida criamos uma nova lista (novaLista) que recebe a lista antiga ([...favorito]) e faz uma condicional. 

 
    if(!favoritoRepetido) {  //Então, caso o item não seja repetido, ele é adicionado à lista, a partir do gerenciador de estado .setFavorito(), que atualiza a lista de favoritos.
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
  }
  
  novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id); //Desse jeito, a variável novaLista será sobrescrita para uma lista com somente os favoritos que não possuiam o id igual ao que estavamos tentando desfavoritar.
  return setFavorito(novaLista); //Por fim ele retornará o setFavorito(novaLista) com um item a menos, ao contrário do caso que não tem itens repetidos, que a lista retorna com um item a mais.
  }

  return {  // No final retornamos a função e o favorito para conseguirmos consultar a lista de favoritos.
    favorito,
    adicionarFavorito
  }
}