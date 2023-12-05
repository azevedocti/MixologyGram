import { Link } from "react-router-dom";

function CreateProductPage() {
  return (
    <>
    <div>
      <h2>Criar Novo Produto</h2>
      {/* Conteúdo da página de criação de produto */}
    </div>
    <div>
        <Link to="/feed">
          <img id="back" src="/icons/back_white.png" alt="Voltar" />
        </Link>
      </div>
      </>
  );
}

export default CreateProductPage;