// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Para estilos globales

const NavBar = () => (
  <nav className="navbar">
    <Link to="/">Inicio</Link>
    <Link to="/products">Productos</Link>
    <Link to="/profile">Mi Perfil</Link>
  </nav>
);

export default NavBar;
