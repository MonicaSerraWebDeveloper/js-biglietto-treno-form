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

    let offerMessageUser = 'Biglietto standard'; // Milestone 2 Creare la variabile del messaggio

    if (userAge < 18) { // Milestone 2 Creare la condizione per mostrare un messaggio
        offerMessageUser = 'Sconto del 20%'
    } else if (userAge >= 65) {
        offerMessageUser = 'Sconto del 40%'
    }

    document.querySelector('.offer-user').innerHTML = offerMessageUser; // Milestone 2 stampare il messaggio in HTML

    const roundedPrice = parseFloat(totalPrice.toFixed(2)); // Arrotondiamo i decimali ad un massimo di due cifre

    document.querySelector('.message-for-user').innerHTML = `€ ${roundedPrice}`  // Stampiamo il risultato finale 
});


// Milestone 2

buttonCalculatorTicket.addEventListener('click', function () { // Creare una variabile per il nome inserito in input
    const userName = document.querySelector('#user-name').value;
    document.querySelector('.result-user').innerHTML = userName // Inseriamo lo userName dove desideriamo farlo comparire
    
    const containerTicketResult = document.querySelector('.ticket-result-container'); // Milestone 2 far comparire il risultato del biglietto attraverso style
    containerTicketResult.style.display = 'block'
});

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function () { // Pulsante di reset che torna alla situazione iniziale
    document.querySelector('#trip-distance').value = '';
    document.querySelector('#user-age').value = '';
    document.querySelector('#user-name').value = '';

    const containerTicketResult = document.querySelector('.ticket-result-container');
    containerTicketResult.style.display = 'none';

});






