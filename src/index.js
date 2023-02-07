// src/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from './configure';
import { runSacramento } from './set_document';
import { signInElf } from './sign-in-elf';
import { phaserData } from './set_document';
import { phaserDataSetup } from './phaser-data';


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
signInElf(firebaseApp);
phaserData(firebaseApp);
phaserDataSetup(firebaseApp);
console.log('src/index.js fom bundle called');
runSacramento(firebaseApp);
