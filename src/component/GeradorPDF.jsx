import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ModeloPrimeiraPagina from './ModeloPrimeiraPagina';
import ModeloPaginasSubsequentes from './ModeloPaginasSubsequentes';

function GeradorPDF() {
  const location = useLocation();
  const { formData, pages } = location.state || { formData: {}, pages: [] };

  const primeiraPaginaRef = useRef(null);
  const paginasSubsequentesRefs = useRef([]);
  const [paginasSubsequentesConvertidas, setPaginasSubsequentesConvertidas] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(1 + pages.length);
    setPaginasSubsequentesConvertidas(0);
  }, [formData, pages]);

  const handleGerarDocumento = async () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();

    const canvasPrimeiraPagina = await html2canvas(primeiraPaginaRef.current, { scale: 2 });
    const imgDataPrimeiraPagina = canvasPrimeiraPagina.toDataURL('image/png');
    doc.addImage(imgDataPrimeiraPagina, 'PNG', 0, 0, pageWidth, (canvasPrimeiraPagina.height * pageWidth) / canvasPrimeiraPagina.width);

    for (let i = 0; i < paginasSubsequentesRefs.current.length; i++) {
      doc.addPage();
      const canvasPaginaSubsequente = await html2canvas(paginasSubsequentesRefs.current[i], { scale: 2 });
      const imgDataPaginaSubsequente = canvasPaginaSubsequente.toDataURL('image/png');
      doc.addImage(imgDataPaginaSubsequente, 'PNG', 0, 0, pageWidth, (canvasPaginaSubsequente.height * pageWidth) / canvasPaginaSubsequente.width);
      setPaginasSubsequentesConvertidas((prev) => prev + 1);
    }

    doc.save('documento.pdf');
  };

  return (
    <div>
      <h1>Gerador de PDF</h1>

      <div>
        <div ref={primeiraPaginaRef}>
          <ModeloPrimeiraPagina dados={formData} currentPage={1} totalPages={totalPages} />
        </div>
        <div>
          {pages.map((page, index) => (
            <div key={index} ref={(el) => (paginasSubsequentesRefs.current[index] = el)}>
              {/* Passando formData para as páginas subsequentes */}
              <ModeloPaginasSubsequentes paginas={[page]} currentPage={index + 2} totalPages={totalPages} formData={formData} />
            </div>
          ))}
        </div>
      </div>

      <button 
  onClick={handleGerarDocumento}
  style={{
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '300px', // Defina a largura desejada
    margin: '20px auto' // Centraliza o botão
  }}
>
  Gerar Documento
</button>

      {paginasSubsequentesConvertidas > 0 && (
        <p>
          Convertidas {paginasSubsequentesConvertidas} de {pages.length} páginas subsequentes.
        </p>
      )}
    </div>
  );
}

export default GeradorPDF;