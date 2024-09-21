let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.getElementById('display');
let int = null;

// Start/Pause functionality
document.getElementById('startStopBtn').addEventListener('click', () => {
    if (int === null) {
        int = setInterval(displayTimer, 10);
        document.getElementById('startStopBtn').innerText = "Pause";
    } else {
        clearInterval(int);
        int = null;
        document.getElementById('startStopBtn').innerText = "Start";
    }
});

// Reset functionality
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(int);
    int = null;
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerRef.innerHTML = '00:00:00';
    document.getElementById('laps').innerHTML = ''; // Clear lap history
    document.getElementById('startStopBtn').innerText = "Start";
});

// Lap functionality
document.getElementById('lapBtn').addEventListener('click', () => {
    let lapTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 100 ? '0' + milliseconds : milliseconds}`;
    let li = document.createElement('li');
    li.innerText = `Lap: ${lapTime}`;
    document.getElementById('laps').appendChild(li);
});

// Timer functionality
function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${m}:${s}:${ms}`;
}
