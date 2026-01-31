
function calculatePortions() {
    const portions = parseFloat(document.getElementById("portion-input").value);

    if (portions < 1 || isNaN(portions)) {
        alert("Bitte geben Sie eine Zahl zwischen 1 und 20 ein!");
        portions = 1;
        document.getElementById("portion-input").value = 1;
    } 
    // Obergrenze prüfen
    else if (portions > 20) {
        alert("Bitte geben Sie eine Zahl zwischen 1 und 20 ein!");
        portions = 20;
        document.getElementById("portion-input").value = 20;
    }
    const basePortions = 4; // Basis-Portionen
    const tableCells = document.querySelectorAll("#ingredients-table td");

    tableCells.forEach(cell => {
        const baseAmount = parseFloat(cell.dataset.base);
        const newAmount = (baseAmount / basePortions) * portions;

        // Einheit aus dem Text behalten
        const text = cell.textContent;
        const unit = text.replace(/[0-9.,]/g, '').trim();
        cell.textContent = `${newAmount} ${unit}`;
    });
}
