import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import authReducer from '../features/auth/authSlice';
import collectReducer from '../features/collect/collectSlice';
import requestReducer from '../features/request/requestSlice';

const reducers = combineReducers({
  auth: authReducer,
  collect: collectReducer,
  request: requestReducer,
});

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
