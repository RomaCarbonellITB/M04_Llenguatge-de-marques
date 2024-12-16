let countdownInterval;
let currentTimeDisplay = document.getElementById('current-time');
let remainingTimeDisplay = document.getElementById('remaining-time');
let startButton = document.getElementById('start-button');
let endTimeInput = document.getElementById('end-time');
let countdownTimeInput = document.getElementById('countdown-time');
let soundSelect = document.getElementById('sound-select');

// Inicializamos los sonidos
let sound1 = new Audio('sound1.mp3');
let sound2 = new Audio('sound2.mp3');
let sound3 = new Audio('sound3.mp3');

let alarmSound = null;  // Inicializamos la variable del sonido de alarma
let currentTime = new Date();
let targetTime = null;

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function startCountdown(targetDate) {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => {
        let now = new Date();
        let remainingTime = targetDate - now;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            remainingTimeDisplay.textContent = "00:00:00";
            playAlarm();
            alert("La tasca ha finalitzat!");
        } else {
            let hours = Math.floor(remainingTime / (1000 * 60 * 60)).toString().padStart(2, '0');
            let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000).toString().padStart(2, '0');
            remainingTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}

function playAlarm() {
    // Reproducir el sonido seleccionado
    alarmSound.play();
}

// Configurar el sonido de alarma según la opción seleccionada
soundSelect.addEventListener('change', () => {
    let selectedSound = soundSelect.value;
    switch (selectedSound) {
        case 'sound1.mp3':
            alarmSound = sound1;
            break;
        case 'sound2.mp3':
            alarmSound = sound2;
            break;
        case 'sound3.mp3':
            alarmSound = sound3;
            break;
        default:
            alarmSound = sound1; // Default sound
    }
});

startButton.addEventListener('click', () => {
    let endTime = endTimeInput.value;
    let countdownTime = countdownTimeInput.value;

    if (endTime) {
        let [hours, minutes] = endTime.split(':').map(Number);
        let now = new Date();
        targetTime = new Date(now.setHours(hours, minutes, 0, 0));
        startCountdown(targetTime);
    } else if (countdownTime) {
        let [hours, minutes, seconds] = countdownTime.split(':').map(Number);
        let now = new Date();
        targetTime = new Date(now.getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
        startCountdown(targetTime);
    }
});

// Actualización de la hora actual
setInterval(updateClock, 1000);
