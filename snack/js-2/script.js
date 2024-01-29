
// Scrivi un programma che prende tre numeri in input usando prompt.

//  Calcola la media di questi numeri e visualizza il risultato con almeno due decimali.

const media = Number(prompt())

const media1 = Number(prompt())

const media2 = Number(prompt())

const sum = media + media1 + media2;

function CassOne(sum) {
    return (sum / 3).toFixed(2)
}

document.getElementById("result").innerHTML = `questa è la Media ${CassOne(sum)}`

