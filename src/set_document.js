import { getFirestore, doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"


async function runSantaCruz(firebaseApp) {
    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "cities", "SC"), {
        name: "Santa Cruz",
        state: "CA",
        country: "USA"
    });

}

async function runSacromento(firebaseApp) {
    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "cities", "SAC"), {
        name: "Sacromento",
        state: "CA",
        country: "USA"
    });

}

export { runSantaCruz, runSacromento };