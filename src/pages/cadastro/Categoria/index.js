/* eslint linebreak-style: ["error", "windows"] */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const defaultValues = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleCategoriaChange, categoria, clearForm } = useForm(defaultValues);

  const [categorias, setCategorias] = useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, categoria]);
    // setCategoria(defaultValues);
    clearForm();
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={handleFormSubmit}>
        <FormField tag="input" label="Nome" type="text" name="nome" value={categoria.nome} onChange={handleCategoriaChange} />

        <FormField tag="textarea" label="Descrição" type="text" name="descricao" value={categoria.descricao} onChange={handleCategoriaChange} />

        <FormField tag="input" label="Cor" type="color" name="cor" value={categoria.cor} onChange={handleCategoriaChange} />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoriaAtual) => (
          <li key={categoriaAtual.titulo}>
            {categoriaAtual.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}
