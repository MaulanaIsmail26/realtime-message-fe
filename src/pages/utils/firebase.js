// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLTT-Cdr3KHdyhqHcrkcZhkNNm1V9IZFU",
  authDomain: "realtime-chat-9b9e4.firebaseapp.com",
  projectId: "realtime-chat-9b9e4",
  storageBucket: "realtime-chat-9b9e4.appspot.com",
  messagingSenderId: "830761738948",
  appId: "1:830761738948:web:5dc879ff15970385badf91",
  databaseURL:
    "https://realtime-chat-9b9e4-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
