const progetto1Descrizione = `Easy Drop è un'applicazione web sviluppata con Angular che sfrutta le Web Audio API per creare un sequencer musicale interattivo. Il sequencer supporta un numero configurabile di tracce indipendenti, ognuna delle quali può essere associata a uno strumento virtuale come batteria, sintetizzatore o campionatore. Dotato di un metronomo sincronizzato, offre un'interfaccia grafica intuitiva per la modifica dei parametri sonori di ogni strumento. La web app è stata distribuita su Surge.sh, mentre il codice sorgente è disponibile su GitHub per ulteriori modifiche e contributi.`;
const progetto2Descrizione = `Questo codice HTML e JavaScript crea una galleria di immagini che utilizza Firebase per caricare dinamicamente le immagini da un database. Le immagini sono visualizzate in un carousel e possono essere cliccate per essere ingrandite in un modal. È implementata anche la navigazione tramite pulsanti "next" e "prev", oltre al supporto per lo swipe su dispositivi mobili. Il codice gestisce anche il caricamento delle immagini mostrando un loader durante il processo`;
const progetto3Descrizione = `Combina due notebook preesistenti. Uno è Stable Diffusion Deforum, specializzato nella creazione di animazioni, mentre l'altro implementa GFPGAN, un algoritmo per migliorare la risoluzione delle immagini. La combinazione di queste due tecnologie offre uno strumento potente per la manipolazione e l'elaborazione delle immagini, incluso l'upscaling dei video. Il progetto fornisce una base solida per ulteriori sviluppi e personalizzazioni.`;
const progetto4Descrizione = `Questa applicazione web si connette alla blockchain di Ethereum tramite MetaMask, permettendo agli utenti di interagire con la blockchain in modo semplice e intuitivo. Utilizzando animazioni CSS, l'applicazione visualizza in tempo reale l'indirizzo dell'account connesso, il saldo in Ether e il saldo equivalente in Euro. Il pulsante "Connect to MetaMask" semplifica la connessione dell'utente, offrendo un'esperienza fluida e accessibile.`;
const progetto1aDescrizione = `Questo codice HTML crea una pagina web per un pannello di amministrazione di una galleria di immagini. La pagina include un form per aggiungere nuove immagini, pulsanti per scorrere avanti e indietro tra le immagini, un menu a tendina per filtrare le immagini per categoria e un'area per visualizzare le immagini. Le immagini sono caricate su Firebase Storage e i loro metadati (titolo, descrizione, categoria) sono memorizzati in un database Firestore di Firebase. Gli utenti possono anche modificare e eliminare le immagini tramite il pannello di amministrazione. Il codice JavaScript gestisce la comunicazione con Firebase per caricare, recuperare, aggiornare ed eliminare le immagini.`;

const infoProgetti = [

    {
        nome: 'My gallery',
        descrizione: progetto2Descrizione,
        immagine: 'img/proj2.png',
        link: 'https://my-gallery-aiart.web.app/',
        gitHub: 'https://github.com/davvoz/gallery/blob/main/public/index.html'
    },
    {
        nome: 'My gallery - Pannello di amministrazione',
        descrizione: progetto1aDescrizione,
        immagine: 'img/proj1a.png',
        link: '',
        gitHub: 'https://github.com/davvoz/gallery/blob/main/index.html'
    },
    {
        nome: 'Deforum + GFPGAN',
        descrizione: progetto3Descrizione,
        immagine: 'img/proj3.png',
        link: 'https://colab.research.google.com/github/davvoz/Deforum_Stable_Diffusion_Davvoz/blob/main/Deforum_Stable_Diffusion.ipynb',
        gitHub: 'https://github.com/davvoz/Deforum_Stable_Diffusion_Davvoz/blob/main/Deforum_Stable_Diffusion.ipynb'
    },
    {
        nome: 'Web3 + MetaMask',
        descrizione: progetto4Descrizione,
        immagine: 'img/proj4.png',
        link: 'https://belligerent-night.surge.sh/',
        gitHub: 'https://github.com/davvoz/primoWEB3'
    }, {
        nome: 'Easy Drop',
        descrizione: progetto1Descrizione,
        immagine: 'img/proj1.png',
        link: 'https://seqanco.surge.sh/',
        gitHub: 'https://github.com/davvoz/Seqanco/tree/master/src'
    }
];

const header = createHeader();
const container = createContainer();
const space = document.createElement('div');

container.classList.add('container', 'container-responsive');

document.body.appendChild(header);
document.body.appendChild(container);

infoProgetti.forEach((progetto) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${progetto.immagine}" alt="${progetto.nome}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${progetto.nome}</h5>
        <p class="card-text">${progetto.descrizione}</p>
        <a  class="btn btn-primary" class="btn btn-primary" onclick="checkAndOpen('${progetto.link}', '_blank')">Demo   <i class="fas fa-external-link-alt"></i></a>
        <a  class="btn btn-primary" class="btn btn-primary" onclick="checkAndOpen('${progetto.gitHub}', '_blank')">GitHub   <i class="fab fa-github"></i></a>
        </div>`;
    container.appendChild(card);
});

function checkAndOpen(link, target) {
    console.log(link);
    if (link) {
        window.open(link, target);
    } else {
        alert('Demo non disponibile');
    }
}

function changeTheme(theme) {
    const root = document.getElementById("root");
    root.setAttribute("theme", theme);
}

// Function for creating the header element
function createHeader() {
    const headerElement = document.createElement('header');
    headerElement.innerHTML = '<h1>Portfolio</h1>';
    headerElement.classList.add('header');
    return headerElement;
}

// Function for creating the container element
function createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container');
    return containerElement;
}

// Function for creating the select element given a list of options
function createSelectElement(options, callback) {
    const selectElement = document.createElement('select');
    selectElement.classList.add('form-select');
    selectElement.setAttribute('aria-label', 'Default select example');
    selectElement.addEventListener('change', (event) => callback(event.target.value));
    options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
    return selectElement;
}