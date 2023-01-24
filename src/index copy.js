// src/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { runSantaCruz } from './set_document';
import { signIn, signOutElf } from './auth_google_signin_popup';

const firebaseConfig = {
    apiKey: "AIzaSyCBdYWzwjaMXQ5PYLKmKYaY7FVdxmD81hk",
    authDomain: "starters-charlie.firebaseapp.com",
    databaseURL: "https://starters-charlie-default-rtdb.firebaseio.com",
    projectId: "starters-charlie",
    storageBucket: "starters-charlie.appspot.com",
    messagingSenderId: "624512850048",
    appId: "1:624512850048:web:332488805f143326c4ae65",
    measurementId: "G-HS0RVB7S61"
};
const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

santaCruzBtn.onclick = () => {
    console.log("santa cruz button click");
    if (firebaseApp) {
        runSantaCruz(firebaseApp);
    } else {
        console.log("no firebase app");
    }
}

signInBtn.onclick = () => {
    signIn();
}

signOutBtn.onclick = () => {
    signOutElf();
}
/*
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const userDetails = document.getElementById('userDetails');

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
}); * /

/* const db = getFirestore(firebaseApp);

async function run() {
    await setDoc(doc(db, "cities", "SD"), {
        name: "San Diego",
        state: "CA",
        country: "USA"
    });
}

run(); */

/* async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
} */