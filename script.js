function updateTimer() {
            const timerElement = document.getElementById('timer');
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const date = now.toDateString();
            const time = `${hours}:${minutes}:${seconds}`;
            
            timerElement.textContent = `Date: ${date} | Time: ${time}`;
        }

        // Update the timer immediately and then every second
        updateTimer();
        setInterval(updateTimer, 1000);
