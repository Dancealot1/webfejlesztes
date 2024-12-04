/* Feliratkozás */
document.getElementById("feliratkozas")?.addEventListener("submit", koszonjuk)

function koszonjuk(ujratoltodes){
    ujratoltodes.preventDefault();
    alert("Köszönjük szépen, hogy feliratkoztál hírlevelünkre!");
}

/* Órák oldalon a kipipált dajt (személyes/csoportos) oszlop megjelenítése */
document.getElementById("input-szemelyes")?.addEventListener("click", function(elem){
    document.getElementById("szemelyes-oszlop").style.display = "initial";
    document.getElementById("csoportos-oszlop").style.display = "none";

    document.getElementsByName("letszam").forEach(element => {
        element.checked = false;
    });
})

document.getElementById("input-csoportos")?.addEventListener("click", function(elem){
    document.getElementById("csoportos-oszlop").style.display = "initial";
    document.getElementById("szemelyes-oszlop").style.display = "none";
})

document.getElementById("alaphelyzet")?.addEventListener("click", function(){
    document.getElementById("szemelyes-oszlop").style.display = "none";
    document.getElementById("csoportos-oszlop").style.display = "none";
})

/* WEBSHOP */
const feherInput = document.getElementById("mennyisegFeher");
const feketeInput = document.getElementById("mennyisegFekete");
const kosarErtek = document.getElementById("kosarErtek");

let feherMennyiseg = 0;
let feketeMennyiseg = 0;

const feherAr = 20000;
const feketeAr = 22000;

function szamoljArat(){
    return (feherMennyiseg * feherAr + feketeMennyiseg * feketeAr).toString();
}

document.getElementById("minuszFeher")?.addEventListener("click", function(event){
    if (feherMennyiseg > 0) feherMennyiseg -= 1;
    feherInput.value = feherMennyiseg;
    kosarErtek.innerText = szamoljArat();
})


document.getElementById("minuszFekete")?.addEventListener("click", function(event){
    if (feketeMennyiseg > 0) feketeMennyiseg -= 1; 
    feketeInput.value = feketeMennyiseg;
    kosarErtek.innerText = szamoljArat();
})


document.getElementById("pluszFeher")?.addEventListener("click", function(event){
    feherMennyiseg += 1; 
    feherInput.value = feherMennyiseg;
    kosarErtek.innerText = szamoljArat();
})

document.getElementById("pluszFekete")?.addEventListener("click", function(event){
    feketeMennyiseg += 1;
    feketeInput.value = feketeMennyiseg;
    kosarErtek.innerText = szamoljArat();
})


