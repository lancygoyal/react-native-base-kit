/*
 * @file: Logger.js
 * @description: Handle Location Permissions and save location to store.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

export default class Logger {
  static log(origin, info) {
    console.log(origin, info);
  }
  static debug(origin, info) {
    console.debug(origin, info);
  }
  static error(origin, info) {
    console.error(origin, info);
  }
  static warn(origin, info) {
    console.warn(origin, info);
  }
}
