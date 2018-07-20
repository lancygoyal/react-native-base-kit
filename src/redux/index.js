/*
 * @file: index.js
 * @description: reducers configration
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import encryptor from './encryptor';
import app from './app';
import user from './user';

const rootPersistConfig = {
  key: 'rn-app',
  storage: storage,
  transforms: [encryptor]
};

const rootReducer = combineReducers({
  app,
  user
});

export default persistReducer(rootPersistConfig, rootReducer);
