import React from "react";
import * as firebase from "firebase/app";

import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "airpartners-ade.firebaseapp.com",
    databaseURL: "https://airpartners-ade.firebaseio.com/",
    projectId: "airpartners-ade",
    storageBucket: "airpartners-ade.appspot.com",
    messagingSenderId: "762370846619",
    appId: "1:762370846619:web:f8622746c06c9091ebbb3e",
    measurementId: "G-0D2K51JJQM"
}

export const getData = async (deviceId = 'SN000-072') => {
    switch (deviceId) {
        case 'SN000-045':
            deviceId = 'SN000-081';
            break;
        case 'SN000-046':
            deviceId = 'SN000-082';
            break;
        case 'SN000-049':
            deviceId = 'SN000-085';
            break;
        case 'SN000-062':
            deviceId = 'SN000-088';
            break;
        case 'SN000-067':
            deviceId = 'SN000-089';
            break;
        case 'SN000-072':
            deviceId = 'SN000-094';
            break;
        default:
            deviceId = 'SN000-088';
    }
    const snapshot = await firebase.app().database().ref(`/${deviceId}/latest`).once('value');
    return snapshot.val();
}

function FirebaseComponent(props) {

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <div>
            {/* The core Firebase JS SDK is always required and must be listed first */}
            <script src="https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js"></script>
        </div>
    );
}


export default FirebaseComponent;

{/* TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries 
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script> */}