/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(a,b) {
  if (a === b){
      return 3 * (a + b);
  } else {
      return a + b;
  }
};

console.log(crazySum(5,5)) // Stamperà 30
console.log(crazySum(2,3)) // Stamperà 5

/* ESERCIZIO 2
Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(a) {
  if ((a >= 20 && a <= 100) || a === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(50));  // Stamperà "true"
console.log(boundary(400)); // Stamperà "true"
console.log(boundary(5));   // Stamperà "false"

/* ESERCIZIO 3
Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(parola){

  let stringa = parola;
  let caratteri = stringa.split(""); 
  
  console.log(caratteri)
  
  const contrario = caratteri.reverse()
  
  return contrario.join('')
}

console.log(reverseString("FRANCESCO")) // Stamperà "OCSECNARF"

/* ESERCIZIO 4
Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(parola){
  
  const parolaInMaiuscolo = parola;
  return parolaInMaiuscolo.toUpperCase()

}

console.log(upperFirst("francesco")) // Stamperà "FRANCESCO"

/* ESERCIZIO 5
Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
let arrayNumeriCasuali = [];
for (let i=0; i<n; i++){
    arrayNumeriCasuali.push(Math.floor(Math.random() * 11))
}
return arrayNumeriCasuali;
}

console.log(giveMeRandom(10)) // Stamperà un array con 10 numeri casuali

//EXTRA:

/* ESERCIZIO 1
Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){
let superficie = l1*l2
return superficie
}

console.log(area(12,24))

/* ESERCIZIO 2
Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


let result;

function crazyDiff(a) {
result = (a - 19);
if (result > 19){
  return result * 3

} else {
  return result
}
}

console.log(crazyDiff(50)) // Stamperà 93
console.log(crazyDiff(20)) // Stamperà 1

/* ESERCIZIO 3
Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(parola){
if (parola.startsWith("code")){
  return parola;
} else if (parola.startsWith("code")===false){
  return "code " + parola;
}
}

console.log(codify("Ciao, come stai?")) //Stampa code Ciao, come stai?
console.log(codify("code, come stai?")) //Stampa code, come stai?

/* ESERCIZIO 4
Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
SUGGERIMENTO: operatore modulo
*/

function check3and7(n){
if (n % 3 === 0 || n % 7 === 0 ){
  return true
} else {
  return false
}
}

console.log(check3and7(34)) // Stamperà false
console.log(check3and7(27)) // Stamperà true
console.log(check3and7(28)) // Stamperà true

/* ESERCIZIO 5
Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(parola){

string = parola.split("")
string.pop()
string.shift()
final = string.join("")

return final
}

console.log(cutString("Buongiorno"))
