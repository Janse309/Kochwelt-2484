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
  let portionSize = Number(document.getElementById("input-amount").value);
  if (portionSize >= 1 && portionSize <= 20) {
    ingredients.forEach((s) => {
      let value = s.base * portionSize;
      if (s.comma) value = value.toString().replace(".", ",");
      document.getElementById(s.id).textContent = value;
    });
  }
}
