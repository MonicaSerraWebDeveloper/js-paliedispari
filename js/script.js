// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto


// FUNCTIONS

const resultOfTwoNumbers = sumOfNumber (4, 5);
console.log(resultOfTwoNumbers);

function sumOfNumber (userNum, robotNum) {
    let sum = userNum + robotNum;
    return sum
}
// Creiamo una funzione sum
// Sommiamo il numero che ci viene dato dall'utente in userNum
// Al numero generato dal computer in robotNum


// funzione per generare un numero random preso da w3school
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// L'utente sceglie "pari" o "dispari"
// Chiediamo all'utente un numero da 1 a 5 
// Generiamo un numero random da 1 a 5 per il computer
// Facciamo la somma del numero dell'utente con il numero del computer
// Se il risultato della somma è pari restituiamo "pari"
// Se il risultato della somma è dispari restituiamo "dispari"
// Se il risultato tra pari e dispari corrisponde alla scelta dell'utente ha vinto l'utente
// Se il risultato è diverso rispetto alla scelta dell'utente allora l'utente ha perso

