/* Creo gioco pari o dispari;
L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.
*/

// definzione variabili globali
var RandNum1,RandNum2,TotalRandNum;
// dichiarare all'utente se sceglie pari o dispari
var BetUser1 = prompt("scegli pari o dispari")

/*far generare al computer un primo numero random e memorizzarlo nella var1
far generare al computer un secondo numero random e memorizzarlo nella var2
creazione funzione randomize*/

function Randomize(RandNum1,RandNum2) {
  var RandNum1 = parseInt(Math.random() * 5);
  var RandNum2 = parseInt(Math.floor(Math.random() * 5));
  return RandNum1,RandNum2;
}


// // fare la somma dei due numeri generati
// generare la funzione Sum
function Sum(RandNum1,RandNum2) {
  var TotalRandNum = RandNum1 + RandNum2;
  return TotalRandNum;
}

// // definire la condizione di pari e dispari per la somma dei due numeri generati dal computer e confrontala con la selezione scelta dall'utente
if (TotalRandNum%2 == 0 && BetUser1 == "pari") {
  document.getElementById('decl').innerHTML = "hai vinto alla grande"
}
else {
  document.getElementById('decl').innerHTML = "hai perso malamente"
}
