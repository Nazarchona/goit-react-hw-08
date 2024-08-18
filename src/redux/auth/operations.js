import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('/api/auth/login', credentials);
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/api/auth/logout');
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async () => {
  const response = await axios.get('/api/auth/refresh');
  return response.data;
});

















