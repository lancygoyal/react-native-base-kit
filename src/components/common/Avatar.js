/**
 * @file: Avatar.js
 * @description: Avatar Image for application.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Constants from '../../constants';
import Connection from '../../config/connection';
import PropTypes from 'prop-types';
import Text from './Text';

const Avatar = props => {
  let { user, localPath, style } = props;
  let defaultImage = Constants.Images.customer;
  if (localPath !== '') {
    return <Image source={{ uri: localPath }} style={[defaultStyles.style, style]} />;
  }

  if (!user) {
    return <Image source={defaultImage} style={[defaultStyles.style, style]} />;
  }

  if (user && user.photo === '') {
    return renderInitials(user, style);
  }

  defaultImage = Connection.getMedia(user.photo);

  if (user.photo && user.photo.indexOf('http') > -1) {
    defaultImage = user.photo;
  }
  return <Image source={{ uri: defaultImage }} style={[defaultStyles.style, style]} />;
};

const renderInitials = (user, style) => {
  const { avatarName, avatarColor } = setAvatarColor(user);
  return (
    <View
      style={[
        defaultStyles.style,
        style,
        { backgroundColor: avatarColor },
        defaultStyles.initailsStyle
      ]}
    >
      <Text style={defaultStyles.initials}>{avatarName}</Text>
    </View>
  );
};

const setAvatarColor = user => {
  let userName = '';
  if (user.name) {
    userName = user.name;
  } else {
    userName = user.firstName + ' ' + user.lastName || '';
  }

  const name = userName.toUpperCase().split(' ');
  let avatarName, avatarColor;
  if (name.length === 1) {
    avatarName = `${name[0].charAt(0)}`;
  } else if (name.length > 1) {
    avatarName = `${name[0].charAt(0)}${name[1].charAt(0)}`;
  } else {
    avatarName = '';
  }
  let sumChars = 0;
  for (let i = 0; i < userName.length; i++) {
    sumChars += userName.charCodeAt(i);
  }
  // inspired by https://github.com/wbinnssmith/react-user-avatar
  // colors from https://flatuicolors.com/
  const colors = [
    '#e67e22', // carrot
    '#2ecc71', // emerald
    '#3498db', // peter river
    '#8e44ad', // wisteria
    '#e74c3c', // alizarin
    '#1abc9c', // turquoise
    '#2c3e50' // midnight blue
  ];

  avatarColor = colors[sumChars % colors.length];
  return {
    avatarName,
    avatarColor
  };
};

const defaultStyles = StyleSheet.create({
  style: {
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 30,
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 30,
    borderRadius: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 15
  },
  initailsStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  initials: {
    ...Constants.Fonts.subtitleBold,
    color: Constants.Colors.White
  }
});

Avatar.defaultProps = {
  localPath: '',
  user: null,
  style: {},
  container: {},
  resizeMode: 'contain'
};

export default Avatar;
