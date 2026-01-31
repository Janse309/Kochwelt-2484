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
  let portionSize = Number(document.getElementById("input-amount").value);
  if (portionSize >= 1 && portionSize <= 20) {
    ingredients.forEach((s) => {
      let value = s.base * portionSize;
      if (s.comma) value = value.toString().replace(".", ",");
      document.getElementById(s.id).textContent = value;
    });
  }
}
