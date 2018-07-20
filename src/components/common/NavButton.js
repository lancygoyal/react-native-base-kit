/**
 * @file: NavButton.js
 * @description: Navigation Bar Buttons.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

/* @flow */

'use strict';

import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Constants from '../../constants';
import Text from './Text';

const NavButton = props => {
  let { onPress, style, textStyle, text, icon } = props;
  return (
    <TouchableOpacity
      hitSlop={Constants.BaseStyle.HIT_SLOP}
      underlayColor={Constants.Colors.Transparent}
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {text.length > 0 ? (
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      ) : (
        <Image source={icon} style={[styles.iconStyle, props.iconStyle]} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.Colors.Transparent,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 12,
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 2,
    ...Platform.select({
      android: {
        marginTop: 0
      },
      ios: {
        marginTop:
          Constants.BaseStyle.DEVICE_HEIGHT === 812
            ? (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4.2
            : (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2.5
      }
    })
  },
  iconStyle: {
    height: Constants.BaseStyle.IS_TABLET
      ? (Constants.BaseStyle.DEVICE_WIDTH / 100) * 8
      : (Constants.BaseStyle.DEVICE_WIDTH / 100) * 10,
    width: Constants.BaseStyle.IS_TABLET
      ? (Constants.BaseStyle.DEVICE_WIDTH / 100) * 8
      : (Constants.BaseStyle.DEVICE_WIDTH / 100) * 10,
    alignSelf: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
    backgroundColor: Constants.Colors.Transparent,
    color: Constants.Colors.LightBlack,
    ...Constants.Fonts.contentBold
  }
});

NavButton.defaultProps = {
  style: {},
  textStyle: {},
  buttonStyle: {},
  iconStyle: {},
  text: '',
  icon: Constants.Images.back
};

export default NavButton;
