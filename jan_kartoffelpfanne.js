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

