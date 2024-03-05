// Inizializza Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "wada-42dd4.firebaseapp.com",
    databaseURL: "https://wada-42dd4.firebaseio.com",
    projectId: "wada-42dd4",
    storageBucket: "wada-42dd4.appspot.com",
    messagingSenderId: "87083060977",
    appId: "1:87083060977:web:a525a46e147b0f0e7a2350"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Leggi i progetti
const progettiRef = db.collection('progetti');

// Crea un array per memorizzare le informazioni sui progetti
const infoProgetti = [];

// Ottieni i dati dai documenti nella collezione 'progetti'
progettiRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        infoProgetti.push(doc.data());
    });

    // Dopo aver ottenuto i dati, aggiungi le carte al container
    infoProgetti.forEach((progetto) => {
        const card = createCard(progetto);
        container.appendChild(card);
    });
});

// Crea l'header
const header = createHeader();
document.body.appendChild(header);

// Crea il container
const container = createContainer();
document.body.appendChild(container);


function createCard(progetto) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${progetto.immagine}" alt="${progetto.nome}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${progetto.nome}</h5>
        <p class="card-text">${progetto.descrizione}</p>
        <a href="#" class="btn" onclick="checkAndOpen('${progetto.link}', '_blank')">Demo   <i class="fas fa-external-link-alt"></i></a>
        <a href="#" class="btn" onclick="checkAndOpen('${progetto.gitHub}', '_blank')">GitHub
        <i class="fab fa-github"></i></a>
    </div>`;
    return card;
}


// Funzione per aprire il link in una nuova finestra
function checkAndOpen(link, target) {
    if (link) {
        window.open(link, target);
    } else {
        alert('Demo non disponibile');
    }
}

// Funzione per creare l'header
function createHeader() {
    const headerElement = document.createElement('header');
    headerElement.innerHTML = '<h1>Portfolio</h1>';
    headerElement.classList.add('header', 'animated-text');
    return headerElement;
}

// Funzione per creare il container
function createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container', 'container-responsive');
    return containerElement;
}
