const intekter = document.getElementById("inntekter");
const intekterBelop = document.getElementById("IntekterBelop");
const leggTilInntekt = document.getElementById("leggTilInntekt");

const utgift = document.getElementById("utgifter");
const utgiftBelop = document.getElementById("UtgifterBelop");
const leggTilUtgift = document.getElementById("leggTilUtgift");

const innekter = document.getElementById("inntekter");
const utgifter = document.getElementById("inntekter");


const saldo = document.getElementById("saldo");

let totalInntekter = 0;
let totalUtgifter = 0;
let totalSaldo = 0;

leggTilInntekt.addEventListener("click", function() {
    
    const navn = intekter.value;
     const belop = intekterBelop.value;
     const nyInntekt = document.createElement("li");

     nyInntekt.textContent = navn + " " + belop + "kr"
     intekter.appendChild(nyInntekt);
});



