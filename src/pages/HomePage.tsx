import React from 'react';
import { CSSProperties } from 'react';

const HomePage: React.FC = () => {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    textAlign: 'center',
  };

  const titleStyle: CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const descriptionStyle: CSSProperties = {
    fontSize: '1.2rem',
    maxWidth: '800px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Bem-vindo(a) ao CRUD de Usuários</h1>
      <p style={descriptionStyle}>
        Esta aplicação foi desenvolvida para gerenciar usuários de forma simples e rápida. Com ela,
        você pode criar, editar e excluir usuários, além de visualizar a lista completa de
        usuários cadastrados. Utilize o menu de navegação para acessar as diferentes
        funcionalidades disponíveis.
      </p>
    </div>
  );
};

export default HomePage;
