// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!


const theResultOfPalindrome = isTheWordAPalindrom (userWord)

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
    
}

// Chiediamo all'utente di inserire una parola in un prompt
// Scorriamo la parola da sinistra verso destra 
// Scriviamola le lettere prese e concateniamole 
// Se il risultato sarà uguale alla parola scritta dall'utente
// Allora la parola è palindroma