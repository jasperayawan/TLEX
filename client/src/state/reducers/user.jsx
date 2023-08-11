import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.username = '',
      state.email = ''
    }
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
