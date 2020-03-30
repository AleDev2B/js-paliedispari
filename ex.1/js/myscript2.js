/* DESCRIZIONE:
Chiedo a utente di inserire come input una parola
tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
dò output a utente dicendogli che ho verificato;
qui sicuramente da cercare ci sarà il come revertare una parola.*/


// al prompt inserire una parola e salvarla in una var.
var UserWord = prompt("ciao frenzo inserisci una parola")
console.log(UserWord);

// creare un primo array vuoto
var ArrayWord = [];


// suddividere la parola in lettere e pusharla all'interno del'array vuoto
ArrayWord.push(UserWord.split(""))
console.log(ArrayWord);


// creare ciclo che controlli ogni singola lettera in base alla lunghezza della stessa e verifichi se i caratteri sono uguali
for (var i = ArrayWord.length - 1; i >= 0; i--) {
  ArrayWord += 
  console.log(ArrayWord);
}
