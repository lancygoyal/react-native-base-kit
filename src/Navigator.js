/*
 * @file: Navigator.js
 * @description: Configure and connecting react navigation with redux store and routes
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import { createStackNavigator } from 'react-navigation';
import routes from './config/routes';

/**
 * React Navigation's Configuration
 * */
const stackNavigatorConfiguration = {
//   headerMode: 'none',
  mode: 'card',
//   initialRouteName: 'Home',
  navigationOptions: {
    gesturesEnabled: false,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

export default createStackNavigator(routes, stackNavigatorConfiguration);
