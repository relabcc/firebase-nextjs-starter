import { compose } from 'redux';

import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore' // make sure you add this for firestore

import config from './config.json';

const firebaseEnhancer = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, {
    userProfile: 'users',
    useFirestoreForProfile: true
  }),
);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}

export {
  firebase,
  firebaseEnhancer,
};
