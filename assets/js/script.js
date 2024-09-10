var cantidadProducto = 1;
var precioInicial = 400000;
var valorTotal = cantidadProducto * precioInicial;

precioSpan = document.querySelector(".precioInicial");
precioSpan.innerHTML = precioInicial;

cantidadSpan = document.querySelector(".cantidadProducto");
cantidadSpan.innerHTML = cantidadProducto;

totalSpan = document.querySelector(".valorTotal");
totalSpan.innerHTML = valorTotal;

function actualizarValores() {
  cantidadSpan.innerHTML = cantidadProducto;
  valorTotal = cantidadProducto * precioInicial;
  totalSpan.innerHTML = valorTotal;
}

var botonSumar = document.querySelector("#sumar");
botonSumar.addEventListener("click", function () {
  cantidadProducto = cantidadProducto + 1;
  actualizarValores();
});

var botonRestar = document.querySelector("#restar");
botonRestar.addEventListener("click", function () {
  if (cantidadProducto > 0) {
    cantidadProducto = cantidadProducto - 1;
  }
  actualizarValores();
});
