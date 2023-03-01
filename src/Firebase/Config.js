// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB1MUcEFCbdG7nhaQNgnEiqL6lUbDPE62s",
  authDomain: "socialchat-a25d0.firebaseapp.com",
  projectId: "socialchat-a25d0",
  storageBucket: "socialchat-a25d0.appspot.com",
  messagingSenderId: "92050732333",
  appId: "1:92050732333:web:415fabc4190fe7ea14cfa4"
};
if(!firebase.apps.length){

 firebase.initializeApp(firebaseConfig);
}

export {firebase};




