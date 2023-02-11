// src/index.js
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './configure';
import { signInElf } from './sign-in-elf';
import { signInDialog } from './sign-in-dialog';

const firebaseApp = initializeApp(firebaseConfig);
signInElf(firebaseApp);
signInDialog();

console.log('src/index.js from bundle called');

