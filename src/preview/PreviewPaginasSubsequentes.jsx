import React from 'react';
import ModeloPaginasSubsequentes from '../component/ModeloPaginasSubsequentes';


const PreviewPaginasSubsequentes = () => {
  const dadosPaginasSubsequentes = [
    {
      type: 'text',
      data: {
        comissao: 'Comissão 1',
        prefeitura: 'Prefeitura Municipal',
        aviso: 'Aviso importante',
        texto: 'Este é um texto de exemplo para a página 1.',
      },
    },
    {
      type: 'image',
      data: 'https://via.placeholder.com/400x300?text=Imagem+de+Exemplo', // Substitua por uma URL de imagem real
    },
    {
      type: 'text',
      data: {
        comissao: 'Comissão 2',
        prefeitura: 'Prefeitura Municipal',
        aviso: 'Outro aviso',
        texto: 'Este é um texto de exemplo para a página 2.',
      },
    },
  ];

  return (
    <div>
      <h2>Preview Modelo Páginas Subsequentes</h2>
      <ModeloPaginasSubsequentes paginas={dadosPaginasSubsequentes} />
    </div>
  );
};

export default PreviewPaginasSubsequentes;