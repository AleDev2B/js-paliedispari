/* Creo gioco pari o dispari;
L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.
*/

// definzione variabili globali
var Num1,Num2,TotalRandNum;

// msg all'utente di scelta tra pari o dispari
var BetUser1 = prompt("scegli pari o dispari")
document.getElementById("Userdecl").innerHTML = "Il giocatore ha scelto:" + BetUser1;

// creazione funzione randomize numbers
function Randomize (){
   Num1 = parseInt(Math.random() * 5)  // far generare al computer un primo numero random e memorizzarlo nella var1
   Num2 = parseInt(Math.floor(Math.random() * 5))  // far generare al computer un secondo numero random e memorizzarlo nella var2
  return Num1,Num2;
}

// verifica dell'oprazione di randomizzazione
console.log(Randomize(Num1,Num2));

// stampa a video dei due numeri estratti randomicamente
document.getElementById("firstnum").innerHTML = "Il primo numero estratto è il:" + Num1;
document.getElementById("secondnum").innerHTML = "Il secondo numero estratto è il:" + Num2;


// creazione della funzione Sum tra i due numeri Random creati dal computer
function Sum() {
   TotalRandNum = Num1 + Num2;  // dichiarazione dell'operazione di somma tra due numeri
  return TotalRandNum;
}
// verifica dell'oprazione di somma
console.log(Sum(Num1,Num2));

// definizione della condizione di pari e dispari per il totale della somma dei numeri (generati dal computer) e confrontarla con la selezione scelta dall'utente per stabilire se ha vinto o perso
if ((TotalRandNum%2 == 0) && BetUser1 == "pari") {
  document.getElementById('decl').innerHTML = "hai vinto alla grande"
}
else {
  document.getElementById('decl').innerHTML = "hai perso malamente"
}
