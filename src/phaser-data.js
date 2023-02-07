import { phaserData } from './set_document.js';

console.log('phaser data loaded')


function phaserData(firebaseApp) {
    const phaserDataBtn = document.getElementById('phaserDataBtn');
    phaserDataBtn.onclick = () => {
        console.log('phaser button hooked')
        phaserData(firebaseApp);
    }
}

export { phaserData };