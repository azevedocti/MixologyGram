import minhaImagem from "/workspaces/MixologyGram/src/components/imgs/caipirinha.jpeg";
import minhaImagem2 from "/workspaces/MixologyGram/src/components/imgs/lagoaazul.jpg";
import minhaImagem3 from "/workspaces/MixologyGram/src/components/imgs/cuba-libre.jpeg";
import minhaImagem4 from "/workspaces/MixologyGram/src/components/imgs/negroni.jpg";
import minhaImagem5 from "/workspaces/MixologyGram/src/components/imgs/vodka-cocktail.jpg";
import minhaImagem6 from "/workspaces/MixologyGram/src/components/imgs/fernetcoca.jpg";
import minhaImagem7 from "/workspaces/MixologyGram/src/components/imgs/moscowmule.png";
import minhaImagem8 from "/workspaces/MixologyGram/src/components/imgs/margarita.jpg";
import minhaImagem9 from "/workspaces/MixologyGram/src/components/imgs/mojito.jpg";

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
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem} alt="Caipirinha" />
          </a>
          <h2 id="desc1">Caipirinha de Limão</h2>
        </div>
        <div id="lagoaazul">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem2} alt="Lagoa Azul" />
          </a>
          <h2 id="desc2">Lagoa Azul</h2>
        </div>
        <div id="cubalibre">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem3} alt="Cuba Libre" />
          </a>
          <h2 id="desc3">Cuba Libre</h2>
        </div>
        <div id="negroni">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem4} alt="Negroni" />
          </a>
          <h2 id="desc4">Negroni</h2>
        </div>
        <div id="vodkacocktail">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem5} alt="Vodka Cocktail" />
          </a>
          <h2 id="desc5">Vodka Cocktail</h2>
        </div>
        <div id="fernet">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem6} alt="Fernet com Coca" />
          </a>
          <h2 id="desc6">Fernet com Coca-Cola</h2>
        </div>
        <div id="moscow">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem7} alt="Moscow Mule" />
          </a>
          <h2 id="desc7">Moscow Mule</h2>
        </div>
        <div id="margarita">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem8} alt="Margarita" />
          </a>
          <h2 id="desc8">Margarita</h2>
        </div>
        <div id="mojito">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={minhaImagem9} alt="Mojito" />
          </a>
          <h2 id="desc8">Mojito</h2>
        </div>
      </div>
    </>
  );
}
