// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

// chiediamo all'utente un numero
const randomUserNumber = parseInt(prompt('Dimmi un numero da 1 a 5'));
console.log('Numero user', + randomUserNumber);

// mettiamo il numero del casuale da 1 a 5 creato dal computer in una variabile
const randomRobotNumber = getRndInteger(1, 5);
console.log('Numero computer', + randomRobotNumber);

// eseguiamo il risultato della somma tra il numero di userNum e il numero robotNum
const resultOfTwoNumbers = sumOfNumber (randomUserNumber, randomRobotNumber);
console.log('Risultato', + resultOfTwoNumbers);

// FUNCTIONS
// Creiamo una funzione sumOfNumber
// userNum -> numero intero casuale tra 1 e 5 scelto dall'utente con un prompt
// robotNum -> numero intero casuale tra 1 e 5 scelto dal computer tramite la funzione di w3school
// return il risultato numero intero della somma tra userNum e robotNum
function sumOfNumber (userNum, robotNum) {
    const result = userNum + robotNum;
    return result
}

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

