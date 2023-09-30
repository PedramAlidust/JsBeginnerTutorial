const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
let currentWord = '';
let timer = 5;  // seconds
let gameInterval;

function startGame() {
    clearInterval(gameInterval);
    document.getElementById("userInput").focus();
    document.getElementById("feedback").innerText = "";
    timer = 5;
    updateTimer();
    generateWord();
    document.getElementById("userInput").addEventListener("input", checkInput);
    
    gameInterval = setInterval(() => {
        timer--;
        updateTimer();
        
        if (timer <= 0) {
            endGame();
        }
    }, 1000);
}

function generateWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("wordToType").innerText = currentWord;
}

function checkInput() {
    if (document.getElementById("userInput").value === currentWord) {
        timer += 3;  // Increase time by 5 seconds for a correct word
        document.getElementById("userInput").value = '';
        generateWord();
    }
}

function updateTimer() {
    document.getElementById("timer").innerText = "Time: " + timer + "s";
}

function endGame() {
    clearInterval(gameInterval);
    document.getElementById("feedback").innerText = "Game Over!";
    document.getElementById("userInput").removeEventListener("input", checkInput);
}
