/*
 * @file: index.js
 * @description: App's root to bind store with app using provider.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from './components/common';
import Root from './Root';
import Notification from 'react-native-in-app-notification';
import configureStore from './config/configureStore';
// import { checkPermissions } from './utilities/Locations';
import { pushNotificationInit, pushNotificationRemove } from './utilities/PushNotification';
import Constants from './constants';
import './utilities/StringEn';

/**
 * @function: Configuring redux store.
 * */
const { store, persistor } = configureStore();

/*
 * Main component
 * */

export default class Application extends Component {
  constructor(props) {
    super(props);
    /**
     * @function: Initiliazing location utility
     * */
    // checkPermissions(store);
    // console.disableYellowBox = true; // eslint-disable-line
  }

  componentDidMount() {
    // this.initilizePushNotification();
  }

  componentWillUnmount() {
    // pushNotificationRemove(); // Stop listening push notification events
  }

  /**
   * @function: Initiliazing push notification utility
   * */
  initilizePushNotification = () => {
    if (Platform.OS === 'ios') {
      pushNotificationInit(store);
    } else {
      pushNotificationInit(store, this.notification);
    }
  };

  /**
   * @function: Default render function
   * */
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <Root />
          </PersistGate>
        </Provider>
        {Platform.OS === 'android' && (
          <Notification
            backgroundColour={Constants.Colors.White}
            ref={ref => (this.notification = ref)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White
  }
});
