// src/pages/UserEditPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUserById, updateUser } from '../features/user/userSlice';

const UserEditPage: React.FC = () => {
  const { userId } = useParams();
  const selectedUser = useAppSelector((state) => state.user.selectedUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(selectedUser?.name.firstname || '');
  const [lastName, setLastName] = useState(selectedUser?.name.lastname || '');
  const [email, setEmail] = useState(selectedUser?.email || '');

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (selectedUser) {
      setFirstName(selectedUser.name.firstname);
      setLastName(selectedUser.name.lastname);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (userId) {
      dispatch(
        updateUser({
          id: userId,
          name: { firstname: firstName, lastname: lastName },
          email,
        }),
      );
      navigate('/users');
    }
  };

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Editar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Primeiro Nome:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Sobrenome:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default UserEditPage;
