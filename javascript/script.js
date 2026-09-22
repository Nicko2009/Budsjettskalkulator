
const inntekt = document.getElementById("inntekt");
const inntektBelop = document.getElementById("IntekterBelop");
const leggTilInntekt = document.getElementById("leggTilInntekt");

const utgift = document.getElementById("utgift");
const utgiftBelop = document.getElementById("UtgifterBelop");
const leggTilUtgift = document.getElementById("leggTilUtgift");

const inntekter = document.getElementById("inntekter");
const utgifter = document.getElementById("utgifter");

const saldo = document.getElementById("saldo");
const sumInntekter = document.getElementById("sumInntekter")
const sumUtgifter = document.getElementById("sumUtgifter")

let totalInntekter = 0;
let totalUtgifter = 0;
let totalSaldo = 0;                             

leggTilInntekt.addEventListener("click", function() {
    const navn = inntekt.value;
    const belop = Number(inntektBelop.value);
    const nyInntekt = document.createElement("li");
    nyInntekt.textContent = navn + " " + belop + " kr";
    inntekter.appendChild(nyInntekt);

    totalInntekter += belop 
    sumInntekter.textContent = "sum inntekter " + totalInntekter + "kr"
    oppdaterSaldo();
});

leggTilUtgift.addEventListener("click", function() {
    const navn = utgift.value;
    const belop = Number(utgiftBelop.value);
    const nyUtgifter = document.createElement("li");
    nyUtgifter.textContent = navn + "   - " + belop + "kr"
    utgifter.appendChild(nyUtgifter);

    totalUtgifter += belop;
    sumUtgifter.textContent = "sum utgifter" + totalUtgifter + "kr"
    oppdaterSaldo();
});


