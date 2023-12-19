import React from 'react'

export default function MainPage  () {

  const handleButtonClick = () => {
    console.log('Botão clicado!');
  };


  return (
    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Página 3D Interativa</h1>
      <button
        style={{ backgroundColor: '#3498db', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.3rem' }}
        onClick={handleButtonClick}
      >
        Clique em mim
      </button>
    </div>
  );
}

