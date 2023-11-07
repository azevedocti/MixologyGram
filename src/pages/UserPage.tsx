import { useEffect, useState } from 'react';
import minhaImagem from "/workspaces/MixologyGram/src/components/imgs/caipirinha.jpeg";
import minhaImagem2 from "/workspaces/MixologyGram/src/components/imgs/lagoaazul.jpg";
import minhaImagem3 from "/workspaces/MixologyGram/src/components/imgs/cuba-libre.jpeg";
import minhaImagem4 from "/workspaces/MixologyGram/src/components/imgs/negroni.jpg";
import minhaImagem5 from "/workspaces/MixologyGram/src/components/imgs/vodka-cocktail.jpg";

export function UserPage() {

  return (
    <>
    <div id="head">
    <h1 className="NeonText">
          <a href="/usuario">Início</a>
        </h1>
      <h1 className="NeonText">
        <a href="google.com">Criar</a>
        </h1>
        <h1 className="NeonText">
          <a href="google.com">Pesquisar</a>
        </h1>
      </div>

      <div id="body">
      <h2>Seus favoritos</h2>
      </div>
<div id="Fotos">
      <div id="caipirinha">
      <img src={minhaImagem} alt="Caipirinha" />
        <h2 id="desc1">Caipirinha</h2>
      </div>
      <div id="lagoaazul">
      <img src={minhaImagem2} alt="Lagoa Azul" />
        <h2 id="desc2">Lagoa Azul</h2>
      </div>
      <div id="cubalibre">
        <img src={minhaImagem3} alt="Cuba Libre" />
        <h2 id="desc3">Cuba Libre</h2>
      </div>
      <div id="negroni">
        <img src={minhaImagem4} alt="Negroni" />
        <h2 id="desc4">Negroni</h2>
      </div>
      <div id="vodkacocktail">
        <img src={minhaImagem5} alt="Vodka Cocktail" />
        <h2 id="desc5">Vodka Cocktail</h2>
      </div>
  </div>
    </>
  );
}