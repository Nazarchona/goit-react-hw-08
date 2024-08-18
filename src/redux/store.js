import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/filtersSlice';

// Конфігурація persist для auth reducer
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Зберігаємо тільки token
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);












