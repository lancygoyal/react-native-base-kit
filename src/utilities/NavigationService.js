/*
 * @file: NavigationService.js
 * @description: User-defined navigation actions.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import { NavigationActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator
};
