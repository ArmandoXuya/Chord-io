importScripts('https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/[for example:10.7.2]/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCEgOgLjLJI7gcnaLfXdF90FmMu1Un0s3Q",
    authDomain: "mychords.firebaseapp.com",
    projectId: "mychords",
    storageBucket: "mychords.appspot.com",
    messagingSenderId: "527130290885",
    appId: "1:527130290885:web:6f4a3e51a7439c58c19eac",
    measurementId: "G-V2QCJ538XH"
})
const messaging=Firebase.messaging()