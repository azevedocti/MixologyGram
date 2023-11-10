<<<<<<< HEAD
import { Link } from "react-router-dom";

=======
import { Link, useParams } from "react-router-dom";
import Voltar from "/workspaces/MixologyGram/src/components/icons/seta-esquerda.png";
import MinhaImagem1 from "/workspaces/MixologyGram/src/components/imgs/caipirinha.jpeg";
>>>>>>> refs/remotes/origin/main

export function ProductPage() {
  let { id } = useParams();

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
            {/* Usando o componente Link para navegação interna */}
            <Link to="/usuario">
              <img id="back" src={Voltar} alt="Voltar" />
            </Link>
          </div>

          <div id="titulo">
  <h1 className="NeonText">Caipirinha de Limão {id}</h1>
  <h2 className="NeonText">Cachaça, Limão, açúcar e MUITO gelo.</h2>
</div>

<<<<<<< HEAD
        <div>
          {/* Usando o componente Link para navegação interna */}
          <Link to="/usuario">
            <img id="back"  alt="Voltar" />
          </Link>
        </div>
        <div>
        <img alt="test" />
        </div>
=======
      
          <div id="produto">
            <img
              id="caipirinha"
              src={MinhaImagem1}
            />
          </div>
>>>>>>> refs/remotes/origin/main

        </div>
      </div>
    </>
  );
}