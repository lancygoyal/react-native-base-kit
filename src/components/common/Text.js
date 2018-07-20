/*
 * @file: Text.js
 * @description: Simple component for showing text information.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

/* @flow */

'use strict';

import React from 'react';
import { Text as DefaultText, StyleSheet } from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';

const Text = props => {
  const { children, style, numberOfLines } = props;
  return (
    <DefaultText numberOfLines={numberOfLines} style={[styles.textStyle, style]}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: Constants.Colors.Black,
    ...Constants.Fonts.tiny,
    backgroundColor: Constants.Colors.Transparent
  }
});

Text.defaultProps = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: {},
  numberOfLines: 2,
  onPress: () => {}
};

export default Text;
