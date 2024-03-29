// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

// chiediamo all'utente se sceglie "pari" o "dispari"
let userChoice = prompt('Scegli tra pari e dispari');
console.log(userChoice);

while (userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = prompt('Scegli tra pari e dispari');
}

// chiediamo all'utente un numero
const randomUserNumber = parseInt(prompt('Dimmi un numero da 1 a 5'));
console.log('Numero user', + randomUserNumber);

// mettiamo un numero casuale da 1 a 5 creato dal computer in una variabile
const randomRobotNumber = getRndInteger(1, 5);
console.log('Numero computer', + randomRobotNumber);

// eseguiamo il risultato della somma tra il numero di userNum e il numero robotNum
const resultOfTwoNumbers = sumOfNumber (randomUserNumber, randomRobotNumber);
console.log(resultOfTwoNumbers);

const resultEvenOrOdd = evenOrOdd(resultOfTwoNumbers)
console.log(resultEvenOrOdd);

const winOrLoseMessage = userWinOrLose (userChoice, resultEvenOrOdd)
alert(winOrLoseMessage);

// FUNCTIONS
// Creiamo una funzione sumOfNumber
// userNum -> numero intero casuale tra 1 e 5 scelto dall'utente con un prompt
// robotNum -> numero intero casuale tra 1 e 5 scelto dal computer tramite la funzione di w3school
// return il risultato numero intero della somma tra userNum e robotNum
function sumOfNumber (userNum, robotNum) {
    const result = userNum + robotNum;
    return result
}

// Funzione per stabilire se un numero è pari o dispari 
// e restituire una stringa "pari" se il numero è pari
// una stringa "dispari" se il numero è dispari

function evenOrOdd(number) {
    let evenOrOddNumber;
    if (number % 2 === 0) {
        evenOrOddNumber = 'pari'
    } else {
        evenOrOddNumber = 'dispari'
    }
    return evenOrOddNumber
}

// Funzione che decreta se il lo user ha indovinato la sua previsione scegliendo tra pari e dispari
// inputUser -> è una stringa presa da un prompt scritto da uno user
// resultSum -> è una stringa che deriva dalla funzione evenOrOdd 
// in una condizione viene imposto che se la stringa inputUser è uguale a resultSum
// allora la variabile stabilita fuori di userMessage darà un messaggio di vittoria all'utente
// in tutti gli altri casi nella variabile userMessage darà il messaggio di aver sbagliato la previsione
function userWinOrLose (inputUser, resultSum) {
    let userMessage;
    if (inputUser === resultSum) {
        userMessage = `È uscito il numero: ${resultOfTwoNumbers} ed è: ${resultEvenOrOdd} quindi hai vinto`
    } else {
        userMessage = `È uscito il numero: ${resultOfTwoNumbers} ed è: ${resultEvenOrOdd} quindi hai perso`
    }
    return userMessage
}

// funzione per generare un numero random preso da w3school
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
