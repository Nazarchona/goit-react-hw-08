import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global/users';

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async (_, { getState }) => {
  const { token } = getState().auth;
  const response = await axios.post(`${API_URL}/logout`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, { getState }) => {
  const { token } = getState().auth;
  const response = await axios.get(`${API_URL}/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});













