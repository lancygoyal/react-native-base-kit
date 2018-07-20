/**
 * @file: CardView.js
 * @description: Used as container for shadow.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../../constants';

const CardView = props => {
  return <View style={[styles.container, props.containerStyle]}>{props.children}</View>;
};

CardView.defaultProps = {
  containerStyle: {}
};

const styles = StyleSheet.create({
  container: {
    margin: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
    ...Constants.BaseStyle.SHADOW_STYLE,
    backgroundColor: Constants.Colors.White
  }
});

export default CardView;
