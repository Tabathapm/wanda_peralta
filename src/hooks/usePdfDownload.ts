import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

export function usePdfDownload() {
  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    if (!pdfRef.current) return;

    const opt = {
      margin: 0,
      filename: 'CV-Wanda-Peralta.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fff',
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(pdfRef.current).save();
  };

  return { pdfRef, downloadPDF };
}