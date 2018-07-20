/*
 * @file: Button.js
 * @description: Button class.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../../constants';
import Text from './Text';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const Button = props => {
  let { disabled, onPress, style, buttonName, textStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.style, style]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  disabled: false,
  style: {},
  textStyle: {},
  buttonName: ''
};

const styles = StyleSheet.create({
  style: {
    height: (Constants.BaseStyle.DEVICE_HEIGHT * 7) / 100,
    backgroundColor: Constants.Colors.ButtonColor,
    width: (Constants.BaseStyle.DEVICE_WIDTH * 75) / 100,
    alignItems: 'center',
    justifyContent: 'center',
    ...ifIphoneX({
      height: (Constants.BaseStyle.DEVICE_HEIGHT * 6) / 100
    })
  },
  text: {
    ...Constants.Fonts.contentBold,
    color: Constants.Colors.White
  }
});

export default Button;
