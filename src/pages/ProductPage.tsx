import { Link, useParams } from "react-router-dom";
import "../components/css/productpage.css";
import { getItem } from "../services/firebase";
import { useState, useEffect } from "react";

export function ProductPage() {
  const { id } = useParams();
  const [drink, setDrink] = useState<any>();
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const dado = await getItem("drink", id);
      console.log(dado);
      setDrink(dado);
      
    };

    fetchData();
  }, [id]); // Executa novamente quando o id é alterado

  const handleFavoriteClick = () => {
    // Lógica para lidar com o clique no botão de favoritar
    setFavorited(!favorited);
  };

  return (
    <>
      <div id="content">
        <div id="HeadProduct">
          <div id="Title">
            <h1 className="NeonText">
              <Link to="/usuario">Início</Link>
            </h1>
            <h1 className="NeonText">
              <Link to="google.com">Criar</Link>
            </h1>
            <h1 className="NeonText">
              <Link to="google.com">Pesquisar</Link>
            </h1>
          </div>

          <div>
            <Link to="/feed">
              <img id="back" src="/icons/back_white.png" alt="Voltar" />
            </Link>
          </div>

          <div style={{ display: "flex" }}>
            <div id="produto" style={{ flex: 1 }}>
              <img id="caipirinha" src="/imgs/caipirinha.jpeg" alt="Caipirinha" />
            </div>
            <div style={{ flex: 1 }}>
              <div id="titulo">
                <h1 className="NeonText">{drink?.title}</h1>
                <h2 className="NeonText">Cachaça, Limão, açúcar e MUITO gelo.</h2>
                <button
                  onClick={handleFavoriteClick}
                  className={favorited ? "favorited" : ""}
                >
                  {favorited ? "Desfavoritar" : "Favoritar"}
                </button>
              </div>

              <div id="descricao">
                <h2 id="desc">
                  Ingredientes:
                  <ul>
                    <li>1 limão</li>
                    <li>2 colheres de chá de açúcar</li>
                    <li>Gelo a gosto</li>
                    <li>50 ml de cachaça</li>
                  </ul>
                  Instruções:
                  <ol>
                    <li>Corte o limão em pedaços ou fatias.</li>
                    <li>Coloque o limão cortado em um copo.</li>
                    <li>Adicione o açúcar sobre o limão.</li>
                    <li>Use um socador para amassar o limão e misturar bem com o açúcar.</li>
                    <li>Adicione gelo a gosto no copo.</li>
                    <li>Despeje a cachaça sobre a mistura.</li>
                    <li>Mexa bem. Sirva e aproveite sua caipirinha de limão!</li>
                  </ol>
                </h2>
              </div>
            </div>
            <div id="usuario"></div>
          </div>
        </div>
      </div>
    </>
  );
}
