/* ESERCIZIO 1 */
// Scrivi un algoritmo per trovare il più grande tra due numeri interi.

// function numMax(num1, num2,) {
//   if (num1 >= num2) {
//     console.log(`${num1} è numero più grande`)
//   } else {
//     console.log(`${num2} è numero più grande`)
//   }
// }
// numMax(44, 7);

let num1 = 44;
let num2 = 7;

if (num1 >= num2) {
    console.log(`${num1} è numero più grande`)
  } else {
    console.log(`${num2} è numero più grande`)
  }


/* ESERCIZIO 2 */
/* Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.
  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const numSize = 28;

if (numSize < 5) {
    console.log("Tiny");
} else if (numSize < 10) {
    console.log("Small");
} else if (numSize < 15) {
    console.log("Medium");
} else if (numSize < 20) {
    console.log("Large");
} if (numSize >= 20) {
    console.log("Huge");
}


/* ESERCIZIO 3 */
// Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8

for (let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8){
        continue;
    }
    console.log(i);
}


/* ESERCIZIO 4 
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
    if (i %2 === 0){
        console.log(i, "even"); // avevo messo [i], e mi aveva sballato tutto. perchè? perchè con [] facevo riferimento all'iterazione di un array? 
    } else {
        console.log(i, "odd");
    }
}


/* ESERCIZIO EXTRA 1 */
// Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.

num1 = 8;
num2 = 0;

if (num1 === 8 || num2 === 8){
    console.log("Uno dei valori è uguale a 8");
} else if (num1 !== 8 || num2 !== 8){
    console.log("Nessuno dei valori è uguale a 8");
} 
if ((num1 + num2) === 8) {
    console.log("La somma dei due valori è uguale a 8");
} else if ((num1 - num2) === 8){
    console.log("La differenza dei due valori è uguale a 8");
} else {
    console.log("Come anche, ne la somma, ne la differenza tra loro");
}


/* ESERCIZIO EXTRA 2 */
// Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.

let totalShoppingCart = 49;
let shippingCost = 10;
let totalCheckout = 0;

if (totalShoppingCart > 50){
    console.log("Hai diritto alla spedizione gratuita!")
    shippingCost = 0; 
    totalCheckout = (totalShoppingCart + shippingCost);
    console.log("Il costo totale del tuo ordine è ", totalCheckout);
} else {
    console.log("Non hai raggiunto il minimo di 50€ per ricevere la spedizione gratuita");
    totalCheckout = (totalShoppingCart + shippingCost);
    console.log("Il costo totale del tuo ordine è ", totalCheckout);
}


/* ESERCIZIO EXTRA 4 */
// Oggi è il Black Friday e viene applicato il 20% su ogni prodotto. Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.

let totalCheckoutSale = 0;
let missingFreeShipping = 0;

console.log("Oggi Black Friday! Per te uno sconto del 20%")
if ((totalShoppingCart - totalShoppingCart * 0.20) > 50){
    totalCheckoutSale = totalShoppingCart;
    console.log("Complimenti, hai diritto alla spedizione gratuita!")
    console.log("Il costo totale del tuo ordine è ", totalCheckoutSale);
} else {
    missingFreeShipping = (50 - totalShoppingCart);
    totalCheckoutSale = (totalShoppingCart + shippingCost);
    console.log("Spiacenti! Non hai raggiunto il limite minimo di 50€ per la spedizione gratuita.")
    console.log(`Aggiungi ${missingFreeShipping}€ per ricevere la spedizione gratuita`);
    console.log("Il costo totale del tuo ordine è ", totalCheckoutSale);
}


/*  ESERCIZIO EXTRA 4 */
// Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
// La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.

let isMale = true; 
let gender = isMale ? "Male" : "Female";

console.log(gender);


/* ESERCIZIO EXTRA 5 */ 
// Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i %3 === 0 && i %5 === 0){
        console.log(i, "Fizz!")
    } else if (i %5 === 0){
        console.log(i, "Buzz!")
    } else if (i %3 === 0){
        console.log(i, "FizzBuzz!")
    } else {
    console.log(i)
}
}