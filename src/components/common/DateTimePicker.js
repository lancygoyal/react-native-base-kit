/*
 * @file: ModalDatePicker.js
 * @description: Contains time picker modal.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  DatePickerIOS,
  TimePickerAndroid
} from 'react-native';
import Constants from '../../constants';
import Text from './Text';
import moment from 'moment';

export default class DateTimePicker extends React.Component {
  static defaultProps = {
    openDatePicker: false,
    style: {},
    date: new Date(),
    maxDate: new Date(moment().add(100, 'years')),
    minDate: new Date(moment().subtract(100, 'years'))
  };

  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      openDatePicker: props.openDatePicker,
      timeZoneOffsetInHours: 6
    };
  }

  // Default render function
  render() {
    let maxDate = new Date(moment().subtract(13, 'years'));
    return (
      <View style={[styles.mainViewContainer, this.props.style]}>
        <View style={styles.modalContainer}>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity onPress={() => this.props.closePicker()}>
              <Text style={styles.cancelButton}>{'Cancel'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.closePicker(this.state.date);
              }}
            >
              <Text style={styles.doneButton}>{'Done'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.picker}>
            {Platform.OS === 'ios' ? (
              <DatePickerIOS
                date={this.state.date}
                maximumDate={this.props.maxDate}
                minimumDate={this.props.minDate}
                mode="date"
                onDateChange={date => this.setState({ date: date })}
              />
            ) : (
              <TimePickerAndroid
                date={this.state.date}
                mode="date"
                maximumDate={maxDate}
                onDateChange={date => this.setState({ date: date })}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewContainer: {
    position: 'absolute',
    bottom: 0,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: Constants.BaseStyle.DEVICE_HEIGHT
  },
  modalContainer: {
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 30,
    position: 'absolute',
    bottom: 0
  },
  modalButtonsContainer: {
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Constants.Colors.White,
    ...Constants.BaseStyle.SHADOW_STYLE,
    alignItems: 'center'
  },
  cancelButton: {
    textAlign: 'left',
    marginLeft: 15,
    color: Constants.Colors.Black,
    ...Constants.Fonts.regularBold
  },
  doneButton: {
    marginRight: 15,
    color: Constants.Colors.Black,
    textAlign: 'right',
    ...Constants.Fonts.regularBold
  },
  picker: {
    backgroundColor: Constants.Colors.White
  }
});
