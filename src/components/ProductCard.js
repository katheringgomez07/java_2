// src/components/ProductCard.js
import React from "react";
import "../App.css"; // Estilos específicos del componente de producto

const ProductCard = ({ product }) => (
  <li className="product-card">
    <img src={product.image_link} alt={product.name} className="product-image" />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Precio: ${product.price}</p>
  </li>
);

export default ProductCard;
