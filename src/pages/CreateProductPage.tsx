import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function CreateProductPage() {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [foto, setFoto] = useState('');
  const [descricao, setDescricao] = useState('');
  const nav = useNavigate();

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    // Adicione aqui a lógica para criar o produto com os dados fornecidos
    console.log('Título:', titulo);
    console.log('Subtítulo:', subtitulo);
    console.log('Foto:', foto);
    console.log('Descrição:', descricao);

    // Exemplo: Implemente a lógica de criação de produto aqui
    // createProductFunction(titulo, subtitulo, foto, descricao)
    //   .then(() => {
    //     alert('Produto criado com sucesso!');
    //     nav('/feed'); // Redireciona para a página de feed após criar o produto
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert('Não foi possível criar o produto: ' + error.message);
    //   });
  }

  return (
    <>
      <div>
        <h2>Criar Novo Produto</h2>
      </div>
      <div>
        <Link to="/feed">
          <img id="back" src="/icons/back_white.png" alt="Voltar" />
        </Link>
      </div>

      <form onSubmit={handleLogin}>
        <div>
          <label>Título: </label>
          <input onChange={(e) => setTitulo(e.target.value)} value={titulo} />
        </div>

        <div>
          <label>Subtítulo: </label>
          <input
            onChange={(e) => setSubtitulo(e.target.value)}
            value={subtitulo}
          />
        </div>

        <div>
          <label>Foto: </label>
          <input onChange={(e) => setFoto(e.target.value)} value={foto} />
        </div>

        <div>
          <label>Descrição: </label>
          <textarea
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
          />
        </div>

        <div>
          <button type="submit">Enviar Post</button>
        </div>
      </form>
    </>
  );
}