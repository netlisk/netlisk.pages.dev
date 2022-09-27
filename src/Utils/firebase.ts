import { initializeApp } from "firebase/app";
import {getStorage, ref} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAj9qX0QJAMdVgJJaiRVkzXCZEs3M-jN6g",
    authDomain: "netlisk.firebaseapp.com",
    projectId: "netlisk",
    storageBucket: "netlisk.appspot.com",
    messagingSenderId: "715672210778",
    appId: "1:715672210778:web:6dd9bc8ae08ef870ea3763"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(firebase);
const burgStorage = ref(firebaseStorage, 'burgs');
const wikiStorage = ref(firebaseStorage, 'wiki-root');
export default firebase;
export {burgStorage, wikiStorage};