let mehl = 1 ;
let eier = 2;

function calculateAmount() {
    let appleContainer = document.getElementById("result-apple");
    let bananaContainer = document.getElementById("result-banana");
    let amount = document.getElementById("input-amount").value;


    appleContainer.innerHTML = mehl * amount;
    bananaContainer.innerHTML = eier * amount;

}