const firebaseConfig = {
    apiKey: "AIzaSyAN-E7rUdIUAcT2QCJzCPq_-q4Rw7CAg8Q",
  authDomain: "actividadbd-957ed.firebaseapp.com",
  projectId: "actividadbd-957ed",
  storageBucket: "actividadbd-957ed.firebasestorage.app",
  messagingSenderId: "414336258150",
  appId: "1:414336258150:web:5fcd9edf86cba2a65c1da7"
};
const flags = [
    {
        src: "flag/colombia.png",
        country: "Colombia",
        options: ["Colombia", "Vanuatu", "Mozambique", "Nepal", "Kiribati", "Djibouti", "Malta", "Suriname"]
    },
    {
        src: "flag/brasil.png",
        country: "Brazil",
        options: ["Brazil", "Bhutan", "Eswatini", "Togo", "Tuvalu", "Lesotho", "Zambia", "Andorra"]
    },
    {
        src: "flag/kiribati.png",
        country: "Kiribati",
        options: ["Kiribati", "Togo", "Tuvalu", "Suriname", "Malta", "Mozambique", "Nepal", "Vanuatu"]
    },
    {
        src: "flag/djibouti.png",
        country: "Djibouti",
        options: ["Djibouti", "Colombia", "Lesotho", "Zambia", "Andorra", "Bhutan", "Eswatini", "Brazil"]
    },
    {
        src: "flag/nepal.png",
        country: "Nepal",
        options: ["Nepal", "Malta", "Kiribati", "Mozambique", "Vanuatu", "Djibouti", "Tuvalu", "Suriname"]
    },
    {
        src: "flag/vanuatu.png",
        country: "Vanuatu",
        options: ["Vanuatu", "Colombia", "Djibouti", "Brazil", "Lesotho", "Bhutan", "Mozambique", "Nepal"]
    },
    {
        src: "flag/mozambique.png",
        country: "Mozambique",
        options: ["Mozambique", "Nepal", "Kiribati", "Djibouti", "Vanuatu", "Malta", "Tuvalu", "Brazil"]
    },
    {
        src: "flag/tuvalu.png",
        country: "Tuvalu",
        options: ["Tuvalu", "Suriname", "Djibouti", "Lesotho", "Zambia", "Brazil", "Nepal", "Vanuatu"]
    }
];

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

loadFlag();
