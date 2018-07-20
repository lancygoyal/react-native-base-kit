/*
 * @file: configureStore.prod.js
 * @description: redux configuration for production.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from '../redux';

export default () => {
  const store = createStore(reducer, compose(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
};
