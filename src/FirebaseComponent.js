import React from "react";
import * as firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByyEO8A3-mCIjcTYoVXC6_9C2NGskBvzA",
    authDomain: "ade-airparnters.firebaseapp.com",
    databaseURL: "https://ade-airparnters.firebaseio.com",
    projectId: "ade-airparnters",
    storageBucket: "ade-airparnters.appspot.com",
    messagingSenderId: "831140017575",
    appId: "1:831140017575:web:33b93a1383a9367ae6f282",
    measurementId: "G-4W9PM87VRH"
}

function FirebaseComponent(props){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    return (
        <div>
            {/* The core Firebase JS SDK is always required and must be listed first */}
            <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>
        </div>
    );
}




{/* TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries 
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script> */}