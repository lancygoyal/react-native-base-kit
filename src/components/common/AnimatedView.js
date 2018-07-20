/**
 * @file: AnimatedView.js
 * @description: Animated view is used for animations in application.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Constants from '../../constants';
import PropTypes from 'prop-types';

const AnimatedView = props => {
  const { children, animationType, style } = props;
  return (
    <View style={[styles.container, style]}>
      <Animatable.View animation={animationType} duration={600}>
        {children}
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 20,
    borderColor: Constants.Colors.LightGray,
    backgroundColor: Constants.Colors.Translucent,
    width: Constants.BaseStyle.DEVICE_WIDTH
  }
});

AnimatedView.defaultProps = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  animationType: 'bounceInUp',
  style: {}
};

export default AnimatedView;
