// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserCreatePage from './pages/UserCreatePage';
import UserEditPage from './pages/UserEditPage';
import UserDeletePage from './pages/UserDeletePage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
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
    <Router>
      <div>
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<UserCreatePage />} />
          <Route path="/users/edit/:userId" element={<UserEditPage />} />
          <Route path="/users/delete/:userId" element={<UserDeletePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
