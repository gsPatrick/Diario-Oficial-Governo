import React from 'react';
import '../styles/ModeloPrimeiraPagina.css'; // Importe o CSS atualizado

// Supondo que você tenha as imagens importadas ou acessíveis
import bocaDaMataLogo from '../assets/bocadaMata.jpg';
import diarioLogo from '../assets/Diario.jpeg';

const ModeloPrimeiraPagina = ({ dados, currentPage, totalPages }) => {
    return (
    <div id="modelo-primeira-pagina" className="pdf-container">
      <header className="pdf-header">
        <div className="header-logos">
          <img
            src={bocaDaMataLogo}
            alt="Prefeitura de Boca da Mata"
            className="logo-left"
          />
          <img
            src={diarioLogo}
            alt="Diário Oficial"
            className="logo-right"
          />
        </div>
        <div className="header-content">
          <p className="estado">Boca da Mata/AL, {dados.date}</p>
          <div className="lado">
            <p className="nomeDiario">
              Diário Oficial Eletrônico instituído e regulamentado pela Lei
              Municipal nº 850/2022.
            </p>
            <p className="edicao">Edição nº {dados.edition}</p>
          </div>
        </div>
      </header>

      <main className="pdf-main">
        <div className="section-prefeito">
          <p>
            {dados.prefeito} <br /> <strong>PREFEITO</strong>
          </p>
        </div>

        <div className="content-columns">
          <div className="left-column">
            <div className="section">
              <p>
                {dados.vicePrefeito} <br /><strong>VICE-PREFEITO</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaEducacao}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE EDUCAÇÃO</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaSaude}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE SAÚDE</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaFinancas}{' '}<br />
                <strong>
                  SECRETARIA MUNICIPAL DE FINANÇAS, PLANEJAMENTO
                </strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaAssistencia}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE ASSISTÊNCIA SOCIAL</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaAgricultura}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE AGRICULTURA</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaEsporte}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE ESPORTE, LAZER E
                PROMOÇÃO A JUVENTUDE </strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaAdministracao}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE ADMINISTRAÇÃO</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaInfra}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE INFRA ESTRUTURA</strong>
              </p>
            </div>
          </div>

          <div className="right-column">
            <div className="section">
              <p>
                {dados.procuradoria}{' '}<br />
                <strong>PROCURADORIA GERAL DO MUNICÍPIO</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.controladoria}{' '}<br />
                <strong>CONTROLADORIA GERAL DO MUNICÍPIO</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaArticulacao}{' '}<br />
                <strong>SECRETARIA MUNICIPAL DE ARTICULAÇÃO POLÍTICA</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.assessoriaComunicacao}{' '}<br />
                <strong>ASSESSORIA DE COMUNICAÇÃO</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.secretariaTransito}{' '}<br />
                <strong>
                  SECRETARIA MUNICIPAL DE TRANSITO, TRANSPORTE E SUPRIMENTO
                </strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.servicoAgua}{' '}<br />
                <strong>SERVIÇO AUTONOMO DE ÁGUA E ESGOTO - SAAE</strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.instituto}{' '}<br />
                <strong>
                  INSTITUTO DE PREVIDENCIA DOS SERVIDORES PUBLICOS DO MUNICIPIO
                  DE BOCA DA MATA – AL – BOCADAMATA PREV
                </strong>
              </p>
            </div>
            <div className="section">
              <p>
                {dados.diarioOficial}<br /> <strong>DIÁRIO OFICIAL</strong>
                </p>
            </div>
          </div>
        </div>
        </main>
        <div className="page-container">
          <div className="text-page">
            <div className="page-header">
              <p className="titulo">COMISSÃO PERMANENTE DE LICITAÇÃO - CPL</p>
              <div className="linha-preta"></div>
              <p className="prefeitura-nome">PREFEITURA DE BOCA DA MATA-AL</p>
              <p className="aviso-titulo">AVISO DE DISPENSA DE LICITAÇÃO – REMARCAÇÃO DE DATA</p>
            </div>

            <div className="page-content">
              <p className="dispensa-info">
                DISPENSA ELETRÔNICA Nº 61/2024 – Processo Administrativo Nº 10160014/2024 <br/>
                Tipo: Menor Preço Por Item – Objeto: CONTRATAÇÃO DE EMPRESA <br/>
                ESPECIALIZADA NO FORNECIMENTO DE KIT CAIXA CONVITE, COM O FIM DE <br/>
                ATENDER ÀS NECESSIDADES DA SECRETARIA MUNICIPAL DE <br/>
                ADMINISTRAÇÃO DE BOCA DA MATA – ALAGOAS. O município de Boca da <br/>
                Mata, informa que por motivos técnicos remarca a Dispensa Eletrônica Nº 61/2024 <br/>
                , que iria ocorrer em 04/11/2024, para o dia <span className="bold-text">06 de NOVEMBRO de 2024 das 09:00h <br/>
                às 15:00h</span> (horário de Brasília). <br/>
              </p>
              <p className="edital-info">
                O edital encontra-se disponível no site http://www.bnc.org.br; PNCP, <br/>
                http://www.bocadamata.al.gov.br; na sede da CPL, situada na rua Rosalvo Pinto <br/>
                Dâmaso, nº 224, Praça Padre Cícero, Boca da Mata/AL das 08 às 12 horas em dias <br/>
                úteis, e mediante solicitação enviada ao e-mail:cplbocadamata2020@gmail.com. <br/>
                Pregoeira – Juciana Bezerra.
              </p>
              {/* Continue adicionando mais conteúdo conforme necessário */}
            </div>
              <footer>
                <div className="footer-line-Subsequentes"></div>
                <div className="page-number-Subsequentes">Página {currentPage} de {totalPages}</div>
              </footer>
            </div>
        </div>
    </div>
  );
};
export default ModeloPrimeiraPagina;