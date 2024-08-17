/* 

Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

 */

const userChoice = prompt('scegli p o d');
console.log('userChoice', userChoice, typeof userChoice );

const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5 (compresi):'));
console.log('userNumber', userNumber , typeof userNumber);

const pcNumber = generateRandomNumber();
console.log('pcNumber', pcNumber , typeof pcNumber);

const sum = userNumber + pcNumber;
console.log('sum', sum , typeof sum);

if ( userChoice == 'p' && sum % 2 == 0 ){
  alert(' hai vinto ')
}
else if ( userChoice == 'd' && !sum % 2 == 0){
  alert(' hai vinto ')
}
else {
   alert('ha vinto il computer') 
}

/*
 Functions
*/

function generateRandomNumber() {
    const num =  Math.floor(Math.random() * 5 ) + 1;

    return num;
}

function  evenOrOdd () {
    if ( num % 2 == 0 ) {
        return 'pari';
    }
    else {
        return 'dispari';
    }

}

