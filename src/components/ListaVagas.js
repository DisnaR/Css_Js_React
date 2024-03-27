import React from 'react';
import { JobListContainer } from './ListaVagas.styles'; // Importando os estilos da ListaVagas
import Vaga from './Vaga'; // Importando o componente Vaga

const ListaVagas = ({ vagas }) => {
  // Lógica do componente ListaVagas aqui, se necessário

  return (
    <JobListContainer>
      {/* Mapeamento das vagas para renderizar */}
      {vagas.map((vaga, index) => (
        <Vaga key={index} titulo={vaga.titulo} descricao={vaga.descricao} />
      ))}
    </JobListContainer>
  );
};

export default ListaVagas;
