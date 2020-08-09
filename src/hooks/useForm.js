/* eslint linebreak-style: ["error", "windows"] */

import { useState } from 'react';

export default function useForm(defaultValues) {
  const [categoria, setCategoria] = useState(defaultValues);

  // sets

  function setCategoriaValue(nome, valor) {
    setCategoria({ ...categoria, [nome]: valor });
  }

  function clearForm() {
    setCategoria(defaultValues);
  }

  // handlers

  function handleCategoriaChange(e) {
    setCategoriaValue(e.target.getAttribute('name'), e.target.value);
  }

  return {
    categoria,
    handleCategoriaChange,
    clearForm,
  };
}
