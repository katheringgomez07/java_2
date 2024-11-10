// src/services/api.js
import axios from "axios";

// Crea una instancia de Axios con la URL base de la API de maquillaje
const api = axios.create({
  baseURL: "https://makeup-api.herokuapp.com/api/v1", // URL base de la Makeup API
  headers: {
    "Content-Type": "application/json", // Tipo de contenido esperado
  },
});

export default api;
