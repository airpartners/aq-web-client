import React from "react";
import * as firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
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
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // TODO: find import for this when needed.
    //var database = firebase.database();

    return (
        <div>
            {/* The core Firebase JS SDK is always required and must be listed first */}
            <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>
        </div>
    );
}


export default FirebaseComponent;

{/* TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries 
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script> */}