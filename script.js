/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function (stringa) {
    const title = document.querySelector('h1').innerHTML = stringa;
}

changeTitle('Riccardo, top professore');

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function (class_name) {
    const title = document.querySelector('h1').classList.add(class_name);
}

addClassToTitle('myHeading');
/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

// di un qualsiasi div?
const primo_DIV = document.getElementsByTagName('div');   // in questo caso ho preso il primo div

const changePcontent = function (content_p) {
    const first_paragraph = document.querySelector('div > p').innerHTML = content_p;
}

console.log('paragrafo del primo div ------------>', changePcontent('prova di inserimento in un paragrafo'))

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function (newURL) { 

    const allAnchors = document.getElementsByTagName('a');

    for(i = 0; i < allAnchors.length; i++) {
        allAnchors[i].setAttribute('href', newURL);
        
    }
}

console.log(changeUrls('https://www.google.com')
/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () { }

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () { }

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () { }

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () { }

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () { }

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () { }

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () { }

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }
