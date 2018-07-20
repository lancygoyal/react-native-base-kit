/**
 * @file: FormTextInput.js
 * @description: Component for Text Inputs.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { View, Image, StyleSheet, TextInput, Platform } from 'react-native';
import Constants from '../../constants';

export default class FormTextInput extends React.Component {
  static defaultProps = {
    autoFocus: false,
    iconStyle: {},
    secureTextEntry: false,
    maxLength: 250,
    value: '',
    autoCorrect: false,
    onKeyPress: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    onChange: () => {},
    placeholderTextColor: Constants.Colors.Gray
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
          this.props.style,
          {
            borderColor: this.state.isFocused
              ? Constants.Colors.AccentColor
              : Constants.Colors.BlurGrey
          }
        ]}
      >
        {this.props.icon && (
          <Image
            resizeMode="contain"
            source={this.props.icon}
            style={[styles.iconStyle, this.props.iconStyle]}
          />
        )}
        <View style={styles.textInputContainer}>
          <TextInput
            ref={textInput => (this.textInput = textInput)}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            keyboardType={this.props.keyboardType}
            placeholder={this.props.placeholder}
            placeholderTextColor={
              this.props.placeholderTextColor
                ? this.props.placeholderTextColor
                : Constants.Colors.Gray
            }
            onChangeText={this.props.onChangeText}
            onChange={event => this.onChange(event)}
            value={this.props.value}
            onFocus={() => this.onFocus()}
            onBlur={() => this.setState({ isFocused: false })}
            style={[styles.textInputStyle, this.props.textInputStyle]}
            returnKeyType={this.props.returnKeyType}
            onSubmitEditing={this.props.onSubmitEditing}
            secureTextEntry={this.props.secureTextEntry}
            maxLength={this.props.maxLength}
            selectionColor={Constants.Colors.AccentColor}
            underlineColorAndroid={Constants.Colors.Transparent}
            autoFocus={this.props.autoFocus}
            onKeyPress={this.props.onKeyPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      android: {
        height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7
      },
      ios: {
        height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5
      }
    })
  },
  textInputContainer: {
    flex: 1
  },
  textInputStyle: {
    ...Constants.Fonts.regular,
    ...Platform.select({
      android: {
        height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7
      },
      ios: {
        height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5
      }
    })
  },
  iconStyle: {
    width: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.9,
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.9,
    marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5
  }
});
