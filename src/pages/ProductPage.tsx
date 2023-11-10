import { Link } from "react-router-dom";


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
            <img id="back"  alt="Voltar" />
          </Link>
        </div>
        <div>
        <img alt="test" />
        </div>

      </div>
      </div>
    </>
  );
}
