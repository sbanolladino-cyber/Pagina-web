// Función para abrir el modal que le indiquemos
function abrirModal(idModal) {
  document.getElementById(idModal).style.display = "block";
}

// Función para cerrar el modal que le indiquemos
function cerrarModal(idModal) {
  document.getElementById(idModal).style.display = "none";
}

// Cerrar si se hace clic fuera de cualquier modal
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}

function buscar() {
  // 1. Tomar lo que escribe el usuario
  let texto = document.getElementById('buscador').value.toLowerCase();
  
  // 2. Buscar TODOS los productos
  let productos = document.querySelectorAll('.img-info');

  // 3. Revisar cada uno
  productos.forEach(function(prod) {
    
    // 4. Leer el tamaño que escribiste (grande, pequeño, etc.)
    let tamano = prod.getAttribute('data-tamaño');
    
    // 5. Comparar y mostrar/ocultar
    if (tamano.includes(texto) || texto === "") {
      prod.style.display = "block"; // Muestra si coincide
    } else {
      prod.style.display = "none";  // Esconde si no coincide
    }
  });
}