import { useEffect, useState } from "react";
import "../components/css/userpage.css";
import { Link } from "react-router-dom";
import { getItem } from "../services/firebase";

export function UserPage() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteDrinks, setFavoriteDrinks] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteIds(favorites);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const drinkData = await Promise.all(
        favoriteIds.map(async (id) => {
          const drink = await getItem("drinks", id);
          return drink.data();
        })
      );

      setFavoriteDrinks(drinkData);
    };

    fetchData();
  }, [favoriteIds]);

  return (
    <>
      <div id="head">
        <img id="logo" src="/imgs/logo_preta_roxa.png" alt="Logo" />
        <h1 className="NeonText">
          <a href="/feed">Início</a>
        </h1>
        <h1 className="NeonText">
          <a href="/create">Criar</a>
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

      <div id="conteudo">
        <div id="perfil">
          <img id="photo" src="/icons/user_white.png" alt="Usuário" />
          <h2>Kauã Patricki</h2>
          <h2>5 seguidores </h2>
          <h2>5 seguindo </h2>
        </div>
      </div>

      <div id="body">
        <h2>Meus Favoritos!</h2>
        {favoriteDrinks.length > 0 ? (
          <div id="fotosuser">
            {favoriteDrinks.map((drink, index) => (
              <div key={index} className="drink-container">
                <Link to={`/produto/${drink.id}`}>
                  <img src={drink.image} alt={drink.title} />
                </Link>
                <h3>{drink.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhum favorito encontrado.</p>
        )}
      </div>
    </>
  );
}
