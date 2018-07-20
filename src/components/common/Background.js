/**
 * @file: background.js
 * @description: Use to show background of application pages.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Constants from '../../constants';

const Background = props => {
  return (
    <Image source={props.image} style={[styles.container, props.style]}>
      {props.children}
    </Image>
  );
};

Background.defaultProps = {
  style: {},
  image: Constants.Images.walkthroughImage1
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: Constants.BaseStyle.DEVICE_HEIGHT
  }
});

export default Background;
