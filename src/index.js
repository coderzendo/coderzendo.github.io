// src/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from './configure';
import { runSacromento } from './set_document';
import './sign-in-elf';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

console.log('src/index.js fom bundle called');
runSacromento(firebaseApp);
/* async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
} */