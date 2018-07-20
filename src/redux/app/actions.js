/*
 * @file: index.js
 * @description: Application Actions
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

import { HANDLE_ERROR, HIDE_LOADER, SHOW_LOADER } from './constants';

//Action creators For Reducers
export const handleError = data => ({ type: HANDLE_ERROR, data: data });
export const hideLoader = type => ({ type: HIDE_LOADER });
export const showLoader = type => ({ type: SHOW_LOADER });
