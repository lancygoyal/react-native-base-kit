/*
 * @file: index.js
 * @description: Application Reducer
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

import { HIDE_LOADER, SHOW_LOADER } from './constants';
import { LOGOUT } from '../user/constants';

const initialState = {
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HIDE_LOADER:
      return { ...state, isLoading: false };

    case SHOW_LOADER:
      return { ...state, isLoading: true };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
