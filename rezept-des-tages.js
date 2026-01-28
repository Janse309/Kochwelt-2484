const ingredients = [
  { id: "toast", base: 2 },
  { id: "", base: 100 },
  { id: "", base: 0.5, comma: true },
  { id: "", base: 1 },
  { id: "", base: 1 },
  { id: "", base: 2 },
  { id: "", base: 1 },
];

function calculateAmount() {
  let portionSize = Number(document.getElementById("input-amount").value);
  if (portionSize >= 1 && portionSize <= 20) {
    ingredients.forEach((s) => {
      let value = s.base * portionSize;
      if (s.comma) value = value.toString().replace(".", ",");
      document.getElementById(s.id).textContent = value;
    });
  }
}
