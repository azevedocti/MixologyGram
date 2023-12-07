import { useEffect, useState } from "react";
import "../components/css/feedpage.css";
import { selectAllItems } from "../services/firebase";
import { Link } from "react-router-dom";

export function FeedPage() {
  const [listaDrinks, setListaDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dados = await selectAllItems("drinks");
      setListaDrinks(dados);
    };

    fetchData();
  }, []);
  return (
    <>
      <div id="head" className="feed">
        <img id="logo" src="/imgs/logo_preta_roxa.png" alt="Logo" />
        <h1 className="NeonText">
          <a href="/feed">Início</a>
        </h1>
        <h1 className="NeonText">
          <Link to="/create">Criar</Link>

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
        {listaDrinks.map((drink, index) => (
          <div key={index} className="drink-container">
            <Link to={`/produto/${drink.id}`}>
              <img src={drink.image} alt={drink.title} />
            </Link>
            <h2 id="desc1">{drink.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}