import createEncryptor from 'redux-persist-transform-encrypt'
 
export default createEncryptor({
  secretKey: 'my-super-secret-key',
  onError: function(error) {
    // Handle the error.
  }
});