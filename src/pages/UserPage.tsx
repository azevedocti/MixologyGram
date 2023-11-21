import { Link } from "react-router-dom";



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
        <h1 className="NeonText" id="sair">
          <a href="/">Sair</a>
        </h1>
      </div>

      <div>
            <Link to="/feed">
              <img id="back" src="/icons/back_white.png" alt="Voltar" />
            </Link>
          </div>

      <div id="body">
      <div id="produto" style={{flex:1}}>
              <img id="User" src="/icons/user_white.png" alt="Usuario" />
            </div>
        <h2>User12</h2>
        <h2>5 seguidores </h2>
        <h2>5 seguindo </h2>

      </div>

      <div id="Fotos">

        <div id="linha1">
        <div id="caipirinha">
          <a href="/produto/1"rel="noopener noreferrer">
            <img src="/imgs/caipirinha.jpeg" alt="Caipirinha" />
          </a>
          <h2 id="desc1">Caipirinha de Limão</h2>
        </div>
        <div id="lagoaazul">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/lagoaazul.jpg" alt="Lagoa Azul" />
          </a>
          <h2 id="desc2">Lagoa Azul</h2>
        </div>
        <div id="cubalibre">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/cuba-libre.jpeg" alt="Cuba Libre" />
          </a>
          <h2 id="desc3">Cuba Libre</h2>
        </div>
        <div id="negroni">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/negroni.jpg" alt="Negroni" />
          </a>
          <h2 id="desc4">Negroni</h2>
        </div>
        <div id="vodkacocktail">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/vodka-cocktail.jpg" alt="Vodka Cocktail" />
          </a>
          <h2 id="desc5">Vodka Cocktail</h2>
        </div>
        </div>
        <div id="linha2">
        <div id="fernet">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/fernetcoca.jpg" alt="Fernet com Coca" />
          </a>
          <h2 id="desc6">Fernet com Coca-Cola</h2>
        </div>
        <div id="moscow">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/moscowmule.png" alt="Moscow Mule" />
          </a>
          <h2 id="desc7">Moscow Mule</h2>
        </div>
        <div id="margarita">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/margarita.jpg" alt="Margarita" />
          </a>
          <h2 id="desc8">Margarita</h2>
        </div>
        <div id="mojito">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/mojito.jpg" alt="Mojito" />
          </a>
          <h2 id="desc9">Mojito</h2>
        </div>
        <div id="manhattan">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/manhattan.jpg" alt="Manhattan" />
          </a>
          <h2 id="desc10">Manhattan</h2>
        </div>
        </div>
      </div>
    </>
  );
}

