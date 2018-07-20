/*
 * @file: Loader.js
 * @description: Top header component for showing statusbar, back button, title etc
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loader extends Component {
  render() {
    return <Spinner />;
  }
}
