let totalInntekter = Number(localStorage.getItem("totalInntekter")) || 0;
let totalUtgifter = Number(localStorage.getItem("totalUtgifter")) || 0;

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

                           

leggTilInntekt.addEventListener("click", function() {
    const navn = inntekt.value;
    const belop = Number(inntektBelop.value);
    const nyInntekt = document.createElement("li");
    nyInntekt.textContent = navn + " " + belop + " kr";
    inntekter.appendChild(nyInntekt);

    totalInntekter += belop 
    localStorage.setItem("totalInntekter", totalInntekter)
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
    localStorage.setItem("totalUtgifter", totalUtgifter)
    sumUtgifter.textContent = "sum utgifter " + totalUtgifter + "kr"
    oppdaterSaldo();
});
function oppdaterSaldo() {
    const total = totalInntekter - totalUtgifter;
    saldo.textContent = total + "kr "
    if (total < 0){
        saldo.style.color = "red";
    } else {
        saldo.style.color = "green";
    }
}   


function fjernInntekter() {
    inntekter.innerHTML = "";
    totalInntekter = 0
    sumInntekter.textContent = "sum inntekter 0 kr"
    oppdaterSaldo();
}
function fjernUtgifter() {
    utgifter.innerHTML = "";
    totalUtgifter = 0
    sumInntekter.textContent = "sum utgifter 0 kr"
    oppdaterSaldo();
}