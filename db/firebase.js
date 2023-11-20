// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
const { getDatabase } = require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
exports.app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
exports.storage = getStorage(module.app);

exports.db=getDatabase(module.app)


