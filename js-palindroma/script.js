// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

const userWord = prompt('Scrivi una parola')

const theResultOfPalindrome = isTheWordAPalindrom (userWord)
alert (theResultOfPalindrome)
console.log(theResultOfPalindrome);

// Questa funzione ha il compito di dire se una parola è palindroma o no
// word -> è una stringa 
// la stringa word viene messa in un ciclo for e la scorriamo da destra verso sinistra
// le singole lettere vengono concatenate in una variabile chiamata reverseWord
// abbiamo la parola al contrario e la mettiamo in una condizione
// in questa condizione stabiliamo che se la parola word e la parola reverseWord sono uguali
// allora la condizione restituirà la frase "È palindroma"
// Se non è uguale la condizione restituisce "Non è palindroma"

// FUNCTIONS
function isTheWordAPalindrom (word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i-- ) {
        let letterWord = word[i];
        console.log(letterWord);
        reverseWord += letterWord;
    }
    let palindromOrNot;
    if (reverseWord === word) {
        palindromOrNot = "È palindromo"
    } else {
        palindromOrNot = "Non è palindromo"
    }
    return palindromOrNot
}

// Chiediamo all'utente di inserire una parola in un prompt
// Scorriamo la parola da sinistra verso destra 
// Scriviamola le lettere prese e concateniamole 
// Se il risultato sarà uguale alla parola scritta dall'utente
// Allora la parola è palindroma