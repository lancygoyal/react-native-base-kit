/*
 * @file: configureStore.dev.js
 * @description: redux configuration for development.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../redux';

export default () => {
  const store = createStore(reducer, compose(applyMiddleware(logger, thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
};
