const ingredients = [
  { id: "toast", base: 2 },
  { id: "salami", base: 2 },
  { id: "onion", base: 3 },
  { id: "cheddar", base: 2 },
  { id: "roma", base: 2 },
  { id: "tomato", base: 2 },
  { id: "mustard", base: 1 },
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
