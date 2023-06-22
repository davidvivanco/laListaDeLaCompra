import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDGTmJQOpz7e1FvLFlrTswI4uQbeiNCWFk',
  authDomain: 'the-shopping-list-62c9f.firebaseapp.com',
  projectId: 'the-shopping-list-62c9f',
  storageBucket: 'the-shopping-list-62c9f.appspot.com',
  messagingSenderId: '520637604288',
  appId: '1:520637604288:web:df4097f66fa8b620bae825',
  measurementId: 'G-BG3RW7TG9W',
});

const auth = getAuth(firebaseApp);

export { auth, firebaseApp };
