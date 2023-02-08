// src/index.js
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './configure';
import { signInElf } from './sign-in-elf';


const firebaseApp = initializeApp(firebaseConfig);
signInElf(firebaseApp);

console.log('src/index.js from bundle called');

