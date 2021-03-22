/**
 * CONTROLLO EMAIL
 * 1. Chiedi all’utente la sua email; 
 * 2. controlla che sia nella lista di chi può accedere
 * 3. stampa un messaggio appropriato sull’esito del controllo.
 *
 * */

//  Elenco di email inserite nel database
 var email = ['prova@prova.it', 'email@email.it', 'test@test.it'];
//  console.log(email);
 
//  Richiede l'inserimento dell'email da controllare nel db
 var user = prompt( 'Inserisci l\'email ').toLowerCase();
 console.log('l\'email inserita è: ' + user);
 
 // stato default di controllo per verificare se il nome è stato trovato
 var userFound = false;
 
 //contatore per verificare l'email presente nella lista
 for ( var i = 0; i < email.length; i++) {
     if ( email[i] === user ){
         userFound = true;
         break; // una volta trovato l'email esce dal for
     }
 }
 
 // Se trova il nome entra e verifica
 if (userFound === true){
     console.log('L\'email è presente nel database');
 } else {
     console.log('Errore, email non trovata nel database');
 }


/** 
 * GIOCO DEI DADI
 * 1. Generare un numero random da 1 a 6 sia per il giocatore;
 * 2. Generare un numero random da 1 a 6 sia per il PC; 
 * 2. Confronta i numeri random tra giocatore e pc;
 * 3. Stabilisce il vincitore in base a chi fa il punteggio più alto, oppure stabilisci il pareggio * se i numeri sono uguali
 */
 alert('Giochiamo ai dadi!');
console.log('GIOCHIAMO AI DADI!')

 var user = prompt( 'Inserisci il tuo nome:')

 //  Lancio dado user
 var dadoUser = Math.floor(Math.random() * 6) + 1;
 console.log( user + ' lancia il dado ... è uscito il numero: ' + dadoUser);

 //  Lancio dado pc
 var dadoPc = Math.floor(Math.random() * 6) + 1;
 console.log('Il PC lancia il dado ... è uscito il numero: ' + dadoPc);

 if (dadoUser > dadoPc){
    console.log('Ha vinto ' + user);
}else if (dadoUser < dadoPc){
    console.log('Spiacente! Ha vinto il PC');
}else{
    console.log('Parità');
}