// src/components/Home.js
import React, { useState } from "react";
import "../App.css"; // Estilos de la página Home

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("¡Holaa, hoy te mostraré productos de Maybelline!");

  return (
    <div className="home">
      <h1>{welcomeMessage}</h1>
      <p>Para mi gusto personal, mis recomendados son las pestañinas y los lip glosses (son los mejores)</p>
    </div>
  );
};

export default Home;
