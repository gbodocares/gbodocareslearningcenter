const firebaseConfig = {
    apiKey: "AIzaSyDY1XyVW0vCt_P_uQXT-p7PZMS0-9yDfHA",
    authDomain: "student-88864.firebaseapp.com",
    databaseURL: "https://student-88864-default-rtdb.firebaseio.com",
    projectId: "student-88864",
    storageBucket: "student-88864.appspot.com",
    messagingSenderId: "906483921344",
    appId: "1:906483921344:web:58bca4cafd658735731825"
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();