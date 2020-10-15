var mail = prompt("Ciao! Inserisci la tua mail");
var lista = [ "boole@gmail.com","boolean@gmail.com"];
for (var i = 0; i < lista.length; i++) {
  if (mail == lista[i]){
    document.getElementById("h1").innerHTML = "Ok! La tua mail risulta salvata nel nostro database. Puoi continuare."
  }
  else{
    document.getElementById("h1").innerHTML = "Ops, la tua mail non risulta salvata. Riprova... magari con una delle seguenti: boolean@gmail.com oppure boole@gmail.com "
  }

}

//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
var numero1 = Math.floor(Math.random() * 7);
var numero2 = Math.floor(Math.random() * 7);
//SPiegare il gioco
  var via = prompt("Ciao! Adesso facciamo un gioco. Ora verranno casualmente selezionati due numeri. Uno per me(ROSSO) e uno per te(BLU). Chi avrà il maggiore vince.Dammi il via");
  via = via.lowerCase;
if (via === "via") {
  //printare i due numeri
    document.getElementById("red").innerHTML = numero1 ;
    document.getElementById("blue").innerHTML = numero2 ;
    //stabilire il vincitore
    if (numero1 > numero2) {
      document.getElementById("h1").innerHTML = "Questa volta ho vinto io :D";
    }
    else if (numero2 > numero1) {
      document.getElementById("h1").innerHTML = "Nooo, mi hai battuto XC";
    }
    else {
        document.getElementById("h1").innerHTML = "Pareggio XD"
    }

}
else {
  alert("ehi...devi scrivere via")
}
