/* 
 * CONSEGNA
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

! Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

#MILESTONE 4
! Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

* Note:
! - questo bonus richiederà un evento diverso dal 'click'
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle 
*/


/* 
1- Recuperiamo gli elementi dal DOM
2- Prepariamo le variabili che ci servono:
    - * Variabile di minimo
    - * Variabile di massimo
3- Mettiamo in ascolto il bottone sul click
    Dentro la gestione eventi:
    -4 Creare un ciclo for:
        - * Creare l'elemento div
        - * Aggiungere la classe square
        - * E facciamo appendchild sulla griglia

*/

// #Funzioni
// Funzione che crea un nodo 
function createNode(type, className, content) {
    const node = document.createElement(type);
    node.className = className;
    node.append(content);
    return node;
}

// Funzione che crea una griglia
function createGrid(rows, cols) {
    const cells = rows * cols;

    for(let i = 1; i <= cells; i++ ) {
        // Creiamo i div con classe square e la i come contenuto
        const square = createNode('div', 'square', i);
        // Lo agganciamo alla grid
        gridElement.appendChild(square);
        // Mettiamo in ascolto sugli con il click la cella 
        square.addEventListener('click', function() {
            // Stampiamo in console quale cella abbiamo cliccato
            console.log(`Hai cliccato la cella ${i}`);
            // Aggiungo e tolgo all'occorrenza la classe clicked
            square.classList.toggle('clicked');  
        })
    }
}

// # Fase di preparazione
// Recuperiamo gli elementi dal DOM
const difficulty = document.getElementById('difficulty');
const button = document.getElementById('cta-btn');
const gridElement = document.getElementById('grid');
console.log(difficulty);
console.log(button);
console.log(gridElement);




// # Fase di gestione eventi
// Mettiamo in ascolto il bottone sugli eventi
button.addEventListener('click', function() {
    // Recuperiamo l'input della difficoltà
    const difficultyValue = difficulty.value;
    console.log(difficultyValue);

    if (difficultyValue === 'hard') {
        gridElement.classList.add('grid-cols-10');
        createGrid(10, 10);
    } else if (difficultyValue === 'medium') {
        gridElement.classList.add('grid-cols-9');
        createGrid(9,9)
    } else if (difficultyValue === 'easy') {
        gridElement.classList.add('grid-cols-7');
        createGrid(7,7)
    }

    
})
