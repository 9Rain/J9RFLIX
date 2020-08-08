import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

export default function CadastroCategoria() {

    const defaultValues = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }

    const [categoria, setCategoria] = useState(defaultValues);
    const [categorias, setCategorias] = useState([]);

    // handlers

    function handleCategoriaChange(e) {
        setCategoriaValue(e.target.getAttribute('name'), e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, categoria]);
        setCategoria(defaultValues);
    }

    // sets

    function setCategoriaValue(nome, valor) {
        setCategoria({...categoria, [nome]: valor});
    }


    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {categoria.nome}</h1>

            <form onSubmit={handleFormSubmit}>
                <FormField tag="input" label="Nome" type="text" name="nome" value={categoria.nome} onChange={handleCategoriaChange} />
                
                <FormField tag="textarea" label="Descrição" type="text" name="descricao" value={categoria.descricao} onChange={handleCategoriaChange} />
                
                <FormField tag="input" label="Cor" type="color" name="cor" value={categoria.cor} onChange={handleCategoriaChange} />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={index}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    )
}
