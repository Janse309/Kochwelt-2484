const ingredients = [
    { id: "potato", base: 400 },
    { id: "feta", base: 100 },
    { id: "onien", base: 0.5, comma: true },
    { id: "red-paprika", base: 1 },
    { id: "creme-light", base: 1 },
    { id: "eggs", base: 2 },
    { id: "oil", base: 1 },
];

function calculateAmount() {
    let portionSize = Number(document.getElementById("input-amount").value);
    if (portionSize >= 1 && portionSize <= 20) {
        ingredients.forEach(s => {
            let value = s.base * portionSize;
            if (s.comma) value = value.toString().replace(".", ",");
            document.getElementById(s.id).textContent = value;
        });
    }
}

