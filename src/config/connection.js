/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

const localhost = 'localhost:3001',
  staging = '*.*.com:5013';

const runningUrl = process.env.NODE_ENV === 'production' ? staging : localhost,
  httpUrl = `http://${runningUrl}/`,
  socketUrl = `ws://${runningUrl}/`,
  apiBaseUrl = `http://${runningUrl}/api/v1`,
  mediaBaseUrl = `http://${runningUrl}/api/util/file/`;

export default class Connection {
  static getBaseUrl() {
    return httpUrl;
  }

  static getResturl() {
    return apiBaseUrl;
  }

  static getSocketUrl() {
    return socketUrl;
  }

  static getMedia(fileId) {
    return mediaBaseUrl + fileId;
  }

  static getStaticContent(url) {
    return httpUrl + url;
  }
}
