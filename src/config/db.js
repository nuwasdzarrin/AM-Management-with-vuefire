import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyBmicZUBN6VndwbXK3PHbObsa1QsSj0T_c",
    authDomain: "amrent-535b0.firebaseapp.com",
    databaseURL: "https://amrent-535b0.firebaseio.com",
    projectId: "amrent-535b0",
    storageBucket: "amrent-535b0.appspot.com",
    messagingSenderId: "279673732997"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()