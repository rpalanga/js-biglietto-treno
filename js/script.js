// 

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.



const age = Number( prompt("quanti anni hai?"));

if age {
    
}

const costPromile= 0.21;

const km = Number ( prompt("indica la distanza in kilometri"));

let sum = km * costPromile;

console.log(sum);


// Sconti 

const DiscountAge1 = 18;

const DiscountAge2 = 64;

if (age < DiscountAge1) {
   sum = sum - (sum * 20 / 100);


} 
    

if (age > DiscountAge2){
    sum = sum - (sum * 40 / 100);
}

document.getElementById("distance").innerHTML = `La distanza selezionata è ${km} `;

document.getElementById("age").innerHTML = `La tua età è ${age} `;

document.getElementById("result").innerHTML = `Il costo del Biglietto è ${sum.toFixed(2)} `;














