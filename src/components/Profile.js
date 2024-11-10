// src/components/Profile.js
import React, { useState } from "react";
import "../App.css"; // Estilos de la página de perfil

const Profile = () => {
  // Estado inicial con información completa del perfil
  const [profileData, setProfileData] = useState({
    username: "Katherine Gómez",
    age: 19,
    interests: ["Maquillaje", "Skincare", "Moda"],
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWRH-oXGeRDRQxDcmt1EgAt-FzSg_qAQFBA&s",
    isAnonymous: false
  });

  // Función para alternar entre el perfil completo y el anónimo
  const toggleAnonymousProfile = () => {
    if (profileData.isAnonymous) {
      // Restablecer los datos completos del perfil
      setProfileData({
        username: "Katherine Gómez",
        age: 19,
        interests: ["Maquillaje", "Skincare", "Moda"],
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWRH-oXGeRDRQxDcmt1EgAt-FzSg_qAQFBA&s",
        isAnonymous: false
      });
    } else {
      // Ocultar los datos del perfil y quitar la imagen
      setProfileData({
        username: "Oculto",
        age: "Oculto",
        interests: ["Oculto"],
        profilePicture: null,
        isAnonymous: true
      });
    }
  };

  return (
    <div className="profile">
      <h2>Mi Perfil</h2>
      {profileData.profilePicture ? (
        <img src={profileData.profilePicture} alt="Profile" className="profile-picture" />
      ) : (
        <div className="profile-anonymous-picture">?</div>
      )}
      <p>Nombre: {profileData.username}</p>
      <p>Edad: {profileData.age}</p>
      <p>Gustos: {profileData.interests.join(", ")}</p>
      <button onClick={toggleAnonymousProfile}>
        {profileData.isAnonymous ? "Mostrar Perfil Completo" : "Hacer Anónimo"}
      </button>
    </div>
  );
};

export default Profile;
