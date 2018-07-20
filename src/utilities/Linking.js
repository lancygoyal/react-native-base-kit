/*
 * @file: Linking.js
 * @description: For handle push notification functionality
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import { Linking } from 'react-native';

export function telephone(phoneNumber) {
  Linking.canOpenURL('tel:' + phoneNumber)
    .then(supported => {
      if (supported) {
        return Linking.openURL('tel:' + phoneNumber);
      }
    })
    .catch(err => {});
}

export function webpage(url) {
  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url);
      }
    })
    .catch(err => {});
}
