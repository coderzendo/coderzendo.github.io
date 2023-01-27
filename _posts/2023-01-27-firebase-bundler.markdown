---
layout: post
title:  "Firebase Bundler"
date:   2023-01-27 09:58:25 -0800
categories: javascript firebase
---

You want to fix: '_Failed to resolve module specifier "firebase/app"_'.

The Firebase team designed their code to [work with a bundler][4]. In particular, note these sentences from the docs:

> Module bundlers read import paths in your code and combine (bundle) your application-specific code with your imported library code. 
> 
> From version 9 and higher, the Firebase JavaScript SDK is optimized to work with the optimization features of module bundlers to reduce the amount of Firebase code included in your final build.

I followed the easy-to-understand webpack example shown [in the docs][2]. My only change was in **webpack.config.js**, were I put **bundle.js** in the **public** directory rather than **dist**:

     output: {
        path: path.resolve(__dirname, 'public'), // change here
        filename: 'bundle.js'
     },

I do this because **Firebase** tends to put their [web app][3] code in a directory called **public**.

In **public/index.html**, near the bottom of the **body** tag, I use this code to load **bundle.js**:

     <script src="bundle.js"></script>

I put it there because that file might take the longest to load, so I make everything else in **index.html** visible and then begin the potentially longer **bundle.js** load process.

After doing this the following code from my **index.js** file began to work:

    import { initializeApp } from 'firebase/app';

  [1]: https://stackoverflow.com/a/74131662/253576
  [2]: https://firebase.google.com/docs/web/module-bundling#using_firebase_with_webpack
  [3]: https://firebase.google.com/docs/web/setup
  [4]: https://firebase.google.com/docs/web/module-bundling
