const progetto1Descrizione = `Easy Drop è un'applicazione web sviluppata con Angular che sfrutta le Web Audio API per creare un sequencer musicale interattivo. Il sequencer supporta un numero configurabile di tracce indipendenti, ognuna delle quali può essere associata a uno strumento virtuale come batteria, sintetizzatore o campionatore. Dotato di un metronomo sincronizzato, offre un'interfaccia grafica intuitiva per la modifica dei parametri sonori di ogni strumento. La web app è stata distribuita su Surge.sh, mentre il codice sorgente è disponibile su GitHub per ulteriori modifiche e contributi.`;
const progetto2Descrizione = `Questo codice HTML e JavaScript crea una galleria di immagini che utilizza Firebase per caricare dinamicamente le immagini da un database. Le immagini sono visualizzate in un carousel e possono essere cliccate per essere ingrandite in un modal. È implementata anche la navigazione tramite pulsanti "next" e "prev", oltre al supporto per lo swipe su dispositivi mobili. Il codice gestisce anche il caricamento delle immagini mostrando un loader durante il processo`;
const progetto3Descrizione = `Combina due notebook preesistenti. Uno è Stable Diffusion Deforum, specializzato nella creazione di animazioni, mentre l'altro implementa GFPGAN, un algoritmo per migliorare la risoluzione delle immagini. La combinazione di queste due tecnologie offre uno strumento potente per la manipolazione e l'elaborazione delle immagini, incluso l'upscaling dei video. Il progetto fornisce una base solida per ulteriori sviluppi e personalizzazioni.`;
const progetto4Descrizione = `Questa applicazione web si connette alla blockchain di Ethereum tramite MetaMask, permettendo agli utenti di interagire con la blockchain in modo semplice e intuitivo. Utilizzando animazioni CSS, l'applicazione visualizza in tempo reale l'indirizzo dell'account connesso, il saldo in Ether e il saldo equivalente in Euro. Il pulsante "Connect to MetaMask" semplifica la connessione dell'utente, offrendo un'esperienza fluida e accessibile.`;
const progetto1aDescrizione = `Questo codice HTML crea una pagina web per un pannello di amministrazione di una galleria di immagini. La pagina include un form per aggiungere nuove immagini, pulsanti per scorrere avanti e indietro tra le immagini, un menu a tendina per filtrare le immagini per categoria e un'area per visualizzare le immagini. Le immagini sono caricate su Firebase Storage e i loro metadati (titolo, descrizione, categoria) sono memorizzati in un database Firestore di Firebase. Gli utenti possono anche modificare e eliminare le immagini tramite il pannello di amministrazione. Il codice JavaScript gestisce la comunicazione con Firebase per caricare, recuperare, aggiornare ed eliminare le immagini.`;
const progetto5Descrizione = `L'ambiente creato da questo codice offre un'esperienza audiovisiva coinvolgente e interattiva, integrando in modo innovativo l'analisi del flusso audio con effetti grafici dinamici.Audio di Qualità e Interattività Visiva:L'inizializzazione dell'AudioContext e l'acquisizione del flusso audio tramite getUserMedia garantiscono un audio di alta qualità proveniente dal microfono del dispositivo. Questo flusso audio viene poi analizzato dall'AnalyserNode, permettendo agli effetti grafici di reagire in tempo reale alle frequenze audio.Design Modulare e Personalizzazione:Il codice è strutturato in modo modulare, con classi ben definite per gestire sia gli elementi grafici che gli effetti visivi. Questa struttura offre flessibilità e facilità di personalizzazione, consentendo agli sviluppatori di creare e integrare nuovi effetti grafici con facilità.Effetti Grafici Dinamici e Coinvolgenti: Le varie classi di effetti grafici, come TunnelEffect, StarRainEffect e MadDancingShapesEffect, offrono una vasta gamma di esperienze visive, da spirali rotanti a stelle cadenti, il tutto arricchito da colori vibranti e movimenti fluidi.Interazione Intuitiva e Reattività: La classe GUIFramework gestisce in modo efficiente l'interazione utente, consentendo di cliccare su pulsanti e caselle di controllo per attivare o disattivare gli effetti grafici. Inoltre, la visualizzazione grafica viene costantemente aggiornata in tempo reale, garantendo una reattività immediata alle azioni dell'utente e alle variazioni nel flusso audio.Esperienza Immersiva e Creativa Complessivamente, l'ambiente creato da questo codice offre un'esperienza audiovisiva immersiva e creativa, che cattura l'attenzione dell'utente e stimola la sua creatività. Con una combinazione di audio di qualità, effetti grafici dinamici e interazione intuitiva, questo ambiente rappresenta un'ottima piattaforma per esplorare e sperimentare con l'arte digitale e l'interattività multimediale   `;

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
    },
    {
        nome: 'Audio Visualizer',
        descrizione: progetto5Descrizione,
        immagine: 'img/proj5.png',
        link: 'https://davvoz.github.io/AudioVisualizer/',
        gitHub: 'https://github.com/davvoz/VisualFXs/blob/master/public/index.html'
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
        <a  class="btn" onclick="checkAndOpen('${progetto.link}', '_blank')">Demo   <i class="fas fa-external-link-alt"></i></a>
        <a  class="btn" onclick="checkAndOpen('${progetto.gitHub}', '_blank')">GitHub   <i class="fab fa-github"></i></a>
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
    headerElement.classList.add('header','animated-text');
    return headerElement;
}

// Function for creating the container element
function createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('container');
    return containerElement;
}
