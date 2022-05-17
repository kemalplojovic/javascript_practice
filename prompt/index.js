
var unosVrednosti = prompt("Unesite godinu: ");
unosVrednosti = parseInt(unosVrednosti);

var unosDrugeVrednosti = prompt("Unesite vasu godinu rodjenja:");
unosDrugeVrednosti = parseInt(unosDrugeVrednosti);

var brojGodina = parseInt(unosVrednosti) - parseInt(unosDrugeVrednosti);

var textZaConsolu = "Godine: ";


console.log(textZaConsolu + brojGodina);
