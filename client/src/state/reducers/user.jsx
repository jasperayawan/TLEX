import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  _id: '',
  username: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state._id = action.payload._id;
      state.username = '',
      state.email = ''
    }
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
