import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUsers } from '../features/user/userSlice';
import styles from './UserList.module.css';

const UserList: React.FC = () => {
    const users = useAppSelector((state) => state.user.users);
    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Lista de Usuários</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.name.firstname} ${user.name.lastname}`}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
