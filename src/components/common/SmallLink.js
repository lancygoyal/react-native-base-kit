/*
 * @file: SmallLink.js
 * @description: Simple component for showing small links to navigate to other screen.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React from 'react';
import { TouchableOpacity, StyleSheet, Text as DefaultText } from 'react-native';
import Constants from '../../constants';
import Text from './Text';

const SmallLink = props => {
  const { text, onPress, textStyle, linkStyle } = props;
  return (
    <TouchableOpacity style={[styles.linkStyle, linkStyle]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: Constants.Colors.AccentColor,
    ...Constants.Fonts.tiny
  }
});

SmallLink.defaultProps = {
  linkStyle: {},
  textStyle: {},
  text: ''
};

export default SmallLink;
