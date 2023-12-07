import { Await, Link, useParams } from "react-router-dom";
import "../components/css/productpage.css";
import { getItem } from "../services/firebase";
import { useState, useEffect } from "react";

type Drink = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export function ProductPage() {
  const { id } = useParams();
  const [drink, setDrink] = useState<Drink>({
    title: "",
    subtitle: "",
    description: "",
    image: ""
  }
  );
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const dado = await getItem("drinks", id);
      setDrink(dado.data() as Drink);
      console.log("texto", dado.data());
    };

    fetchData();
  }, []);

  const handleFavoriteClick = () => {
    setFavorited(!favorited);
  };

  return (
    <>
      <div id="content" className="product">
        <div id="HeadProduct">
          <div id="Title">
            <h1 className="NeonText">
              <Link to="/usuario">Início</Link>
            </h1>
            <h1 className="NeonText">
              <Link to="google.com">Criar</Link>
            </h1>
            <h1 className="NeonText">
            <a href="/">Sair</a>
          </h1>
          </div>

          <div>
            <Link to="/feed">
              <img id="back" src="/icons/back_white.png" alt="Voltar" />
            </Link>
          </div>

          

          <div style={{ display: "flex" }}>
            <div id="produto" style={{ flex: 1 }}>
              {drink ? (
                <img id="foto" src={drink.image} />
              ) : (
                <p>Carregando...</p>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div id="titulo">
                {drink ? (
                  <>
                    <h1 className="NeonText">{drink.title}{drink.title == "" && <div>Carregando...</div>}</h1>
                    <h2 className="NeonText">{drink.subtitle}</h2>
                    <button
                      onClick={handleFavoriteClick}
                      className={favorited ? "favorited" : ""}
                    >
                      {favorited ? "Desfavoritar" : "Favoritar"}
                    </button>
                  </>
                ) : (
                  <p>Carregando...</p>
                )}
              </div>

              <div id="descricao">
                {drink ? (
                  <h2 id="desc"> <span dangerouslySetInnerHTML={{ __html: drink.description }}></span>
                  </h2>
                ) : (
                  <p>Carregando...</p>
                )}
              </div>
            </div>
            <div id="usuario"></div>
          </div>
        </div>
      </div>
    </>
  );
}
