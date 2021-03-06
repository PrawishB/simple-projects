var second = 0;
var minute = 0;
var hour = 0;
var stopTime = true;

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
let timerDisplay = document.getElementById("timerDisplay");

const timer = () => {
    if (stopTime == false) {
        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);

        second++;
        if (second == 60) {
            second = 0;
            minute = minute + 1;
        }
        if (minute == 60) {
            minute = 0;
            second = 0;
            hour = hour + 1;
        };

        if (second < 10 || second == 0) {
            second = "0" + second;
        };
        if (minute < 10 || minute == 0) {
            minute = "0" + minute;
        };
        if (hour < 10 || hour == 0) {
            hour = "0" + hour;
        };


        timerDisplay.innerHTML = hour + ":" + minute + ":" + second;
        setTimeout("timer()", 1000);
    };
};

const start = () => {
    if (stopTime) {
        stopTime = false;
        timer();
    };
};

const pause = () => {
    if (!stopTime) {
        stopTime = true;
    };
};

const reset = () => {
    stopTime = true;
    second = 0;
    minute = 0;
    hour = 0;
    timerDisplay.innerHTML = "00:00:00"; 
};

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);