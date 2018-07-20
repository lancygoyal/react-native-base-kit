/*
 * @file: Home.js
 * @description: home screen
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Detail')} />
      </View>
    );
  }
}
