// src/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from './configure';
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

console.log('src/index.js fom bundle called');

/* async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
} */