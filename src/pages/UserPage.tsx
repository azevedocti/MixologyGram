import { Link } from "react-router-dom";
import "../components/css/userpage.css";


export function UserPage() {
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

      <div>
            <Link to="/feed">
              <img id="back" src="/icons/back_white.png" alt="Voltar" />
            </Link>
          </div>

      <div id="conteudo">
      <div id="perfil">
      <img id="photo" src="/icons/user_white.png" alt="Usuário" />
        <h2>Kauã Patricki</h2>
        <h2>5 seguidores </h2>
        <h2>5 seguindo </h2>
      </div>
      </div>

      <div id="body">
        <h2>Seus Favoritos!</h2>
      </div>
    </>
  );
}

