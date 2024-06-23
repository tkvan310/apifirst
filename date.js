Vdocument.addEventListener('DOMContentLoaded', function() {
    let timers = document.querySelectorAll('.timer');
    timers.forEach(timer => {
        let startButton = timer.getElementByclass('start');
        let pauseButton = timer.getElementByclass('pause');
        let stopButton = timer.getElementByclass('stop');
        let timeDisplay = timer.getElementByclass('time');
       
        let interval;
        let elapsed = 0;
        let isRunning = false;

        function formatTime(ms) {
            let totalSeconds = Math.floor(ms / 1000);
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;
            let milliseconds = ms % 1000;
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
        }

        function updateDisplay() {
            timeDisplay.textContent = formatTime(elapsed);
        }

        startButton.addEventListener('click', function() {
            if (!isRunning) {
                let startTime = Date.now() - elapsed;
                interval = setInterval(function() {
                    elapsed = Date.now() - startTime;
                    updateDisplay();
                }, 10);
                isRunning = true;// true la tiep thuc va bat dau thoi gian
            }
        });

        pauseButton.addEventListener('click', function() {
            clearInterval(interval);
            isRunning = false;// false se dung lai va reset lai thoi gian
        });

        stopButton.addEventListener('click', function() {
            clearInterval(interval);
            elapsed = 0;
            updateDisplay();
            isRunning = false;
        });
    });

    document.getElementById('startAll').addEventListener('click', function() {
        timers.forEach(timer => {
            timer.querySelector('.start').click();
        });
    });

    document.getElementById('stopAll').addEventListener('click', function() {
        timers.forEach(timer => {
            timer.querySelector('.stop').click();
        });
    });
})