import React from 'react';
import ModeloPrimeiraPagina from '../component/ModeloPrimeiraPagina';

const PreviewPrimeiraPagina = () => {
  const dadosPrimeiraPagina = {
    date: '2023-12-03',
    edition: '123',
    prefeito: 'João da Silva',
    vicePrefeito: 'Maria Oliveira',
    secretariaEducacao: 'Ana Souza',
    secretariaSaude: 'Pedro Santos',
    secretariaFinancas: 'Carla Rodrigues',
    secretariaAssistencia: 'José Almeida',
    secretariaEsporte: 'Fernanda Costa',
    secretariaAdministracao: 'Lucas Pereira',
    secretariaInfra: 'Mariana Lima',
    procuradoria: 'Antônio Carvalho',
    controladoria: 'Beatriz Ferreira',
    secretariaArticulacao: 'Gustavo Martins',
    assessoriaComunicacao: 'Camila Barbosa',
    secretariaTransito: 'Rafael Nunes',
    servicoAgua: 'Isabela Castro',
    instituto: 'Daniel Ribeiro',
    diarioOficial: 'Diário Oficial do Município',
  };

  return (
    <div>

      <ModeloPrimeiraPagina dados={dadosPrimeiraPagina} />
    </div>
  );
};

export default PreviewPrimeiraPagina;