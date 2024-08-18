import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('/api/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post('/api/contacts', contact);
  return response.data;
});

export const removeContact = createAsyncThunk('contacts/removeContact', async (id) => {
  await axios.delete(`/api/contacts/${id}`);
  return id;
});










