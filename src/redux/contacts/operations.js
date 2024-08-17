import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { getState }) => {
  const { token } = getState().auth;
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { getState }) => {
  const { token } = getState().auth;
  const response = await axios.post(API_URL, contact, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, { getState }) => {
  const { token } = getState().auth;
  await axios.delete(`${API_URL}/${contactId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return contactId;
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ id, ...contact }, { getState }) => {
  const { token } = getState().auth;
  const response = await axios.patch(`${API_URL}/${id}`, contact, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});









