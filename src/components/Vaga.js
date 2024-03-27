import React from 'react';
import { JobContainer } from './Vaga.styles'; // Importando os estilos da Vaga

const Vaga = ({ titulo, descricao }) => {
  // Lógica do componente Vaga aqui, se necessário

  return (
    <JobContainer>
      {/* Conteúdo da vaga aqui */}
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      {/* Outros elementos da vaga */}
    </JobContainer>
  );
};

export default Vaga;
