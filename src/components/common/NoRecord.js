/**
 * @file: NoRecord.js
 * @description: Show when we dont have any records.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { StyleSheet, View, Text as DefaultText, Image } from 'react-native';
import Constants from '../../constants';
import Text from './Text';

const NoRecord = props => {
  const { container, headerStyle, infoStyle, imageStyle, image, info, headerInfo } = props;
  return (
    <View style={[styles.container, container]}>
      <Image resizeMode={'contain'} style={[styles.imageStyle, imageStyle]} source={image} />
      <Text style={[styles.headerStyle, headerStyle]}>{headerInfo}</Text>
      <Text style={[styles.infoStyle, infoStyle]}>{info}</Text>
    </View>
  );
};

NoRecord.defaultProps = {
  image: Constants.Images.noDataPlaceholder,
  headerInfo: 'Constants.i18n.noRecords.noResults',
  info: '',
  container: {},
  infoStyle: {},
  headerStyle: {},
  imageStyle: {}
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    height: Constants.BaseStyle.DEVICE_WIDTH,
    width: Constants.BaseStyle.DEVICE_WIDTH
  },
  headerStyle: {
    textAlign: 'center',
    color: Constants.Colors.LightGray,
    ...Constants.Fonts.contentBold
  },
  infoStyle: {
    textAlign: 'center',
    color: Constants.Colors.LightGray,
    marginHorizontal: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
    ...Constants.Fonts.regularBold
  },
  imageStyle: {
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 70,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 70,
    alignSelf: 'center'
  }
});

export default NoRecord;
