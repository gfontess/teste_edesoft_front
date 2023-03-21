import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyle: 'none',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
  };

  return (
    <nav>
      <ul style={navStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" style={linkStyle}>
            Lista de Usuários
          </Link>
        </li>
        <li>
          <Link to="/users/create" style={linkStyle}>
            Cadastro de Usuário
          </Link>
        </li>
        <li>
          <Link to="/users/edit" style={linkStyle}>
            Editar Usuário
          </Link>
        </li>
        <li>
          <Link to="/users/delete" style={linkStyle}>
            Deletar Usuário
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
