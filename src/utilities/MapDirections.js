/*
 * @file: MapDirections.js
 * @description: Fetch direactions between two locations.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

'use strict';

import Constants from '../constants';
import Idx from './Idx';
import { Linking } from 'react-native';
import _ from 'lodash';

/**
 * @function : To get directions from google apis
 */
export function getGoogleDirections(source, destination) {
  return new Promise(function(resolve, reject) {
    let directionsUrl =
      'https://maps.googleapis.com/maps/api/directions/json?origin=' +
      source.latitude +
      ',' +
      source.longitude +
      '&destination=' +
      destination.latitude +
      ',' +
      destination.longitude +
      '&key=' +
      Constants.GoogleAPIKey;
    fetch(directionsUrl)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 'OK') {
          if (responseJson.routes.length && Idx(responseJson, _ => _.routes[0].legs[0].steps)) {
            let steps = decodeMapPoints(responseJson.routes[0].overview_polyline.points);
            return resolve(steps);
          }
        } else {
          reject(null);
        }
      })
      .catch(error => {
        reject(null);
      });
  });
}

/**
 * @function : To get directions from project-osrm apis
 */
export function getDirections(source, destination) {
  return new Promise(function(resolve, reject) {
    let directionsUrl = `http://router.project-osrm.org/route/v1/driving/${source.longitude},${
      source.latitude
    };${destination.longitude},${destination.latitude}`;
    fetch(directionsUrl)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.code === 'Ok') {
          let steps = _.map(responseJson.waypoints, step => {
            return {
              latitude: step.location[1],
              longitude: step.location[0]
            };
          });
          return resolve(steps);
        } else {
          reject(null);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * @function : To navigate to google maps / apple maps
 */
export function googleMapNavigate(source, destination) {
  let url = '';
  url = `http://maps.google.com/maps?saddr=${source.latitude},${source.longitude}&daddr=${
    destination.latitude
  },${destination.longitude}`;
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    }
  });
}

/* eslint-disable */

/**
 * @function :  decord map points
 */
export function decodeMapPoints(t, e) {
  for (
    let n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5);
    u < t.length;

  ) {
    (a = null), (h = 0), (i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (o = 1 & i ? ~(i >> 1) : i >> 1), (l += n), (r += o), d.push([l / c, r / c]);
  }
  return (d = d.map(function(t) {
    return { latitude: t[0], longitude: t[1] };
  }));
}

/* eslint-enable */

/**
 * @function : calculate distance between source and destination
 */
export function calculateDistance(source, destination) {
  let unit = 'K';
  //'K' is kilometers
  //'N' is nautical miles
  // destination[1] - lat , destination[0] - lng
  let radlat1 = (Math.PI * source.lat) / 180;
  let radlat2 = (Math.PI * destination[1]) / 180;
  let theta = source.lng - destination[0];
  let radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') {
    dist = dist * 1.609344;
  }
  if (unit === 'N') {
    dist = dist * 0.8684;
  }
  return dist.toFixed(1);
}
