// Milestone 1

const buttonCalculatorTicket = document.querySelector('.calculator');  // Creiamo la variabile per il pulsante

buttonCalculatorTicket.addEventListener('click', function () {  // Creiamo l'evento di ascolto al click per il pulsante
   
    const userKm = parseInt (document.querySelector('#trip-distance').value);  // Creiamo la variabile per l'input Km
    
    const numberForCalculation = 0.21;  // Creiamo la variabile per definire il numero della moltiplicazione 0.21

    const regularPrice = userKm * numberForCalculation;  // Creiamo il calcolo matematico tra la variabile Km e il numero 0.21

    const userAge = parseInt (document.querySelector('#user-age').value);  // Creiamo la variabile per l'input Age

    const discountTwenty = regularPrice - (regularPrice * 20 / 100);  // Creiamo lo sconto 20%
    
    const discountForty = regularPrice - (regularPrice * 40 / 100);  // Creiamo lo sconto 40% 

    let totalPrice = regularPrice;  // Creiamo la condizione per gli under 18 e gli over 65

    if (userAge < 18) {
        totalPrice = discountTwenty
    } else if (userAge >= 65) {
        totalPrice = discountForty
    }

    const roundedPrice = parseFloat(totalPrice.toFixed(2)); // Arrotondiamo i decimali ad un massimo di due cifre
    console.log(roundedPrice);

    document.querySelector('.message-for-user').innerHTML = `Il prezzo del tuo biglietto è: ${roundedPrice}`  // Stampiamo il risultato finale 
});
    
