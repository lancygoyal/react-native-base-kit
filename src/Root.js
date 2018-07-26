/**
 * @file: Root.js
 * @description: Adding react navigation and other abilities into the app
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Progress } from './components/common';
import Navigator from './Navigator';
import NavigationService from './utilities/NavigationService';
import Constants from './constants';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Progress />
        <Navigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
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
