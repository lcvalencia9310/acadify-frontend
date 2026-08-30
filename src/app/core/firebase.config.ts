import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: 'AIzaSyAld_luI4dZN0WzH4nN7YPoplb9W5T_Rhg',
  authDomain: 'acadify-auth.firebaseapp.com',
  projectId: 'acadify-auth',
  storageBucket: 'acadify-auth.firebasestorage.app',
  messagingSenderId: '264319025237',
  appId: '1:264319025237:web:742f04129c1ac48af994dc',
};

export const firebaseApp = initializeApp(firebaseConfig);