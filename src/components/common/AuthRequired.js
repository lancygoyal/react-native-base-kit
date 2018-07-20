/*
 * @file: AuthRequired.js
 * @description: Auth Module when user visit as guest.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from '../../constants';
import Text from './Text';
import Button from './Button';

const AuthRequired = props => {
  let { numberOfLines, message, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.message} numberOfLines={numberOfLines}>
          {message}
        </Text>
        <Button buttonName={'Go to Sign in.'} style={styles.buttonStyle} onPress={onPress} />
      </View>
    </View>
  );
};

AuthRequired.defaultProps = {
  message: 'Please sign in to access this feature.',
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
    ...Constants.Fonts.subtitleBold,
    color: Constants.Colors.Black
  },
  buttonStyle: {
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 40
  }
});

export default AuthRequired;
