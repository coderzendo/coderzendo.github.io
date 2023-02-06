import { getFirestore, doc, setDoc } from "firebase/firestore";
/**
 * basic database operations used with firebase-index.js
 * and sign-in-elf-js included in these gists
 */

// Add a new document in collection "cities"
async function runSantaCruz(firebaseApp) {
    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "cities", "SC"), {
        name: "Santa Cruz",
        state: "CA",
        country: "USA"
    });

}

async function runSacramento(firebaseApp) {
    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "cities", "SAC"), {
        name: "Sacromento",
        state: "CA",
        country: "USA"
    });

}

export { runSantaCruz, runSacramento };