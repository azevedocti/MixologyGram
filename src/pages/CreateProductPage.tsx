import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addItem } from '/workspaces/MixologyGram/src/services/firebase';  // Substitua pelo caminho correto

export function CreateProductPage() {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [foto, setFoto] = useState('');
  const [descricao, setDescricao] = useState('');
  const nav = useNavigate();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    // Crie um objeto com os dados do produto
    const produtoData = {
      titulo,
      subtitulo,
      foto,
      descricao,
    };

    try {
      // Chame a função addItem para adicionar o produto ao banco de dados
      await addItem('suaColecao', 'seuDocumento', produtoData);

      // Após adicionar com sucesso, redirecione para a página de feed
      alert('Produto postado com sucesso!');
      nav('/feed');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Não foi possível postar o produto. Por favor, tente novamente.');
    }
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
          <button type="submit">Postar produto</button>
        </div>
      </form>
    </>
  );
}
