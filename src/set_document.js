import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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
    await setDoc(doc(db, "cities", "BEL"), {
        name: "Bellevue",
        state: "WA",
        country: "USA"
    });

}

async function phaserData(firebaseApp) {
    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "cities", "PHA"), {
        name: "Phaser",
        state: "WA",
        country: "USA"
    });

}

async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
}



export { runSantaCruz, runSacramento, phaserData };