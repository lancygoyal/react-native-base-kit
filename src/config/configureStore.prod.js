import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import reducer from '../redux';

export default () => {
  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
