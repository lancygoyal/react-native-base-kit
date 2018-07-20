/**
 * @file: WebView.js
 * @description: Web view component for showing static context outside the application.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { WebView as DefaultWebView, StyleSheet } from 'react-native';
import Constants from '../../constants';
import Connection from '../../config/connection';

const WebView = props => {
  const { style, endpoint } = props;
  return (
    <DefaultWebView
      source={{ uri: Connection.getStaticContent(endpoint) }}
      style={[styles.container, style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: Constants.BaseStyle.DEVICE_HEIGHT,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    flex: 1,
    backgroundColor: Constants.Colors.White
  }
});

WebView.defaultProps = {
  style: {},
  endpoint: ''
};

export default WebView;
