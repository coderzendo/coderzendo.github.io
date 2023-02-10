---
layout: phaser
title:  "Firebase Sign In"
date:   2023-02-09 16:57:00 -0800
categories: firebase
```

## Firebase sign-in

Get these files:

- auth_google_signin_popu.js
- src/sign-in-lf.js  
- src/configure.js 
- _includes/sign-in.html

The code from src/index.js:

```javascript
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './configure';
import { signInElf } from './sign-in-elf';

const firebaseApp = initializeApp(firebaseConfig);
signInElf(firebaseApp);
```