/*
 * @file: routes.js
 * @description: For defining and importing all screens/routes
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

// import Loader from '../components/common/Loader';
import Home from '../containers/Home';
import Detail from '../containers/Detail';

// Export application routes
export default {
  // Loader: { screen: Loader },
  Home: { screen: Home },
  Detail: { screen: Detail }
};
