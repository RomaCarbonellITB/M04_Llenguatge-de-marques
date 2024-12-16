document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('current-time');
    const endTimeInput = document.getElementById('end-time');
    const countdownTimeInput = document.getElementById('countdown-time');
    const remainingTimeElement = document.getElementById('remaining-time');
    const startButton = document.getElementById('start-button');
    const soundSelect = document.getElementById('sound-select');
    const stopAlarmButton = document.getElementById('stop-alarm-button');

    let timerInterval;
    let endTime;
    let alarmAudio;
    let alarmTimeout;

    // Function to update the current time
    function updateCurrentTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toLocaleTimeString();
    }

    // Function to calculate and display the remaining time
    function updateRemainingTime() {
        const now = new Date();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            remainingTimeElement.textContent = '00:00:00';
            playAlarm();
        } else {
            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            remainingTimeElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    // Function to play the selected alarm sound
    function playAlarm() {
        const selectedSound = soundSelect.value;
        alarmAudio = new Audio(selectedSound);
        alarmAudio.loop = true;
        alarmAudio.play();

        const [hours, minutes, seconds] = countdownTimeInput.value.split(':').map(Number);
        const alarmDuration = (hours * 3600 + minutes * 60 + seconds) * 1000;

        alarmTimeout = setTimeout(stopAlarm, alarmDuration);
    }

    // Function to stop the alarm sound
    function stopAlarm() {
        if (alarmAudio) {
            alarmAudio.pause();
            alarmAudio.currentTime = 0;
        }
        clearTimeout(alarmTimeout);
    }

    // Function to start the timer
    function startTimer() {
        clearInterval(timerInterval);

        const endTimeValue = endTimeInput.value;

        if (endTimeValue) {
            const [hours, minutes] = endTimeValue.split(':');
            endTime = new Date();
            endTime.setHours(hours);
            endTime.setMinutes(minutes);
            endTime.setSeconds(0);
        } else {
            alert('Please set an end time.');
            return;
        }

        timerInterval = setInterval(updateRemainingTime, 1000);
        updateRemainingTime();
    }

    // Update the current time every second
    setInterval(updateCurrentTime, 1000);
    updateCurrentTime();

    // Add event listeners
    startButton.addEventListener('click', startTimer);
    stopAlarmButton.addEventListener('click', stopAlarm);
});