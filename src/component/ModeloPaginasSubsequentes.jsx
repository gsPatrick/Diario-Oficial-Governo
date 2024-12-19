import React from 'react';
import '../styles/ModeloPaginasSubsequentes.css';
import bocaDaMataLogo from '../assets/bocaDaMata.jpg';
import diarioLogo from '../assets/Diario.jpeg';

const ModeloPaginasSubsequentes = ({ paginas, currentPage, totalPages, formData }) => {
    return (
      <div id="modelo-paginas-subsequentes" className="pdf-container-sub">
        <header className="pdf-header pdf-header-Subsequentes">
          <div className="header-logos header-logos-Subsequentes">
            <img src={bocaDaMataLogo} alt="Prefeitura de Boca da Mata" className="logo-left" />
            <img src={diarioLogo} alt="Diário Oficial" className="logo-right" />
          </div>
          <div className="header-content header-content-Subsequentes">
            <p className="estado estado-Subsequentes">Boca da Mata/AL, {formData.date}</p>
            <div className="lado lado-Subsequentes">
              <p className="nomeDiario nomeDiario-Subsequentes">
                Diário Oficial Eletrônico instituído e regulamentado pela Lei Municipal nº 850/2022.
              </p>
              <p className="edicao edicao-Subsequentes">Edição nº {formData.edition}</p>
            </div>
          </div>
        </header>
  
        {paginas.map((page, index) => (
          <div key={index} className="page-container-Subsequentes">
            {page.type === 'image' ? (
              <img src={page.data} alt={`Imagem ${index + 1}`} className="image-page" />
            ) : (
              <div className="text-page-Subsequentes">
                {page.data.map((block, blockIndex) => (
                  <div key={blockIndex}>
                    <div className="page-header-Subsequentes">
                      <p className="titulo-Subsequentes">COMISSÃO PERMANENTE DE LICITAÇÃO - CPL</p>
                      <div className="linha-preta-Subsequentes"></div>
                      <p className="prefeitura-nome-Subsequentes">{block.prefeitura}</p>
                      <p className="aviso-titulo-Subsequentes">{block.aviso}</p>
                    </div>
  
                    <div className="page-content-Subsequentes">
                      <p className="dispensa-info-Subsequentes" dangerouslySetInnerHTML={{ __html: block.texto }} />
                    </div>
                  </div>
                ))}
                </div>
            )}
            <footer>
              <div className="footer-line-Subsequentes"></div>
              <div className="page-number-Subsequentes">Página {currentPage} de {totalPages}</div>
            </footer>
          </div>
        ))}
      </div>
    );
  };
  
  export default ModeloPaginasSubsequentes;