/*
Creare 3 quadrati di 70px messi uno fianco all'altro di 3 colori diversi
Il quadrato centrale inizialmente avrà uno 0 al centro
Il quadrato di sinistra DECREMENTERÀ il valore del quadrato centrale a ogni click
Il quadrato di destra INCREMENTERÀ il valore del quadrato centrale a ogni click
*/

//Prima versione con variabile globale

// var contatore = 0;
//
// $(".quadrato_left").click(function() {
//   contatore--;
//   console.log(contatore);
//   $(".quadrato_center").html(contatore)
//
// });
//
// $(".quadrato_right").click(function() {
//   contatore++;
//   console.log(contatore);
//   $(".quadrato_center").html(contatore)
//
// });

//Versione senza variabile globale

$(".quadrato_left").click(function() {
  var risultato =  $(".quadrato_center").html()
  console.log(risultato);
  risultato = parseInt(risultato);
  risultato--;
  $(".quadrato_center").html(risultato);
});

$(".quadrato_right").click(function() {
  var risultato =  $(".quadrato_center").html()
  console.log(risultato);
  risultato = parseInt(risultato);
  risultato++;
  $(".quadrato_center").html(risultato);

});

//Manca sintetizzare il codice
