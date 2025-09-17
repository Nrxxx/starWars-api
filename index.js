// Obtener los elementos del DOM
const modal = document.getElementById("miModal");
const cerrarBtn = document.querySelector(".cerrar-btn");
const modalImagen = document.getElementById("modal-imagen");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");

// Un objeto para almacenar la información de los diferentes productos
const productos = {
  producto1: {
    imagenSrc: "/img/TPRA410003-00N01_1.webp",
    titulo: "Producto de Muestra 1",
    descripcion: "Descripción detallada del primer producto. Aquí va toda la información relevante para el usuario."
  },
  producto2: {
    imagenSrc: "/img/TPRA410003-00N01_2.webp",
    titulo: "Producto de Muestra 2",
    descripcion: "Esta es la descripción del segundo producto. Explica sus características principales y beneficios."
  },
  producto3: {
    imagenSrc: "/img/TPRA410003-00N01_3.webp",
    titulo: "Producto de Muestra 3",
    descripcion: "Aquí se describe el tercer producto, con sus especificaciones y usos recomendados."
  }
};

// Función para abrir el modal con el contenido correcto
function abrirModal(id) {
  const info = productos[id];
  if (info) {
    modalImagen.src = info.imagenSrc;
    modalTitulo.textContent = info.titulo;
    modalDescripcion.textContent = info.descripcion;
    modal.style.display = "block";
  }
}

// Agregar un solo event listener a todos los elementos con la clase 'imagen-producto'
document.querySelectorAll(".imagen-producto").forEach(img => {
  img.addEventListener("click", (event) => {
    // Obtener el ID desde el atributo data-modal-id
    const id = event.target.getAttribute("data-modal-id");
    abrirModal(id);
  });
});

// Lógica para cerrar el modal
cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});