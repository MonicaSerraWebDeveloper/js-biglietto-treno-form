// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// Creiamo la variabile per il pulsante
const buttonCalculatorTicket = document.querySelector('.calculator');

// Creiamo l'evento di ascolto al click per il pulsante
buttonCalculatorTicket.addEventListener('click', function () {
    // Creiamo la variabile per l'input Km
    const userKm = parseInt (document.querySelector('#trip-distance').value);
    // Creiamo la variabile per definire il numero della moltiplicazione 0.21
    const numberForCalculation = 0.21;
    // Creiamo il calcolo matematico tra la variabile Km e il numero 0.21
    const regularPrice = userKm * numberForCalculation;


    // Creiamo la variabile per l'input Age
    const userAge = parseInt (document.querySelector('#user-age').value);

    // Creiamo lo sconto 20%
    const discountTwenty = regularPrice - (regularPrice * 20 / 100);
    // Creiamo lo sconto 40% 
    const discountForty = regularPrice - (regularPrice * 40 / 100);
    console.log(discountForty);

});
    
    // Creiamo la condizione per gli under 18 e gli over 65
    // Stampiamo il risultato finale 
