/*
 * @file: actions.js
 * @description: Actions for user reducer
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

import { LOGIN, LOGOUT, UPDATE_PROFILE, DEVICE_TOKEN } from './constants';

export const login = payload => ({ type: LOGIN, payload }); // login action.
export const logout = () => ({ type: LOGOUT }); // logout action to update reducer.
export const updateProfile = payload => ({ type: UPDATE_PROFILE, payload }); // logout action to update user profile.
export const setDeviceToken = payload => ({ type: DEVICE_TOKEN, payload }); // logout action to update user profile.

/**
 *  APIs used in user
 */
