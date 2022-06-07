// for (let index = 0; index < potentionalNumberArray.length; index++) {

//     var potentionalNumberArray = potentionalNumberArray [index];
//     potentionalNumberArray[index] = parseInt(potentionalNumberArray[index]);
//     potentionalNumberArray[index] = (potentionalNumberArray[index]);
    
// }
function doSomething(){

    var inputedNums = document.getElementById("nmbInput").value;
    
    var potentionalNumberArray = inputedNums.split(", ");

var positiveNmb = 0;
var negativeNmb = 0;
var zeroNmb = 0;

for (let index = 0; index < potentionalNumberArray.length; index++) {  
    if (potentionalNumberArray[index] > 0) {
        positiveNmb += 1;
        
        
    }
    else if(potentionalNumberArray[index] < 0){
        negativeNmb += 1;
    }
    else {
        zeroNmb += 1;
    }
    
}

var positivePercentage = positiveNmb / potentionalNumberArray.length;
positivePercentage = (positivePercentage * 100).toFixed(2)  + "%";


var negativePercentage = negativeNmb / potentionalNumberArray.length;
negativePercentage = (negativePercentage * 100).toFixed(2)  + "%";

var zeroPercentage = zeroNmb / potentionalNumberArray.length;
zeroPercentage = (zeroPercentage * 100).toFixed(2)  + "%";

document.getElementById("display").innerHTML = 'Positive: ' + positivePercentage + 'Negative: ' + negativePercentage + "Zero: " + zeroPercentage;



}

