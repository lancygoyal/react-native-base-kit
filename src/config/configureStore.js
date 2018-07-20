/*
 * @file: configureStore.js
 * @description: redux configuration store.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
