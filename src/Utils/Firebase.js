import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCD6xeL4bLnEdH383IhV6AkI9eWM7NXMfc",
    authDomain: "buxiban-project.firebaseapp.com",
    databaseURL: "https://buxiban-project.firebaseio.com",
    projectId: "buxiban-project",
    storageBucket: "buxiban-project.appspot.com",
    messagingSenderId: "1040103486731",
    appId: "1:1040103486731:web:23d19c67d84a4501"
  };
  firebase.initializeApp(config);

  export default firebase;