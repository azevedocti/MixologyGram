import { Link } from "react-router-dom";
import Voltar from "src/components/imgs/caipirinha.jpeg";
import MinhaImagem1 from "src/components/imgs/caipirinha.jpeg";


export function ProductPage() {


  return (
    <>
    <div id="content">
      <div id="HeadProduct">

        <div>
          <h1 id="Title" className="NeonText">Produto</h1>
        </div>

        <div>
          {/* Usando o componente Link para navegação interna */}
          <Link to="/usuario">
            <img id="back" src={Voltar} alt="Voltar" />
          </Link>
        </div>
        <div>
        <img src={MinhaImagem1} alt="test" />
        </div>

      </div>
      </div>
    </>
  );
}
