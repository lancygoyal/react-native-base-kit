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
// const stackNavigatorConfiguration = {
//   headerMode: 'none',
//   mode: 'card',
//   navigationOptions: {
//     gesturesEnabled: false
//   }
// };

export default createStackNavigator(routes);
