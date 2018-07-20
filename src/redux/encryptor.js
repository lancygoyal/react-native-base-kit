/*
 * @file: encryptor.js
 * @description: persist data encryptor
 * @date: 20.July.2018
 * @author: Lancy Goyal
 */

import createEncryptor from 'redux-persist-transform-encrypt';

export default createEncryptor({
  secretKey: 'my-super-secret-key',
  onError: function(error) {
    // Handle the error.
  }
});
