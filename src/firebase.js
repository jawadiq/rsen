import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyC-sRjsgTV6GbfpMCOwfEeRReQfPhya4wk",
  authDomain: "my-firebase-1-68ddd.firebaseapp.com",
  databaseURL: "https://my-firebase-1-68ddd.firebaseio.com",
  projectId: "my-firebase-1-68ddd",
  storageBucket: "my-firebase-1-68ddd.appspot.com",
  messagingSenderId: "878101763446",
  appId: "1:878101763446:web:6fa142492fc406f1861657",
  measurementId: "G-J52B80QYKC"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}