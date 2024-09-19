
const productos = ['base', 'corrector', 'labial', 'sombras', 'rubor'];
const precios = [60.000, 35.000, 32.000, 45.000, 40.000];
const tonos = ['light', 'vainilla', 'almendra', 'oliva', 'marfil'];
const cantidades = [100, 200, 150, 80, 120];

// Aplicando .reduce()
const totalPrecios = precios.reduce((acum, actual) => acum + actual, 0);
console.log("Suma total de los precios:", totalPrecios);

const todosLosProductos = productos.reduce((acum, actual) => `${acum}, ${actual}`);
console.log("Todos los productos:", todosLosProductos);

const totalCantidad = cantidades.reduce((acum, actual) => acum + actual, 0);
console.log("Total de productos en stock:", totalCantidad);

const tonosConcatenados = tonos.reduce((acum, actual) => `${acum}, ${actual}`);
console.log("Tonos disponibles:", tonosConcatenados);

// Aplicando .filter()
const productosCaros = productos.filter((producto, index) => precios[index] > 40.000);
console.log("Productos con precio mayor a 40.000:", productosCaros);

const tonosConO = tonos.filter(tono => tono.includes('i'));
console.log("Tonos que contienen la letra 'i':", tonosConO);

const cantidadesAltas = cantidades.filter(cantidad => cantidad > 100);
console.log("Cantidades mayores a 100:", cantidadesAltas);

const preciosBajos = precios.filter(precio => precio < 39.000);
console.log("Precios menores a 20:", preciosBajos);

// Aplicando .map()
const preciosConDescuento = precios.map(precio => precio * 0.9);
console.log("Precios con un 10% de descuento:", preciosConDescuento);

const productosEnMayusculas = productos.map(producto => producto.toUpperCase());
console.log("Productos en mayúsculas:", productosEnMayusculas);

const tonosConDescripcion = tonos.map(tono => `Tono: ${tono}`);
console.log("Tonos con descripción:", tonosConDescripcion);

const cantidadesDuplicadas = cantidades.map(cantidad => cantidad * 2);
console.log("Cantidades dobladas:", cantidadesDuplicadas);

// Aplicando .forEach()
productos.forEach(producto => console.log("Producto:", producto));

precios.forEach(precio => console.log("Precio:", precio));

tonos.forEach(tono => console.log("Tono:", tono));

cantidades.forEach(cantidad => console.log("Cantidad en stock:", cantidad));

// Funciones flecha
// Función flecha con 0 parámetros
const mostrarMensaje = () => console.log("Bienvenidas a su nueva tienda favorita");
mostrarMensaje();

// Función flecha con 1 parámetro
const aplicarDescuento = precio => precio * 0.85;
console.log("Precio con 15% de descuento en producto de $25:", aplicarDescuento(25));

// Función flecha con 2 parámetros
const calcularTotal = (precio, cantidad) => precio * cantidad;
console.log("Total de 3 labiales a $32.000:", calcularTotal(32.000, 3));

// Función flecha con 3 parámetros
const calcularPrecioConDescuento = (precio, descuento, cantidad) => (precio * (1 - descuento)) * cantidad;
console.log("Total con descuento del 20% para 2 bases de $60.000:", calcularPrecioConDescuento(60.000, 0.2, 2));

// Función flecha con 4 parámetros
const calcularPromedioPrecios = (p1, p2, p3, p4) => (p1 + p2 + p3 + p4) / 4;
console.log("Promedio de precios entre $60.000, $35.000, $32.0000 y $45.000:", calcularPromedioPrecios(60.000, 35.000, 32.000, 45.000));
