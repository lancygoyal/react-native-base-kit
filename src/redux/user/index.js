/*
 * @file: index.js
 * @description: User Reducer
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

import { LOGIN, LOGOUT, UPDATE_PROFILE, DEVICE_TOKEN } from './constants';

const initialState = {
  deviceToken: 'test',
  userDetails: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DEVICE_TOKEN:
      return { ...state, deviceToken: action.payload };

    case LOGIN:
      return { ...state, isLoggedIn: true, userDetails: action.payload };

    case UPDATE_PROFILE:
      return { ...state, userDetails: { ...state.userDetails, ...action.payload } };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
