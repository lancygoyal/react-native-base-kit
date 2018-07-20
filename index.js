/*
 * @file: index.js
 * @description: Initilize Application
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

import { AppRegistry } from 'react-native';
import { name as appName } from './package.json';
import Main from './Main';

AppRegistry.registerComponent(appName, () => Main);
