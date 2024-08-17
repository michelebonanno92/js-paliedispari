// dividendo a metà la parola 

const userWord = prompt('Inserisci una parola');
console.log('userWord',userWord, typeof userWord);

const userWordLowerCase = userWord.toLowerCase();
console.log('userWordLowerCase',userWordLowerCase, typeof userWordLowerCase);

const result = isPalindrome(userWordLowerCase);
// console.log('result',result, typeof result);


function isPalindrome(word) {
    
    for ( let i = 0; i < (word.lenght / 2); i++ ) {
      console.log(i);
        
    }

}


