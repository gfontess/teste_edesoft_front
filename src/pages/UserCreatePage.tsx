import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { createUser } from '../features/user/userSlice';

const UserCreatePage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      createUser({
        name: { firstname: firstName, lastname: lastName },
        email,
        age,
        address,
        city,
        phone,
      }),
    );
    navigate('/users');
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '6px 12px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '6px 12px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #007bff',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Primeiro Nome:
          <input
            style={inputStyle}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Sobrenome:
          <input
            style={inputStyle}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Idade:
          <input
            style={inputStyle}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Endereço:
          <input
            style={inputStyle}
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Cidade:
          <input
            style={inputStyle}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Telefone:
          <input
            style={inputStyle}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};
export default UserCreatePage;
