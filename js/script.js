/* 

Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 

 */
// creo variabile parola e chiedo all'utente di inserirla
    let parola = prompt('Inserisci una parola');
    // const parola = ('') per inserirla ma senza chiederla all'utente
    console.log(parola);

    // con .toLowerCase trasformiamo la parola inserita dall' utente tutta  in minuscolo 
    parola = parola.toLowerCase();
    console.log(parola);

    
    // con split ,seguito da una parentesi con apici vuota, separa le stringhe della variabile ottenendo un array che contiene le lettere della parola 
    let parolaDivisa = parola.split('');
    console.log(parolaDivisa);

    // con reverse  invertiamo le lettere intese come stringhe separate della variabile
    parolaDivisa.reverse();
    console.log(parolaDivisa);

    // con join rimette insieme le lettere 
    let parolaInvertita = parolaDivisa.join('');
    console.log(parolaInvertita);

    // quindi si confronta se la parola inserita è uguale alla parola invertita 
    // se parola uguale a parola inveretita allora è palindroma 
    if(parola === parolaInvertita){
    console.log('La parola da lei inserita è palidroma');
    // altrimenti non è un parola palindroma 
  } else {
    console.log('La parola da lei inserita non è palidroma');
  }
// non ho capito bene come si usa poi la funzione 
  // function parolaPalindroma(stringa){
  //   const StringaInversa = stringa.toLowerCase().split('').reverse().join('');
  //   return StringaInversa;
  // }

  // const parolaUtente  = 'Anna';
  // parolaUtente = parolaPalindroma(parolaUtente);
  // console.log('parolaUtente' , parolaUtente , typeof parolaUtente);


    // const parolaUtente = prompt('Inserisci una parola');
    // console.log(parolaUtente)
    // if (ParolaPalindroma(parolaUtente)){
    //     console.log('la parola è Palindroma ');
    // }else{
    //     console.log('la parola non è Palindroma ');
    // }




  // function invertiParola(str){
  //   const strInversa = str.split('').reverse().join('');  
 //   return strInversa;
 // }


    // let parolaInversa = invertiParola(parola);

    // const parolaInvertita = parola.split('').reverse().join('');

    // function parolaPalindroma (stringa){
    //     if(parola === parolaInvertita){
    //         console.log(parola);
    //         console.log('La parola inserita è palidroma');
    //     }else {
    //         console.log(parola);
    //         console.log('La parola inserita non è palidroma'); 
    //     }
    // }

    // let parolaDivisa = parola.split('');
    // parolaDivisa = parolaDivisa.reverse();
    // let parolaInvertita = parolaDivisa.join('');
    //     if(parola === parolaInvertita){
    //          console.log('la parola è palindroma');
    //     }else{
    //          console.log('la parola non è palindroma');
    //     }


// Esercizio  visto su Internet  da cui prendere spunto 
// const parola = prompt('Inserisci una parola');

// const parolaInversa = invertiParola(parola);

// if(parola == parolaInversa){
//     console.log(parola);
//     console.log('La parola da lei inserita è palidroma');
//   } else {
//     console.log(parola);
//     console.log('La parola da lei inserita non è palidroma');
//   }
  
// function invertiParola(str){
//   const strInversa = str.split('').reverse().join('');  
//   return strInversa;
// }