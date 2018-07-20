/**
 * @file: Timer.js
 * @description: WebView to load web pages.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

'use strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from '../../constants';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import moment from 'moment';
import Text from './Text';

class Timer extends React.Component {
  timer: number;
  mixin: [TimerMixin];
  static defaultProps = {
    textStyle: {},
    style: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      startTime: props.startTime
    };
  }

  componentWillMount() {
    this.runTimer();
  }

  componentWillUnmount() {
    this.clearInterval(this.timer);
  }

  /*
  * @function : Start time before component mount.
  */

  runTimer = () => {
    let self = this;
    let runTime = new Date().getTime();
    this.timer = this.setInterval(() => {
      if (self.state.startTime - 1 < 1) {
        self.props.onFinish();
        self.clearInterval(this.timer);
        self.setState({ startTime: 0 });
        return;
      }
      let duration = moment.duration(moment(new Date().getTime(), 'x').diff(moment(runTime, 'x')));
      let mins = duration.asSeconds().toFixed(0);
      self.setState({ startTime: self.props.startTime - mins });
    }, 1000);
  };

  render() {
    let time = this.state.startTime;
    let minutes = Math.floor(time / 60);
    return (
      <View style={[styles.style, this.props.style]}>
        <Text style={[styles.textStyle, this.props.textStyle]}>
          {('0' + minutes).slice(-2)}
          {':'}
          {('0' + (time - minutes * 60)).slice(-2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flexDirection: 'row'
  },
  textStyle: {
    color: Constants.Colors.AccentColor,
    ...Constants.Fonts.tinyLargeBold,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 30,
    alignSelf: 'center',
    backgroundColor: Constants.Colors.Transparent,
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5
  }
});

ReactMixin(Timer.prototype, TimerMixin);

export default Timer;
