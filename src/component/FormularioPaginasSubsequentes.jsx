import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/FormularioPaginasSubsequentes.css'

function FormularioPaginasSubsequentes() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const [pages, setPages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [currentPageType, setCurrentPageType] = useState(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(null);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(null);

  const handleCreatePage = () => {
    setShowOptions(true);
  };

  const handleImagePage = () => {
    const newPage = { type: 'image', data: null };
    setPages([...pages, newPage]);
    setCurrentPageIndex(pages.length);
    setCurrentPageType('image');
    setShowOptions(false);
  };

  const handleTextPage = () => {
    const newPage = {
      type: 'text',
      data: [
        { comissao: '', prefeitura: '', aviso: '', texto: '' },
        { comissao: '', prefeitura: '', aviso: '', texto: '' },
      ],
    };
    setPages([...pages, newPage]);
    setCurrentPageIndex(pages.length);
    setCurrentPageType('text');
    setShowOptions(false);
  };

  const handleImageUpload = (event) => {
    if (currentPageIndex === null) return;

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const updatedPages = [...pages];
      updatedPages[currentPageIndex].data = e.target.result;
      setPages(updatedPages);
    };

    reader.readAsDataURL(file);
  };

  const handleInputChange = (event, blockIndex) => {
    if (currentPageIndex === null) return;
  
    const { name, value } = event.target;
    const updatedPages = [...pages];
    updatedPages[currentPageIndex].data[blockIndex][name] = value;
    setPages(updatedPages);
  };
  

  const handleSavePage = () => {
    console.log('Página salva:', pages[currentPageIndex]);
    setCurrentPageIndex(null);
    setCurrentPageType(null);
    setCurrentBlockIndex(null);
  };

  const handleNextStep = () => {
    navigate('/gerador-pdf', { state: { formData, pages } });
  };

  const handleEditPage = (pageIndex, blockIndex = null) => {
    setCurrentPageIndex(pageIndex);
    setCurrentPageType(pages[pageIndex].type);
    setCurrentBlockIndex(blockIndex);
  };

  const handleDeletePage = (index) => {
    const updatedPages = pages.filter((_, i) => i !== index);
    setPages(updatedPages);
    if (currentPageIndex === index) {
      setCurrentPageIndex(null);
      setCurrentPageType(null);
      setCurrentBlockIndex(null);
    }
  };

  return (
    <div className="container-formulario-subsequentes">
      <h1 className="titulo-formulario-subsequentes">Formulário de Páginas Subsequentes</h1>

      {formData && (
        <div className="dados-anteriores-formulario-subsequentes">
          <h2>Dados da Página Anterior:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}

      <button className="botao-formulario-subsequentes" onClick={handleCreatePage}>Criar Página</button>

      {showOptions && (
        <div className="opcoes-formulario-subsequentes">
          <button onClick={handleImagePage}>Página de Imagem</button>
          <button onClick={handleTextPage}>Página com Texto</button>
        </div>
      )}

      {currentPageType && currentPageIndex !== null && (
        <div className="area-edicao-formulario-subsequentes">
          {currentPageType === 'image' && (
            <div className="imagem-formulario-subsequentes">
              <h2>Página {currentPageIndex + 2} - Imagem</h2>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {pages[currentPageIndex]?.data && (
                <img
                  src={pages[currentPageIndex].data}
                  alt="Pré-visualização"
                  className="imagem-preview-formulario-subsequentes"
                />
              )}
              <button className="botao-formulario-subsequentes" type="button" onClick={handleSavePage}>
                Salvar Página
              </button>
              <button
                className="botao-formulario-subsequentes"
                type="button"
                onClick={() => {
                  setCurrentPageIndex(null);
                  setCurrentPageType(null);
                }}
              >
                Cancelar
              </button>
            </div>
          )}

          {currentPageType === 'text' && (
            <div className="texto-formulario-subsequentes">
              <h2>Página {currentPageIndex + 2} - Texto</h2>
              {pages[currentPageIndex].data.map((block, blockIndex) => (
                <form key={blockIndex} className="bloco-formulario-subsequentes">
                  <h3>Bloco {blockIndex + 1}</h3>
                  <div className="grupo-formulario-subsequentes">
                    <label htmlFor={`comissao-${currentPageIndex}-${blockIndex}`}>
                      Comissão:
                    </label>
                    <input
                      type="text"
                      id={`comissao-${currentPageIndex}-${blockIndex}`}
                      name="comissao"
                      value={block.comissao || ''}
                      onChange={(e) => handleInputChange(e, blockIndex)}
                    />
                  </div>
                  <div className="grupo-formulario-subsequentes">
                    <label htmlFor={`prefeitura-${currentPageIndex}-${blockIndex}`}>
                      Prefeitura:
                    </label>
                    <input
                      type="text"
                      id={`prefeitura-${currentPageIndex}-${blockIndex}`}
                      name="prefeitura"
                      value={block.prefeitura || ''}
                      onChange={(e) => handleInputChange(e, blockIndex)}
                    />
                  </div>
                  <div className="grupo-formulario-subsequentes">
                    <label htmlFor={`aviso-${currentPageIndex}-${blockIndex}`}>
                      Aviso:
                    </label>
                    <input
                      type="text"
                      id={`aviso-${currentPageIndex}-${blockIndex}`}
                      name="aviso"
                      value={block.aviso || ''}
                      onChange={(e) => handleInputChange(e, blockIndex)}
                    />
                  </div>
                  <div className="grupo-formulario-subsequentes">
                    <label htmlFor={`texto-${currentPageIndex}-${blockIndex}`}>
                      Texto:
                    </label>
                    <textarea
                      id={`texto-${currentPageIndex}-${blockIndex}`}
                      name="texto"
                      value={block.texto || ''}
                      onChange={(e) => handleInputChange(e, blockIndex)}
                    />
                  </div>
                </form>
              ))}
              <button className="botao-formulario-subsequentes" type="button" onClick={handleSavePage}>
                Salvar Página
              </button>
              <button
                className="botao-formulario-subsequentes"
                type="button"
                onClick={() => {
                  setCurrentPageIndex(null);
                  setCurrentPageType(null);
                  setCurrentBlockIndex(null);
                }}
              >
                Cancelar Edição
              </button>
            </div>
          )}
        </div>
      )}

      <h2 className="titulo-paginas-formulario-subsequentes">Páginas Criadas:</h2>
      <ul className="lista-formulario-subsequentes">
        {pages.map((page, pageIndex) => (
          <li key={pageIndex} className="item-formulario-subsequentes">
            Página {pageIndex + 2} ({page.type === 'image' ? 'Imagem' : 'Texto'}) -
            <button onClick={() => handleEditPage(pageIndex)}>Editar</button>
            <button onClick={() => handleDeletePage(pageIndex)}>Excluir</button>
            {page.type === 'image' && page.data && (
              <img
                src={page.data}
                alt="Imagem"
                className="imagem-preview-formulario-subsequentes"
              />
            )}
            {page.type === 'text' && (
              <div className="previa-texto-formulario-subsequentes">
                {page.data.map((block, blockIndex) => (
                  <div key={blockIndex} className="bloco-texto-formulario-subsequentes">
                    <p>Bloco {blockIndex + 1}:</p>
                    <p>Comissão: {block.comissao}</p>
                    <p>Prefeitura: {block.prefeitura}</p>
                    <p>Aviso: {block.aviso}</p>
                    <p>Texto: {block.texto}</p>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <button className="botao-formulario-subsequentes" onClick={handleNextStep}>
        Próxima Etapa
      </button>
    </div>
  );
}

export default FormularioPaginasSubsequentes;