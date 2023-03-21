import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUserById, deleteUser } from '../features/user/userSlice';

const UserDeletePage: React.FC = () => {
  const { userId } = useParams();
  const selectedUser = useAppSelector((state) => state.user.selectedUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  const handleDelete = () => {
    if (userId) {
      dispatch(deleteUser(userId));
      navigate('/users');
    }
  };

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Deletar Usuário</h1>
      <p>Tem certeza de que deseja deletar o usuário {selectedUser.name.firstname} {selectedUser.name.lastname}?</p>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default UserDeletePage;
