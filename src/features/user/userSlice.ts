import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
}

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedUser: User | null; // Adicione esta linha
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
  selectedUser: null, // Adicione esta linha
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
      
    builder.addCase(getUserById.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.selectedUser = action.payload; // Altere esta linha
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || null;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
      state.selectedUser = null; // Altere esta linha
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || null;
    });
  },
});

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    return user;
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (updatedUser: { id: string; name: { firstname: string; lastname: string }; email: string }) => {
    const response = await fetch(`/api/users/${updatedUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
    const user = await response.json();
    return user;
  },
);

export const { createUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

