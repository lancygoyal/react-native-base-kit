/*
 * @file: index.js
 * @description: default data for the application
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

export default {
  BaseStyle: require('./BaseStyle'),
  Colors: require('./Colors'),
  Fonts: require('./Fonts'),
  i18n: require('./i18n'),
  Images: require('./Images'),
  MapStyle: require('./MapStyle'),
  DevKeys: require('./DevlopmentKeys'),
  Settings: require('./Settings'),
  Delta: {
    latitude: 1,
    longitude: 1
  },
  ResendOTPTime: 59 // seconds
};
