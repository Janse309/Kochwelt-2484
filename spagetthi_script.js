
function calculatePortions() {
    const portions = parseFloat(document.getElementById("portion-input").value);
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
