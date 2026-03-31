function mostrarProducto(){

const nombre = "Celular";
const marca = "Samsung Galaxy S26 Ultra";
const precio = 6900000;
const disponible = true;

const resultado = document.getElementById("resultado");

resultado.textContent =
        "Nombre: " + nombre +
        " | Marca: " + marca +
        " | Precio: $" + precio +
        " | Disponible: " + (disponible ? "Sí" : "No");
}
