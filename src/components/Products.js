// src/components/Products.js
import React, { useEffect, useState } from "react";
import api from "../services/api"; // Importa la configuración de Axios desde api.js
import ProductCard from "./ProductCard"; // Importa el componente ProductCard para cada producto
import "../App.css"; // Estilos de la página de productos

const Products = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar productos
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Llama a la API cuando el componente se monta
    api.get("/products.json?brand=maybelline") // Pide solo productos de la marca "Maybelline"
      .then(response => {
        setProducts(response.data); // Guarda la respuesta en el estado `products`
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error); // Muestra el error en consola
        setError("Hubo un problema al cargar los productos. Inténtalo de nuevo.");
      });
  }, []);

  return (
    <div className="products">
      <h2>Catálogo de Maquillaje</h2>
      {error && <p>{error}</p>} {/* Muestra un mensaje de error si ocurre */}
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default Products;
