/*
 * @file: Detail.js
 * @description: detail screen
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Detail')}
        />
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
