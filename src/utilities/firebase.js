import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC7KewemmDF24b4G26lRchvUiV9grWE_qg",
    authDomain: "vue-3-1dfe5.firebaseapp.com",
    projectId: "vue-3-1dfe5",
    storageBucket: "vue-3-1dfe5.appspot.com",
    messagingSenderId: "659100153712",
    appId: "1:659100153712:web:48b0c62efd4c85d3ad41b5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export const chatsRef = db.ref('chats');

export default firebase;