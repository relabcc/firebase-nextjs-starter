/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { createResponsiveStateReducer } from 'redux-responsive'
import fromPairs from 'lodash/fromPairs';
import zip from 'lodash/zip';

import { breakpoints } from '../components/ThemeProvider/theme';

const names = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
];
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    browser: createResponsiveStateReducer(fromPairs(zip(names, breakpoints.map((bp) => parseInt(bp, 10) - 1)))),
    ...injectedReducers,
  });
}
