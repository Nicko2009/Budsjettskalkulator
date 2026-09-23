let inntekterData = JSON.parse(localStorage.getItem("inntekter")) || [];
let utgifterData = JSON.parse(localStorage.getItem("utgifter")) || [];

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

    inntekterData.push({
        navn: navn,
        belop: belop
    });
    localStorage.setItem("inntekter", JSON.stringify(inntekterData));


    const nyInntekt = document.createElement("li");
    nyInntekt.textContent = navn + " " + belop + " kr";
    inntekter.appendChild(nyInntekt);

    totalInntekter += belop 
    localStorage.setItem("totalInntekter",JSON.stringify(totalInntekter))

    sumInntekter.textContent = "sum inntekter " + totalInntekter + "kr"
    oppdaterSaldo();
});

leggTilUtgift.addEventListener("click", function() {
    const navn = utgift.value;
    const belop = Number(utgiftBelop.value);

    utgifterData.push({
        navn: navn,
        belop: belop
    });
    localStorage.setItem("utgifter", JSON.stringify(utgifterData));


    const nyUtgifter = document.createElement("li");
    nyUtgifter.textContent = navn + "   - " + belop + "kr"
    utgifter.appendChild(nyUtgifter);

    totalUtgifter += belop;
    localStorage.setItem("totalUtgifter", JSON.stringify(totalUtgifter))
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

    localStorage.setItem("totalInntekter", JSON.stringify(totalInntekter));

    sumInntekter.textContent = "sum inntekter 0 kr"
    oppdaterSaldo();
}
function fjernUtgifter() {
    utgifter.innerHTML = "";
    totalUtgifter = 0

    localStorage.setItem("totalUtgifter", JSON.stringify(totalUtgifter));

    sumUtgifter.textContent = "sum utgifter 0 kr"
    oppdaterSaldo();
}

inntekterData.forEach(function(inntekt) {
    const nyInntekter = document.createElement("li");

    nyInntekter.textContent =
    inntekt.navn + " " + inntekt.belop + " kr";

    inntekter.appendChild(nyInntekter);
});

utgifterData.forEach(function(utgift) {
    const nyUtgifter = document.createElement("li");

    nyUtgifter.textContent =
    utgift.navn + " " + utgift.belop + " kr"

    utgifter.appendChild(nyUtgifter)

}); 
sumInntekter.textContent = "sum inntekter" + totalInntekter + " kr";

sumUtgifter.textContent = "sum utgifter" + totalUtgifter + " kr";

oppdaterSaldo()