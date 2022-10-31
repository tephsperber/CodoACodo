var category = document.getElementById("option");
var quantity = document.getElementById("cantidad");
var btn = document.getElementById("btnSubmit");
btn.addEventListener("click", () => {
  switch (category.value) {
    case "estudiante":
      var descuento = 80;
      break;
    case "trainee":
      var descuento = 50;
      break;
    case "junior":
      var descuento = 15;
      break;
  }
  var total = document.getElementById("total");

  var answer = quantity.value * 200 - (quantity.value * 200 * descuento) / 100;
  total.innerText = "Total a Pagar: $" + answer;
  total.setAttribute("class", "toPay");
});

var btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", () => {
  total.setAttribute("class", "displayNone");
});
