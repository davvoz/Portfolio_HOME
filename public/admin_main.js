//creiamo il pannello di amministrazione per fare la CRUD sui progetti
document.title = 'Pannello di amministrazione';
const firebaseConfig = {
    apiKey: "",
    authDomain: "wada-42dd4.firebaseapp.com",
    databaseURL: "https://wada-42dd4.firebaseio.com",
    projectId: "wada-42dd4",
    storageBucket: "wada-42dd4.appspot.com",
    messagingSenderId: "87083060977",
    appId: "1:87083060977:web:a525a46e147b0f0e7a2350"
};

const firebase = require('firebase/app');
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Leggi i progetti
const progettiRef = db.collection('progetti');
//recupera il valore ordine piu alto dai progetti e aggiungi 1
let ordine = progettiRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if (doc.data().ordine > ordine) {
            ordine = doc.data().ordine;
        }
    });
    ordine++;
});

const form = document.createElement('form');
form.classList.add('form');

const createInput = (type, labelText, placeholderText) => {
    const container = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = labelText;
    container.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('placeholder', placeholderText);
    container.appendChild(input);
    //disponiamo i campi del form allineati in colonna
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.margin = '10px';
    return container;
};

const inputNome = createInput('text', 'Nome:', 'Inserisci il nome');
const inputDescrizione = createInput('text', 'Descrizione:', 'Inserisci una descrizione');
const inputImmagineFile = createInput('file', 'Immagine:', '');
const inputLink = createInput('text', 'Link:', 'Inserisci il link');
const inputGitHub = createInput('text', 'GitHub:', 'Inserisci il link al repository su GitHub');
const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Aggiungi';

form.appendChild(inputNome);
form.appendChild(inputDescrizione);
form.appendChild(inputImmagineFile);
form.appendChild(inputLink);
form.appendChild(inputGitHub);
form.appendChild(button);
//disponiamo i campi del form allineati in colonna
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'center';
form.style.justifyContent = 'center';
form.style.height = '100vh';
form.style.margin = '10px';

const output = document.createElement('output');
form.appendChild(output);
document.body.appendChild(form);

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const nome = inputNome.querySelector('input').value;
        const descrizione = inputDescrizione.querySelector('input').value;
        const link = inputLink.querySelector('input').value;
        const gitHub = inputGitHub.querySelector('input').value;
        const file = inputImmagineFile.querySelector('input').files[0];
        if (!file) {
            output.textContent = 'Nessun file selezionato.';
            throw new Error('Nessun file selezionato.');
        }

        const storageRef = firebase.storage().ref();
        const immaginiRef = storageRef.child('immagini_progetti/' + file.name);
        const snapshot = await immaginiRef.put(file);

        console.log('File caricato con successo!');
        output.textContent = 'File caricato con successo!';

        const httpsImage = await snapshot.ref.getDownloadURL();
        console.log('URL del file:', httpsImage);
        // Aggiungi il progetto al database
        await progettiRef.add({
            nome,
            descrizione,
            immagine: httpsImage,
            link,
            gitHub,
            ordine
        });

        // Pulisci i campi del form
        inputNome.querySelector('input').value = '';
        inputDescrizione.querySelector('input').value = '';
        inputLink.querySelector('input').value = '';
        inputGitHub.querySelector('input').value = '';

    } catch (error) {
        output.textContent = 'Si è verificato un errore: ' + error.message;
        console.error('Si è verificato un errore:', error.message);

        // Gestione degli errori: ad esempio, potresti visualizzare un messaggio all'utente
    }
});
