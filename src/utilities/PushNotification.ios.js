/*
 * @file: PushNotification.ios.js
 * @description: Initiliazing push notification , Redirection on push notifications
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import FCM, { FCMEvent } from 'react-native-fcm';
import _ from 'lodash';
import Idx from './Idx';
import * as userActions from '../redux/user/actions';

let notificationListener, refreshTokenListener;

/**
 * Initiliazing push notification
 */

export function pushNotificationInit(store) {
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
    if (res.opened_from_tray) {
      setTimeout(() => {
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
}
