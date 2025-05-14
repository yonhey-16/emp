function verProducto(id) {
  localStorage.setItem("productoId", id);
  window.location.href = "product.html";
}

function cambiarImagen(src) {
  document.getElementById("main-img").src = src;
}

window.onload = function () {
  const id = localStorage.getItem("productoId");
  if (id && window.location.pathname.includes("product.html")) {
    // Aquí podrías cargar dinámicamente los datos si lo deseas
    // Por ahora, esto es estático
    if (id == 2) {
      document.getElementById("main-img").src = "img/zapato2.png";
      document.getElementById("nombreProducto").textContent = "Zapato Elegance";
      document.getElementById("precioProducto").textContent = "$750.000";
    }
  }
};
