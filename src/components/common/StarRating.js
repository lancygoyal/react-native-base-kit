/*
 * @file: StarRating.js
 * @description: Contains star rating component.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

/* @flow */

'use strict';

import React from 'react';
import { View, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import Constants from '../../constants';
import _ from 'lodash';

class StarRating extends React.Component {
  static defaultProps = {
    rating: 0,
    max: 5,
    editable: true,
    style: {},
    starStyle: {},
    onRate: () => {},
    starChecked: Constants.Images.starYellow, // image
    starUnchecked: Constants.Images.starGrey // image
  };

  constructor(props) {
    super(props);
    this.state = {
      rating: Math.round(this.props.rating)
    };
  }

  /*
  * @function : Trigger when user tap on rate icons . accepts numbers only.
  */

  onRate = rating => {
    this.setState({ rating: rating + 1 });
    if (_.isFunction(this.props.onRate)) {
      this.props.onRate(rating + 1);
    }
  };
  /*
  * @function : Render the stars.
  */

  renderIcons = () => {
    let { editable, max, starChecked, starUnchecked } = this.props;
    let starStyle = [styles.starStyle, this.props.starStyle];
    let icons = [];
    for (let i = 0; i < max; i++) {
      icons.push(
        <TouchableWithoutFeedback
          disabled={!editable}
          key={i}
          style={styles.starContainerStyle}
          onPress={() => this.onRate(i)}
        >
          <Image
            style={starStyle}
            source={this.state.rating > i ? starChecked : starUnchecked}
            resizeMode={'contain'}
          />
        </TouchableWithoutFeedback>
      );
    }
    return icons;
  };

  render() {
    const containerStyle = [styles.container, this.props.style];
    return <View style={containerStyle}>{this.renderIcons()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  starStyle: {
    marginHorizontal: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 0.5,
    marginVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 0.5,
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4.5,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4.5
  },
  starContainerStyle: {
    height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4.5,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4.5,
    marginBottom: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 0.5
  }
});

export default StarRating;
