let points = 0;
const ralsei = document.getElementById('ralsei');
const counter = document.getElementById('counter');

// Function to handle the clicking event
function handleClick() {
    points++;
    counter.textContent = `Points: ${points}`;
    pulseEffect();
}

// Function to create the pulsing effect
function pulseEffect() {
    ralsei.classList.add('pulse');
    setTimeout(() => ralsei.classList.remove('pulse'), 200);
}

// Event listener for click events on the Ralsei image
ralsei.addEventListener('click', handleClick);
