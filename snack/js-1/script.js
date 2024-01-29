// Crea un programma che chiede all'utente una temperatura in gradi Celsius e la converte in Fahrenheit,

//  tramite una ricerca su internet potrete trovare la formula corretta per effettuare la conversione .

//  Visualizza la temperatura convertita.


// const temp = Number(prompt);

const temp = Number(prompt());





function CassOne( temp ) {
    return ((temp * 9.0 / 5.0) + 32.0);
}

document.getElementById("result").innerHTML = `Questi sono i tuo gradi ${CassOne(temp)}`



