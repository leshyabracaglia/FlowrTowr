import {firebase} from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA7YmmX1zGcoc1MAIO_9ngWCINGLaiH1xI',
  authDomain: 'persephone-1629908238721.firebaseapp.com',
  databaseURL: 'https://persephone-1629908238721.firebaseio.com',
  projectId: 'persephone-1629908238721',
  storageBucket: 'persephone-1629908238721.appspot.com',
  messagingSenderId: '491397416554',
  appId: '1:491397416554:ios:013a8909f5fd07db43ac13',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };