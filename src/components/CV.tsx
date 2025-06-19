import React, { forwardRef } from 'react';

const CV = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px',
      lineHeight: 1.6,
      color: '#333',
      backgroundColor: '#fff',
    }}
  >
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1 style={{ fontSize: '32px', color: '#0d9488', fontWeight: 'bold' }}>Wanda Peralta</h1>
      <p>Dirección: Titanic 2026, Código Postal: 1755, Argentina</p>
      <p>📧 wandaperalta850@gmail.com | 📱 +54 11 6902 3229</p>
    </div>

    <section style={{ marginBottom: '30px' }}>
      <h2 style={sectionTitle}>Educación</h2>
      <p><strong>2023–actualidad:</strong> Tecnicatura Universitaria en Anatomía Patológica, Universidad Nacional de La Matanza</p>
    </section>

    <section style={{ marginBottom: '30px' }}>
      <h2 style={sectionTitle}>Conocimientos</h2>
      <h3 style={subTitle}>PREPARACIÓN HISTOLÓGICA</h3>
      <ul style={listStyle}>
        <li>• Procesamiento de muestras</li>
        <li>• Inclusión de muestras</li>
        <li>• Corte con microtomo de rotación</li>
        <li>• Tinción</li>
        <li>• Organización y archivo de tacos de muestras</li>
        <li>• Gestión de informes correspondientes a muestras archivadas</li>
      </ul>

      <h3 style={subTitle}>PREPARACIÓN / DIAGNÓSTICO CITOLÓGICO</h3>
      <ul style={listStyle}>
        <li>• Screening citológico y no citológico</li>
        <li>• Procesado y fijación de punciones, líquidos y muestras ginecológicas</li>
        <li>• Manejo de centrífuga y citocentrífuga</li>
      </ul>
    </section>

    <section style={{ marginBottom: '30px' }}>
      <h2 style={sectionTitle}>Prácticas Laborales</h2>
      <ul style={listStyle}>
        <li><strong>2023:</strong> Hospital Cuenca Alta Néstor Kirchner, Cañuelas</li>
        <li><strong>2024:</strong> Centro de diagnóstico Rossi, Almagro</li>
        <li><strong>2025:</strong> Hospital Donación Francisco Santojanni, CABA</li>
        <li><strong>2025:</strong> Red Pathology, Hurlingham</li>
      </ul>
    </section>

    <section>
      <h2 style={sectionTitle}>Referencias</h2>
      <ul style={listStyle}>
        <li><strong>Natalia Veronica Cardoso</strong> — 11 3210 1575</li>
        <li><strong>Mara Yanina Resquin</strong> — 11 4412 1742</li>
        <li><strong>Debora Lagos Lamas</strong> — 11 3401 7423</li>
        <li><strong>Claudia Mabel Casco</strong> — 11 4052 9014</li>
      </ul>
    </section>
  </div>
));

const sectionTitle: React.CSSProperties = {
  fontSize: '20px',
  color: '#0d9488',
  borderBottom: '2px solid #0d9488',
  paddingBottom: '5px',
  marginBottom: '10px'
};

const subTitle: React.CSSProperties = {
  fontSize: '16px',
  color: '#333',
  margin: '10px 0 5px 0',
  fontWeight: 'bold'
};

const listStyle: React.CSSProperties = {
  paddingLeft: '20px',
  margin: 0,
  fontSize: '14px',
};

export default CV;