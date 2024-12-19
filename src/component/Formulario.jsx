import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Formulario.css';


function Formulario() {
  // Estado inicial para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    date: '',
    edition: '',
    prefeito: '',
    vicePrefeito: '',
    secretariaEducacao: '',
    secretariaSaude: '',
    secretariaFinancas: '',
    secretariaAssistencia: '',
    secretariaEsporte: '',
    secretariaAgricultura: '',
    secretariaLazer: '',
    secretariaAdministracao: '',
    secretariaInfra: '',
    procuradoria: '',
    controladoria: '',
    secretariaArticulacao: '',
    assessoriaComunicacao: '',
    secretariaTransito: '',
    servicoAgua: '',
    instituto: '',
    diarioOficial: '',
  });

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', formData);
    // Substitua o console.log pela navegação:
    navigate('/formulario-paginas-subsequentes', { state: { formData } }); // Navega para a nova página e passa os dados do formulário como estado
  };    

  return (
    <div className="formulario-container">
      <h1 className="formulario-titulo">Cadastro de Dados</h1>
      <form onSubmit={handleSubmit} className="formulario-form">
        <div className="formulario-grupo">
          <label htmlFor="date">Data:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="formulario-grupo">
          <label htmlFor="edition">Edição:</label>
          <input type="text" id="edition" name="edition" value={formData.edition} onChange={handleChange} />
        </div>

        {/* Campos de texto para os demais dados */}
        <div className="formulario-grupo">
          <label htmlFor="prefeito">Prefeito:</label>
          <input type="text" id="prefeito" name="prefeito" value={formData.prefeito} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="vicePrefeito">Vice-Prefeito:</label>
          <input type="text" id="vicePrefeito" name="vicePrefeito" value={formData.vicePrefeito} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaEducacao">Secretaria de Educação:</label>
          <input type="text" id="secretariaEducacao" name="secretariaEducacao" value={formData.secretariaEducacao} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaSaude">Secretaria de Saúde:</label>
          <input type="text" id="secretariaSaude" name="secretariaSaude" value={formData.secretariaSaude} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaFinancas">Secretaria de Finanças:</label>
          <input type="text" id="secretariaFinancas" name="secretariaFinancas" value={formData.secretariaFinancas} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaAssistencia">Secretaria de Assistência Social:</label>
          <input type="text" id="secretariaAssistencia" name="secretariaAssistencia" value={formData.secretariaAssistencia} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaAgricultura">Secretaria de Agricultura:</label>
          <input type="text" id="secretariaAgricultura" name="secretariaAgricultura" value={formData.secretariaAgricultura} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaEsporte">Secretaria de Esporte:</label>
          <input type="text" id="secretariaEsporte" name="secretariaEsporte" value={formData.secretariaEsporte} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaAdministracao">Secretaria de Administração:</label>
          <input type="text" id="secretariaAdministracao" name="secretariaAdministracao" value={formData.secretariaAdministracao} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaInfra">Secretaria de Infraestrutura:</label>
          <input type="text" id="secretariaInfra" name="secretariaInfra" value={formData.secretariaInfra} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="procuradoria">Procuradoria:</label>
          <input type="text" id="procuradoria" name="procuradoria" value={formData.procuradoria} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="controladoria">Controladoria:</label>
          <input type="text" id="controladoria" name="controladoria" value={formData.controladoria} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaArticulacao">Secretaria de Articulação Política:</label>
          <input type="text" id="secretariaArticulacao" name="secretariaArticulacao" value={formData.secretariaArticulacao} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="assessoriaComunicacao">Assessoria de Comunicação:</label>
          <input type="text" id="assessoriaComunicacao" name="assessoriaComunicacao" value={formData.assessoriaComunicacao} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="secretariaTransito">Secretaria de Trânsito:</label>
          <input type="text" id="secretariaTransito" name="secretariaTransito" value={formData.secretariaTransito} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="servicoAgua">Serviço de Água e Esgoto:</label>
          <input type="text" id="servicoAgua" name="servicoAgua" value={formData.servicoAgua} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="instituto">Instituto de Previdência:</label>
          <input type="text" id="instituto" name="instituto" value={formData.instituto} onChange={handleChange} />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="diarioOficial">Diário Oficial:</label>
          <input type="text" id="diarioOficial" name="diarioOficial" value={formData.diarioOficial} onChange={handleChange} />
        </div>

        <button type="submit" className="formulario-botao">Salvar</button>
      </form>
    </div>
  );
}

export default Formulario;