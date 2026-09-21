const inntekt = document.getElementById("inntekt");
const inntektBelop = document.getElementById("IntekterBelop");
const leggTilInntekt = document.getElementById("leggTilInntekt");

const utgift = document.getElementById("utgift");
const utgiftBelop = document.getElementById("UtgifterBelop");
const leggTilUtgift = document.getElementById("leggTilUtgift");

const inntekter = document.getElementById("inntekter");
const utgifter = document.getElementById("utgifter");

const saldo = document.getElementById("saldo");

let totalInntekter = 0;
let totalUtgifter = 0;
let totalSaldo = 0;

leggTilInntekt.addEventListener("click", function() {
    const navn = inntekt.value;
    const belop = inntektBelop.value;
    const nyInntekt = document.createElement("li");

    nyInntekt.textContent = navn + " " + belop + " kr";
    inntekter.appendChild(nyInntekt);
});



leggTilUtgift.addEventListener("click", function() {
    
    const navn = utgift.value;
     const belop = utgiftBelop.value;
     const nyUtgifter = document.createElement("li");

     nyUtgifter.textContent = navn + " " + belop + "kr"
     utgifter.appendChild(nyUtgifter);
});
