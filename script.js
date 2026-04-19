// these  collect the necessary elements from the HTML as DOM selectors
const button = document.getElementById("submitButton");
const timerDisplay = document.getElementById("time");
const container = document.querySelector(".container");

//This is what makes the button move to different places everytime you hover over it 
button.addEventListener("mouseover", () => {
    let maxX = container.offsetWidth - button.offsetWidth - 10;
    let maxY = container.offsetHeight - button.offsetHeight - 10;
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

//The function below enables a pop-up alert to add some tension lol
function showPopup() {
    alert("You're running out of time! Hurry!");
}

//The script below controls the timer that starts counting down from 30 to add extra stress to users lol
let countdown = 30;
setInterval(() => {
    if (countdown > 0) {
        countdown--;
        timerDisplay.innerText = countdown;
    }
    if (countdown % 10 === 0 && countdown > 0) {
        showPopup();
    }
}, 1000);
