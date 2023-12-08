import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addItem, storage } from '/workspaces/MixologyGram/src/services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';  // Importe as funções necessárias para o Storage

export function CreateProductPage() {
  const [id, setId] = useState('');
  const [title, setTitulo] = useState('');
  const [subtitle, setSubtitulo] = useState('');
  const [image, setFoto] = useState('');
  const [description, setDescricao] = useState('');
  const nav = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Salvar imagem no Storage
      const storageRef = ref(storage, `uploads/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      await uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Aqui você pode incluir código para acompanhar o progresso do upload, se necessário
        },
        (error) => {
          alert(error);
        },
        async () => {
          // Obter a URL da imagem no Firebase Storage
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

          // Crie um objeto com os dados do produto
          const produtoData = {
            title,
            subtitle,
            image: imageUrl,
            description,
          };

          // Chame a função addItem para adicionar o produto ao banco de dados
          await addItem('drinks', id, produtoData);

          // Após adicionar com sucesso, redirecione para a página de feed
          alert('Produto postado com sucesso!');
          nav('/feed');
        }
      );
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Não foi possível postar o produto. Por favor, tente novamente.');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(file);
    }
  };

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
          <label>ID: </label>
          <input onChange={(e) => setId(e.target.value)} value={id} />
        </div>
        <div>
          <label>Título: </label>
          <input onChange={(e) => setTitulo(e.target.value)} value={title} />
        </div>

        <div>
          <label>Principais Ingredientes: </label>
          <input
            onChange={(e) => setSubtitulo(e.target.value)}
            value={subtitle}
          />
        </div>

        <div>
          <label>Foto: </label>
          <input type="file" onChange={handleFileChange} accept="image/*" />
        </div>

        <div>
          <label>Descrição: </label>
          <textarea
            onChange={(e) => setDescricao(e.target.value)}
            value={description}
          />
        </div>

        <div>
          <button type="submit">Postar produto</button>
        </div>
      </form>
    </>
  );
}
