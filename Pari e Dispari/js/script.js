/* 

Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

 */
// usercìChoice diveneta una let
let userChoice = prompt('scegli p o d');
console.log('userChoice', userChoice, typeof userChoice );

// aggiungiamo un while per validare l'userChoice 
while ( userChoice != 'p' && userChoice != 'd') {
    userChoice = prompt( ' valore con valido! Scegli solo tra p e d grazie:')
}

const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5 (compresi):'));
console.log('userNumber', userNumber , typeof userNumber);

// aggiungiamo un while per validare l'userNumber se mettiamo un stringa oppure se un numero minore di 1 o un numero maggiore di 5 
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = prompt( ' valore con valido! Scegli un numero tra 1 e 5 (compresi): ')
}

const pcNumber = generateRandomNumber();
console.log('pcNumber', pcNumber , typeof pcNumber);

const sum = userNumber + pcNumber;
console.log('sum', sum , typeof sum);

const sumEvenOrOdd = evenOrOdd(sum)
if (( userChoice == 'p' && sumEvenOrOdd == 'pari') || ( userChoice == 'd' && sumEvenOrOdd == 'dispari')) { 
    // semplificato scrittura mettendo if ed else if sulla stessa riga separandoli con un or || 
  alert('hai vinto');
}
else {
   alert('hai perso');
}

/*
 Functions
*/

function generateRandomNumber() {
    const num =  Math.floor(Math.random() * 5 ) + 1;

    return num;
}

function  evenOrOdd (num) {
    if ( num % 2 == 0 ) {
        return 'pari';
    }
    else {
        return 'dispari';
    }

}

