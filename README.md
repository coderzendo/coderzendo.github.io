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

## Jekyll

- bundle install	
- bundle exec jekyll serve
- For config see: Gemfile, _config.yml

## Firebase

 - firebase serve
 - For config see: .firebaserc, firebase.json 
 - We are using **bundle.js** from webpack

## Switch Firebase Projects

- firebase use <PROJECT_ID>
- firebase use starters-charlie

[hosting](https://www.educative.io/answers/how-to-deploy-your-web-application-on-firebase-hosting)

## Precommit

Copy the pre-commit file to the .git/host directory. This will add @date to the top of your markdown files that are being committed.

[docs](https://mademistakes.com/notes/adding-last-modified-timestamps-with-git/)
