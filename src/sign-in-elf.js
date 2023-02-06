import { signIn, signOutElf } from './auth_google_signin_popup';
import { getAuth } from "firebase/auth";

function signInElf(firebaseApp) {

    const auth = getAuth(firebaseApp);

    signInBtn.onclick = () => {
        signIn();
    }

    signOutBtn.onclick = () => {
        signOutElf();
    }

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
    });
}

export { signInElf };