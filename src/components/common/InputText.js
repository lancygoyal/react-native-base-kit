/**
 * @file: InputText.js
 * @description: Comonent for Text Inputs.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import Constants from '../../constants';

export default class InputText extends React.Component {
  static defaultProps = {
    autoFocus: false,
    iconStyle: {},
    secureTextEntry: false,
    maxLength: 250,
    value: '',
    autoCorrect: false,
    imageStyle: {},
    autoCapitalize: 'none',
    editable: true,
    labelText: '',
    image0: null,
    image: null,
    onKeyPress: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    onChange: () => {},
    placeholderTextColor: Constants.Colors.BlurGrey
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  /**
   * Text-input onFocus method.
   */

  onFocus() {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  /**
   * Text-input focus method for return key.
   */

  focus() {
    if (this.textInput) {
      this.textInput.focus();
    }
  }
  /**
   * Text-input onBlur method.
   */

  onBlur() {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }
  /**
   * Text-input onChange method.
   */

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    return (
      <View
        style={[
          styles.containerStyle,
          // this.props.containerStyle,
          {
            borderBottomColor: this.state.isFocused
              ? Constants.Colors.AccentColor
              : Constants.Colors.GhostWhite
          }
        ]}
      >
        {this.props.image0 && (
          <TouchableOpacity hitSlop={Constants.HIT_SLOP} onPress={this.props.onImagePress}>
            <Image
              resizeMode="contain"
              source={this.props.image0}
              style={[styles.image0Style, this.props.image0Style]}
            />
          </TouchableOpacity>
        )}
        <TextInput
          ref={textInput => (this.textInput = textInput)}
          autoFocus={this.props.autoFocus}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          keyboardType={this.props.keyboardType}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          onChangeText={this.props.onChangeText}
          onChange={event => this.onChange(event)}
          value={this.props.value}
          editable={!this.props.editable}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          style={[styles.textInputStyle, this.props.textInputStyle]}
          returnKeyType={this.props.returnKeyType}
          onSubmitEditing={this.props.onSubmitEditing}
          secureTextEntry={this.props.secureTextEntry}
          maxLength={this.props.maxLength}
          selectionColor={Constants.Colors.AccentColor}
          underlineColorAndroid={Constants.Colors.Transparent}
          onKeyPress={this.props.onKeyPress}
        />
        {this.props.image && (
          <TouchableOpacity
            activeOpacity={0.9}
            hitSlop={Constants.BaseStyle.HIT_SLOP}
            onPress={this.props.onImagePress}
          >
            <Image
              resizeMode="contain"
              source={this.props.image}
              style={[styles.imageStyle, this.props.imageStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    ...Platform.select({
      android: {
        bottom: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2
      },
      ios: {
        paddingTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1
      }
    })
  },
  textInputStyle: {
    ...Constants.Fonts.regular,
    flex: 1,
    color: Constants.Colors.Black,
    ...Platform.select({
      android: {
        height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7.8,
        top: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.3,
        left: Constants.BaseStyle.IS_TABLET ? 0 : (-Constants.BaseStyle.DEVICE_WIDTH / 100) * 1.2
      },
      ios: {
        height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3
      }
    })
  },
  imageStyle: {
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    width: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 6
  },
  image0Style: {
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    width: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5
  }
});
