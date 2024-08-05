/* 

Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 

 */ 

//   in questo foglio di js abbiamo creato due funzioni separate , una per invertire la parola e una per confrontare se la parola invertita è uguale alla parola inserita dall' utente


let userWord = prompt('Inserisci una parola');
console.log('userWord',userWord, typeof userWord)

let userWordLowerCase = userWord.toLowerCase();
console.log('userWordLowerCase',userWordLowerCase, typeof userWordLowerCase)



// richiamo della funzione con argomento o paramentri
const result = isPalindrome(userWordLowerCase);
console.log('result',result, typeof result);

if (result){
  console.log('la parola è palindroma');
  alert('la parola è palindroma');

}
else{
  alert('la parola non è palindroma');
  console.log('la parola non è palindroma');

}

//  Functions 

// definizione di una funzione con argomento o paramentri
function isPalindrome(word){
   const reversedWord = reverseWord(word);

if (word == reversedWord){
  return true;
}
else {
  return false;
}
}

function reverseWord (wordToBeReversed) {
    let reversedWord = '';
    for ( let i = wordToBeReversed.length - 1; i >= 0; i--){
      console.log(wordToBeReversed[i]);
      // reversedWord = reverseWord + wordToBeReversed[i] ;
      reversedWord +=  wordToBeReversed[i] ;
    }
    
    console.log('reverseWord', reversedWord , reversedWord.length , typeof reversedWord)

    return reversedWord ;
}