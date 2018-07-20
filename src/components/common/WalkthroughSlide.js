/**
 * @file: WalkthroughSlide.js
 * @description: Single Slide in walkthrough.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../../constants';
import { Button, Text } from '../common';

const WalkthroughSlide = props => {
  const { headerText, descText, next, onNextPress, onSkipPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTextStyle}>{headerText}</Text>
        <Text style={styles.descTextStyle}>{descText}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.buttonStyle}
          buttonName={Constants.i18n.common.skip}
          onPress={onSkipPress}
        />
        <Button
          style={styles.buttonStyle}
          buttonName={next ? Constants.i18n.common.next : Constants.i18n.common.start}
          onPress={onNextPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.Transparent,
    justifyContent: 'flex-end'
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: Constants.BaseStyle.DEVICE_WIDTH,
    justifyContent: 'space-between'
  },
  headerTextStyle: {
    ...Constants.Fonts.subtitleBold,
    color: Constants.Colors.White
  },
  descTextStyle: {
    ...Constants.Fonts.regular,
    color: Constants.Colors.GhostWhite,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 0.5,
    textAlign: 'center',
    alignSelf: 'center'
  },
  buttonStyle: {
    width: (Constants.BaseStyle.DEVICE_WIDTH * 20) / 100,
    backgroundColor: Constants.Colors.Transparent
  }
});

WalkthroughSlide.defaultProps = {
  headerText: '',
  descText: '',
  next: false
};

export default WalkthroughSlide;
