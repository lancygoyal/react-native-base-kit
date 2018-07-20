/**
 * @file: Root.js
 * @description: Adding react navigation and other abilities into the app
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import Navigator from './Navigator';
import { Progress } from './components/common';
import Constants from './constants';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' && <StatusBar backgroundColor={Constants.Colors.AccentColor} />}
        <Progress />
        <Navigator />
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
