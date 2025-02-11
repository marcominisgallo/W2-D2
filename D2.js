/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number = { num1: 4, num2: 5 };

if (number.num2 < number.num1) {
  console.log("è una  minore");
} else {
  console.log("è maggiore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (number.num1 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (number.num2 % 5 === 0) {
  console.log("è divisibile per 5!");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

number.num3 = 6;
number.num4 = 2;

if (number.num3 === 8 || number.num3 + number.num4 === 8) {
  console.log("il valore è 8!");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 49;
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita");
} else {
  console.log(
    "il costo del tuo acquisto è di " +
      totalShoppingCart +
      "€ (articoli selezionati) + 10€ (spedizione), per un totale di " +
      (totalShoppingCart + 10) +
      "€"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart2 = 52;
const discount = {
  percentage: 20,
  day: 28_11_2025,
};

if (totalShoppingCart2 > 50 && discount.day === 28_11_2025) {
  console.log(
    "hai diritto al 20% di sconto!il tuo carrello ora è di " +
      (totalShoppingCart2 - (totalShoppingCart2 * discount.percentage) / 100) +
      " €"
  ),
    (totalShoppingCart3 =
      totalShoppingCart2 - (totalShoppingCart2 * discount.percentage) / 100);
} else if (totalShoppingCart2 < 50 || discount.day !== 28_11_2025) {
  console.log("non hai diritto allo sconto"),
    (totalShoppingCart3 = totalShoppingCart2);
}

totalShoppingCart4 = totalShoppingCart3;
//totalShoppingCart2 - (totalShoppingCart2 * discount.percentage) / 100;
if (totalShoppingCart4 >= 50) {
  console.log("spedizione gratuita"),
    (totalShoppingCart3 =
      totalShoppingCart2 - (totalShoppingCart2 * discount.percentage) / 100);
} else {
  console.log(
    "il costo del tuo acquisto è di " +
      totalShoppingCart4 +
      " (carrello scontato) + " +
      10 +
      "€ (spedizione), per un totale di " +
      (totalShoppingCart3 + 10) +
      "€."
  ),
    (totalShoppingCart4 = totalShoppingCart3 + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num5 = 5;
const num6 = 3;
const num7 = 7;

const ord = { ord1: num5, ord2: num6, ord3: num7 };

console.log(ord);

if (num5 > num6 && num6 < num7) {
  ord1: num6;
  ord2: num5;
  ord3: num7;
  console.log(ord);
} else {
  console.log("non riordinabili!");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num8 = 5;
if (typeof num8 === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num8 % 2 === 0) {
  console.log("èpari!");
} else {
  console.log("è dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = [];

array.unshift(1);

console.log(array);

array.push(2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[9] = 100;

console.log(array);
