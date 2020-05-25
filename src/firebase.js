import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDdSg9tk_kuOsV1czolfDXqb6gO78A-hgI",
  authDomain: "todoist-clone-38830.firebaseapp.com",
  databaseURL: "https://todoist-clone-38830.firebaseio.com",
  projectId: "todoist-clone-38830",
  storageBucket: "todoist-clone-38830.appspot.com",
  messagingSenderId: "320682709176",
  appId: "1:320682709176:web:1284cc41dca9d525c0644d",
});

export { firebaseConfig as firebase };
