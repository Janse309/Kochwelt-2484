// let mehl = 1 ;
// let eier = 2;

// function calculateAmount() {
//     let appleContainer = document.getElementById("result-apple");
//     let bananaContainer = document.getElementById("result-banana");
//     let amount = document.getElementById("input-amount").value;


//     appleContainer.innerHTML = mehl * amount;
//     bananaContainer.innerHTML = eier * amount;

// }

const ingredients = [
    { id: "potato", base: 400 },
    { id: "feta", base: 100 },
    { id: "onien", base: 0.5 },
    { id: "red-paprika", base: 1 },
    { id: "oil", base: 1 },
    { id: "oil", base: 1 },
];

function calculateAmount() {
    let portionSize = Number(document.getElementById("input-amount").value);
    if (portionSize >= 1 && portionSize <= 20) {
        ingredients.forEach(s => {
            let value = s.base * portionSize;
            if (s.comma) value = value.toString().replace(".", ",");
            document.getElementById(s.id).textContent = value;
        })
    }
}