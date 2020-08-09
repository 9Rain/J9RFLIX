/* eslint linebreak-style: ["error", "windows"] */

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleCategoriaChange, categoria } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find(
          (categoriaAtual) => categoriaAtual.titulo === categoria.categoria,
        );

        videosRepository.create({
          titulo: categoria.titulo,
          url: categoria.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('cadastrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          tag="input"
          label="Título"
          type="text"
          name="titulo"
          value={categoria.titulo}
          onChange={handleCategoriaChange}
        />

        <FormField
          tag="input"
          label="URL"
          type="text"
          name="url"
          value={categoria.url}
          onChange={handleCategoriaChange}
        />

        <FormField
          tag="input"
          label="Categoria"
          type="text"
          name="categoria"
          value={categoria.categoria}
          suggestions={categoryTitles}
          onChange={handleCategoriaChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}
