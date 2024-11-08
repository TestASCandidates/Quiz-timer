const QUIZ_TIME = 30; // Time in minutes
const FORM_URL = 'https://forms.gle/hUHvDXbFHwi7NSmy7'; // Replace with your form URL

let timeLeft = QUIZ_TIME * 60;
let timerId = null;

document.getElementById('timeDisplay').textContent = QUIZ_TIME;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft === 0) {
        clearInterval(timerId);
        alert('Time is up!');
        window.location.href = 'https://www.youtube.com/watch?v=Pt0FTHW6nNo';
    }
    timeLeft--;
}

document.getElementById('startButton').addEventListener('click', function() {
    this.style.display = 'none';
    timerId = setInterval(updateTimer, 1000);
    updateTimer();
    window.open(FORM_URL, '_blank');
});
