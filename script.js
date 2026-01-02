// Variables
let score = 0;
let time = 30;
let timer, moleTimer;
let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");
let startScreen = document.getElementById("startScreen");
let gameScreen = document.getElementById("gameScreen");
let gameOverScreen = document.getElementById("gameOverScreen");
let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");
let finalScore = document.getElementById("finalScore");
let grid = document.getElementById("grid");
let cells = [];

// Start Game
function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    score = 0; time = 30;
    scoreDisplay.innerText = score;
    timeDisplay.innerText = time;
    createGrid();
    timer = setInterval(countDown, 1000);
    moleTimer = setInterval(showMole, 800);
}

// Create 3x3 Grid
function createGrid() {
    grid.innerHTML = "";
    cells = [];
    for(let i=0; i<9; i++){
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("click", hitMole);
        grid.appendChild(cell);
        cells.push(cell);
    }
}

// Show Mole Randomly
function showMole() {
    cells.forEach(c => c.innerHTML = ""); // Clear previous mole
    let mole = document.createElement("div");
    mole.className = "mole";
    let rand = Math.floor(Math.random() * cells.length);
    cells[rand].appendChild(mole);
}

// Hit Mole
function hitMole(e){
    if(e.target.classList.contains("mole")){
        score++;
        scoreDisplay.innerText = score;
        e.target.remove();
    }
}

// Countdown Timer
function countDown() {
    time--;
    timeDisplay.innerText = time;
    if(time <= 0) endGame();
}

// End Game
function endGame() {
    clearInterval(timer);
    clearInterval(moleTimer);
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    finalScore.innerText = score;
}

// Restart Game
function restartGame() {
    gameOverScreen.style.display = "none";
    startScreen.style.display = "block";
}

// Event Listeners
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
