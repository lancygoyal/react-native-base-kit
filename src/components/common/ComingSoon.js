/*
 * @file: ComingSoon.js
 * @description: Default Under Construction page for the application.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../../constants';
import Text from './Text';

const ComingSoon = props => {
  let { onPress, message, numberOfLines } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.message} numberOfLines={numberOfLines}>
            {message}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ComingSoon.defaultProps = {
  message: 'Coming Soon',
  backgroundColor: '#fff',
  numberOfLines: 3
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.Colors.Transparent
  },
  message: {
    textAlign: 'center',
    ...Constants.Fonts.title,
    color: Constants.Colors.Black
  }
});

export default ComingSoon;
