function rollDice() {
    let dice = document.getElementsByClassName("dice");

    for (let i = 0; i < dice.length; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        dice[i].src = `./img/${randomNumber}.png`;
    }
}
function guess() {
    let input = parseInt(document.getElementById("guessInput").value);

    let message = document.getElementById("msg");
    let dice = document.getElementsByClassName("dice");
    let totalValue = 0;

    for (let i = 0; i < dice.length; i++) {
        if (dice[i].src.includes("3.png")) {
            totalValue += 2;
        } else if (dice[i].src.includes("5.png")) {
            totalValue += 4;
        }
    }

    if (input == totalValue) {
        message.innerHTML = "CORRECT! The answer is: " + totalValue;
        message.style.color = "GREEN";
    } else {
        message.innerHTML = "WRONG! The answer is: " + totalValue;
        message.style.color = "RED";
    }
    document.getElementById("guessInput").value = "";
}
