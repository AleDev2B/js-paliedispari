/* DESCRIZIONE:
Chiedo a utente di inserire come input una parola
tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
dò output a utente dicendogli che ho verificato;
qui sicuramente da cercare ci sarà il come revertare una parola.*/

// creo un array vuoto
var ArrayWord = [];

// dichiaro le var globali
var ReverseArray, JointArray, Wordsplit, UserWord

// Chiedo all'utente di inserire come input una parola
var UserWord = prompt("Ciao Frenzo, inserisci una parola magica")
console.log(UserWord);

// creo la funzione stringa inversa
function reverseString() {

  Wordsplit = UserWord.split("") // divido la parola in lettere e la salvo in una variabile

  ArrayWord.push(Wordsplit) // prendo la parola e la inserisco nell'array vuoto

  ReverseArray = Wordsplit.reverse() // uso il metodo reverse per modificare l'array con le stringhe inserite

  JointArray = ReverseArray.join("") // uso il metodo join per unire tutti gli elementi dell'array modificato in una sola stringa
  return JointArray;
}

reverseString(UserWord);

document.getElementById('parola').innerHTML = "Questa è la parola indicata dall'utente:" + UserWord;
document.getElementById('parola2').innerHTML = "La parola scelta è stata suddivisa in singole lettere:"+ ArrayWord;
document.getElementById('parolainv').innerHTML = "Questo è l'inverso della parola iniziale:" + ReverseArray;


if (UserWord === JointArray) {
  alert("Complimenti la parola scelta forma un palindromo")
}else {
  alert("Mi dispiace la parola scelta non è palindroma")
}
