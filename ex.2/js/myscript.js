/* Creo gioco pari o dispari;
L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.
*/

// definzione variabili globali
var Num1,Num2,TotalRandNum;
// dichiarare all'utente se sceglie pari o dispari
var BetUser1 = prompt("scegli pari o dispari")
document.getElementById("Userdecl").innerHTML = "Il giocatore ha scelto:" + BetUser1;
/*far generare al computer un primo numero random e memorizzarlo nella var1
far generare al computer un secondo numero random e memorizzarlo nella var2
creazione funzione randomize*/

function Randomize (){
   Num1 = parseInt(Math.random() * 5)
   Num2 = parseInt(Math.floor(Math.random() * 5))
  return Num1,Num2;
}

// verifica
console.log(Randomize(Num1,Num2));

// stampa a video dei due numeri estratti randomicamente
document.getElementById("firstnum").innerHTML = "Il primo numero estratto è il:" + Num1;
document.getElementById("secondnum").innerHTML = "Il secondo numero estratto è il:" + Num2;
// // fare la somma dei due numeri generati
// generare la funzione Sum
function Sum() {
   TotalRandNum = Num1 + Num2;
  return TotalRandNum;
}

console.log(Sum(Num1,Num2));
// // definire la condizione di pari e dispari per la somma dei due numeri generati dal computer e confrontala con la selezione scelta dall'utente
if ((TotalRandNum%2 == 0) && BetUser1 == "pari") {
  document.getElementById('decl').innerHTML = "hai vinto alla grande"
}
else {
  document.getElementById('decl').innerHTML = "hai perso malamente"
}
