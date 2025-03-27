// Cargar dinámicamente el título de la página y el título de la lista
document.title = data.tituloPagina;
document.querySelector("#lista .titulo").textContent = data.tituloLista;

// Renderizar los artículos
var listArt = data.articulos;
var contenedor = document.getElementById("lista-articulos");
contenedor.innerHTML = ""; // Limpiar contenido previo
for (let i = 0; i < listArt.length; i++) {
  if (listArt[i].Reserva === "0") {
    contenedor.innerHTML += `
      <div class="articulo">
        <img class="articulo__imagen" src="${listArt[i].Imagen}" alt="" />
        <h3 class="articulo__titulo">${listArt[i].Nombre}</h3>
        <div class="articulo__precio"><span>${listArt[i].Precio}</span></div>
      </div>`;
  } else {
    contenedor.innerHTML += `
      <div class="articulo">
        <div class="articulo__reserva">¡RESERVADO!</div>
        <img class="articulo__imagen" src="${listArt[i].Imagen}" alt="" />
        <h3 class="articulo__titulo">${listArt[i].Nombre}</h3>
        <div class="articulo__precio">
          <i class="em em-heart_eyes" aria-role="presentation" aria-label="SMILING FACE WITH HEART-SHAPED EYES"></i>
        </div>
      </div>`;
  }
}

// Cargar dinámicamente el correo y el teléfono de la tienda
var telefonoTienda = data.telefonoTienda;
var correoTienda = data.correoTienda;

var telefonoTiendaElemento = document.getElementById("telefono-tienda");
telefonoTiendaElemento.href = `tel:${telefonoTienda}`;
telefonoTiendaElemento.textContent = telefonoTienda;

var correoTiendaElemento = document.getElementById("correo-tienda");
correoTiendaElemento.href = `mailto:${correoTienda}`;
correoTiendaElemento.textContent = correoTienda;

// Renderizar los métodos de pago
var metodosPago = data.metodosPago;
var metodosPagoContenedor = document.getElementById("metodos-pago");
metodosPagoContenedor.innerHTML = `
  <div class="pago__metodo">
    <i class="fa fa-mobile fa-3x" aria-hidden="true"></i>
    <h3>Bizum</h3>
    <p><strong>${metodosPago.bizum}</strong></p>
  </div>
  <div class="pago__metodo">
    <i class="fa fa-university fa-3x" aria-hidden="true"></i>
    <h3>Cuenta Bancaria</h3>
    <p><strong>${metodosPago.cuentaBancaria}</strong></p>
  </div>
`;

// Generar el menú dinámico
var menuItems = document.getElementById("menu-items");
data.secciones.forEach((seccion) => {
  menuItems.innerHTML += `<li><a href="#${seccion.id}">${seccion.nombre}</a></li>`;
});

// Manejar el menú responsive
var menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});
