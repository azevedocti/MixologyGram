import "../components/css/feedpage.css";

export function FeedPage() {
  return (
    <>
      <div id="head">
      <img id="logo" src="/imgs/logo_preta_roxa.png" alt="Logo" />
        <h1 className="NeonText">
          <a href="/usuario">Início</a>
        </h1>
        <h1 className="NeonText">
          <a href="google.com">Criar</a>
        </h1>
        <h1 className="NeonText">
          <a href="google.com">Pesquisar</a>
        </h1>
        <div id="head2">
  <h2 className="NeonText" id="sair">
    <a href="/">Sair</a>
  </h2>
  <h2>
  <a href="/usuario" rel="noopener noreferrer">
            <img id="user" src="/icons/user_white.png" alt="Usuário" />
          </a>
  </h2>
</div>
      </div>
      
     

      <div id="body">
        <h2>Posts recentes!</h2>
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
          <a href="/produto/1" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/lagoaazul.jpg" alt="Lagoa Azul" />
          </a>
          <h2 id="desc2">Lagoa Azul</h2>
        </div>
        <div id="negroni">
          <a href="https://www.google.com" rel="noopener noreferrer">
            <img src="/imgs/negroni.jpg" alt="Negroni" />
          </a>
          <h2 id="desc4">Negroni</h2>
        </div>
        <div id="vodkacocktail">
          <a href="https://www.google.com" rel="noopener noreferrer">
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
        </div>

      </div>
      <div id="linha3">
      <div id="cubalibre">
          <a href="https://www.google.com" rel="noopener noreferrer">
            <img src="/imgs/cuba-libre.jpeg" alt="Cuba Libre" />
          </a>
          <h2 id="desc3">Cuba Libre</h2>
        </div>
        <div id="manhattan">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/manhattan.jpg" alt="Manhattan" />
          </a>
          <h2 id="desc10">Manhattan</h2>
        </div>
        <div id="aperol">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/drink_aperol.jpg" alt="Aperol" />
          </a>
          <h2 id="desc10">Aperol Spritz</h2>
        </div>
        <div id="fitz">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/fitzgerald.jpg" alt="Fitzgerald" />
          </a>
          <h2 id="desc10">Fitzgerald</h2>
        </div>
        </div>
    </>
  );
}

