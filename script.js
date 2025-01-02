document.addEventListener("DOMContentLoaded", () => {
    const setupGameButton = document.getElementById("setupGame");
    const playerCountInput = document.getElementById("playerCount");
    const gameSection = document.getElementById("game");
    const setupSection = document.getElementById("setup");
    const playersList = document.getElementById("players");
    const addPlayerButton = document.getElementById("addPlayer");
    const startTimerButton = document.getElementById("startTimer");
    const timerElement = document.getElementById("timer");

    let players = [];
    let timerInterval;

    setupGameButton.addEventListener("click", () => {
        const playerCount = parseInt(playerCountInput.value);
        if (!playerCount || playerCount <= 0) {
            alert("Veuillez entrer un nombre valide de joueurs.");
            return;
        }

        setupSection.classList.add("hidden");
        gameSection.classList.remove("hidden");

        for (let i = 1; i <= playerCount; i++) {
            addPlayer(`Joueur ${i}`);
        }
    });

    addPlayerButton.addEventListener("click", () => {
        const playerName = prompt("Nom du nouveau joueur :");
        if (playerName) addPlayer(playerName);
    });

    startTimerButton.addEventListener("click", () => {
        if (timerElement.classList.contains("hidden")) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    function addPlayer(name) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${name}</span>
            <div class="player-controls">
                <button class="add-point">+1</button>
                <button class="remove-point">-1</button>
                <span class="score">0</span>
            </div>
        `;

        const addPointButton = li.querySelector(".add-point");
        const removePointButton = li.querySelector(".remove-point");
        const scoreSpan = li.querySelector(".score");

        let score = 0;

        addPointButton.addEventListener("click", () => {
            score++;
            scoreSpan.textContent = score;
        });

        removePointButton.addEventListener("click", () => {
            score = Math.max(0, score - 1);
            scoreSpan.textContent = score;
        });

        playersList.appendChild(li);
        players.push({ name, score });
    }

    function startTimer() {
        let seconds = 0;
        timerElement.textContent = formatTime(seconds);
        timerElement.classList.remove("hidden");
        startTimerButton.textContent = "Arrêter le chronomètre";

        timerInterval = setInterval(() => {
            seconds++;
            timerElement.textContent = formatTime(seconds);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerElement.classList.add("hidden");
        startTimerButton.textContent = "Démarrer le chronomètre";
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    }
});
