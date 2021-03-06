// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCY2S0tDCgwCWkH-2ury0vgSZ-AzILLVWg",
    authDomain: "facebook-clone-19dda.firebaseapp.com",
    projectId: "facebook-clone-19dda",
    storageBucket: "facebook-clone-19dda.appspot.com",
    messagingSenderId: "105351856965",
    appId: "1:105351856965:web:f38d84a329ddf78e3cf42c",
    measurementId: "G-CN2ME3HKET"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;