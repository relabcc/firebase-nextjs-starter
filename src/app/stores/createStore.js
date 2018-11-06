/**
 * Create the store with dynamic reducers
 */

import { createStore, compose } from 'redux';
import { fromJS } from 'immutable';
import { responsiveStoreEnhancer } from 'redux-responsive';

import createReducer from './reducers';
import { firebaseEnhancer } from '../services/firebase';

export default function configureStore(initialState = {}) {
  const enhancers = [
    firebaseEnhancer,
    responsiveStoreEnhancer,
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  return store;
}
