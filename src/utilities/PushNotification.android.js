/*
 * @file: PushNotification.android.js
 * @description: Initiliazing push notification , Redirection on push notifications
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import { AppState } from 'react-native';
import FCM, { FCMEvent } from 'react-native-fcm';
import _ from 'lodash';
import Idx from './Idx';
import * as userActions from '../redux/user/actions';
import Constants from '../constants';

let notificationListener, refreshTokenListener;
let appState = AppState.currentState;

/**
 * Initiliazing push notification
 */

export function pushNotificationInit(store, notificationRef) {
  // Listen to the applciation state changes.
  AppState.addEventListener('change', nextAppState => {
    appState = nextAppState;
  });

  FCM.requestPermissions(); // for iOS
  // FCM token on intial app load.
  FCM.getFCMToken().then(token => {
    if (token) {
      store.dispatch(userActions.setDeviceToken(token));
    }
  });

  // Receive Notification in kill state, inactive state or bankground state.
  FCM.getInitialNotification().then(res => {
    if (Idx(res, _ => _.fcm.action)) {
      setTimeout(() => {
        onNotificationRedirection(res, store);
      }, 500);
    }
  });

  // Receive Notification in forground
  notificationListener = FCM.on(FCMEvent.Notification, async res => {
    // If current state is active show local notification.
    if (appState === 'active') {
      notificationRef.show({
        title: res.fcm.title, // Notification Title
        message: res.fcm.body, // Notification Message
        onPress: () => onNotificationRedirection(res, store), // On Press Event.
        icon: Constants.Images.loginLogo,
        vibrate: true
      });
    }
    if (res.opened_from_tray) {
      setTimeout(function() {
        onNotificationRedirection(res, store);
      }, 500);
    }
  });

  // Fcm token may not be available on first load, catch it here
  refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
    if (token) {
      store.dispatch(userActions.setDeviceToken(token));
    }
  });
}

/**
 * Redirection on Notification Tap.
 */

export function onNotificationRedirection(res, store) {
  if (Idx(store.getState().user, _ => _.userDetails)) {
    // navigate user.
  }
  //Finish Notification
  if (_.isFunction(res.finish)) {
    res.finish();
  }
}

/**
 * Stop listening push notification events
 */

export function pushNotificationRemove(store) {
  notificationListener.remove();
  refreshTokenListener.remove();
  // Remove to the applciation state changes listener.
  AppState.removeEventListener('change', nextAppState => {
    appState = nextAppState;
  });
}
