// Importa Firebase y Firestore desde el CDN de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase Configuración
const firebaseConfig = {
  apiKey: "AIzaSyAN-E7rUdIUAcT2QCJzCPq_-q4Rw7CAg8Q",
  authDomain: "actividadbd-957ed.firebaseapp.com",
  projectId: "actividadbd-957ed",
  storageBucket: "actividadbd-957ed.firebasestorage.app",
  messagingSenderId: "414336258150",
  appId: "1:414336258150:web:5fcd9edf86cba2a65c1da7"
};

// Array de banderas y opciones
const flags = [
  { src: "colombia.png", country: "Colombia", options: ["Colombia", "Vanuatu", "Mozambique", "Nepal", "Kiribati", "Djibouti", "Malta", "Suriname"] },
  { src: "brasil.png", country: "Brazil", options: ["Brazil", "Bhutan", "Eswatini", "Togo", "Tuvalu", "Lesotho", "Zambia", "Andorra"] },
  { src: "kiribati.png", country: "Kiribati", options: ["Kiribati", "Togo", "Tuvalu", "Suriname", "Malta", "Mozambique", "Nepal", "Vanuatu"] },
  { src: "djibouti.png", country: "Djibouti", options: ["Djibouti", "Colombia", "Lesotho", "Zambia", "Andorra", "Bhutan", "Eswatini", "Brazil"] },
  { src: "nepal.png", country: "Nepal", options: ["Nepal", "Malta", "Kiribati", "Mozambique", "Vanuatu", "Djibouti", "Tuvalu", "Suriname"] },
  { src: "vanuatu.png", country: "Vanuatu", options: ["Vanuatu", "Colombia", "Djibouti", "Brazil", "Lesotho", "Bhutan", "Mozambique", "Nepal"] },
  { src: "mozambique.png", country: "Mozambique", options: ["Mozambique", "Nepal", "Kiribati", "Djibouti", "Vanuatu", "Malta", "Tuvalu", "Brazil"] },
  { src: "tuvalu.png", country: "Tuvalu", options: ["Tuvalu", "Suriname", "Djibouti", "Lesotho", "Zambia", "Brazil", "Nepal", "Vanuatu"] }
];

// Variables y funciones principales
let currentFlagIndex = 0;

function loadFlag() {
  const flagElement = document.getElementById("flag");
  const optionsContainer = document.getElementById("options");
  const currentFlag = flags[currentFlagIndex];
  
  flagElement.src = currentFlag.src;
  optionsContainer.innerHTML = ""; // Limpiar opciones anteriores
  
  currentFlag.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const message = document.getElementById("message");
  const correctCountry = flags[currentFlagIndex].country;
  
  if (selectedOption === correctCountry) {
    message.textContent = "¡Correcto!";
    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
    loadFlag();
  } else {
    message.textContent = "Incorrecto, intenta nuevamente.";
  }
  
}


// Variables principales
let currentFlagIndex = 0;
let attempts = 3; // Límite de intentos

function loadFlag() {
  const flagElement = document.getElementById("flag");
  const optionsContainer = document.getElementById("options");
  const currentFlag = flags[currentFlagIndex];
  
  flagElement.src = currentFlag.src;
  optionsContainer.innerHTML = ""; // Limpiar opciones anteriores
  
  currentFlag.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const message = document.getElementById("message");
  const correctCountry = flags[currentFlagIndex].country;

  if (selectedOption === correctCountry) {
    message.textContent = "¡Correcto!";
    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
    attempts = 3; // Restablecer intentos al acertar
    loadFlag();
  } else {
    attempts--; // Reducir intentos en caso de error
    if (attempts > 0) {
      message.textContent = `Incorrecto, intenta nuevamente. Te quedan ${attempts} intentos.`;
    } else {
      message.textContent = "¡Se acabaron tus intentos! Fin del juego.";
      disableGame(); // Llamamos una función para desactivar el juego
    }
  }
}

function disableGame() {
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ""; // Limpiar opciones para que no haya botones
}

// Cargar la primera bandera al iniciar
loadFlag();

