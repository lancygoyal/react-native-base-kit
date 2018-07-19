import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import encryptor from './encryptor';
import app from './modules/app';

const rootPersistConfig = {
  key: 'rn-app',
  storage: storage,
  transforms: [encryptor]
};

const rootReducer = combineReducers({
  app
});

export default persistReducer(rootPersistConfig, rootReducer);
