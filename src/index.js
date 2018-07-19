/**
 *
 * @format
 * @flow
 * 
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './config/configureStore';
import RootComponent from './App';

const { store, persistor } = configureStore();

export default class DetailsScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    );
  }
}