const ingredients = [
  { id: "mehl", base: 40 },
  { id: "conchiglioni", base: 500 },
  { id: "knobli", base: 1 },
  { id: "butter", base: 10 },
  { id: "milch", base: 500 },
  { id: "muskat", base: 1 },
  { id: "gorgonzola", base: 150 },
  { id: "champignons", base: 200 },
  { id: "gewuerze", base: 40 },
];

function calculateAmount() {
  const input = document.getElementById("input-amount");
  const hint = document.getElementById("input-hint"); // optional
  const portionSize = Number(input.value);

  // Validierung: 1 bis 20, ganze Zahlen
  if (!Number.isInteger(portionSize) || portionSize < 1 || portionSize > 20) {
    input.setCustomValidity("Bitte gib eine Zahl von 1 bis 20 ein.");
    input.reportValidity(); // zeigt den Hinweis direkt im Browser
    if (hint) hint.textContent = "Bitte gib eine Zahl von 1 bis 20 ein.";
    return;
  }

  input.setCustomValidity("");
  if (hint) hint.textContent = "";

  ingredients.forEach((item) => {
    const el = document.getElementById(item.id);
    if (!el) return;
    el.textContent = item.base * portionSize;
  });
}