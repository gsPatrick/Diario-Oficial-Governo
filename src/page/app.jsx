import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from '../component/Formulario.jsx'
import FormularioPaginasSubsequentes from '../component/FormularioPaginasSubsequentes.jsx';
import GeradorPDF from '../component/GeradorPDF.jsx';
import PreviewPrimeiraPagina from '../preview/PreviewPrimeiraPagina.jsx'; // Importe os novos componentes
import PreviewPaginasSubsequentes from '../preview/PreviewPaginasSubsequentes.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/formulario-paginas-subsequentes" element={<FormularioPaginasSubsequentes />} />
        <Route path="/gerador-pdf" element={<GeradorPDF />} /> {/* Adicione a nova rota */}
        <Route path="/preview-primeira-pagina" element={<PreviewPrimeiraPagina />} /> {/* Rota para o preview da primeira página */}
        <Route path="/preview-paginas-subsequentes" element={<PreviewPaginasSubsequentes />} /> {/* Rota para o preview das páginas subsequentes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;