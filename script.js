const massInput = document.getElementById('mass-choice');
const gravityInput = document.getElementById('gravity-choice');
const heightInput = document.getElementById('height-choice');
const energySpan = document.getElementById('energy');
const Circle = document.getElementById('circle');
const slope = document.getElementById('slope')

function updateDiagrams() {
    const mass = parseFloat(massInput.value) || 1;
    const g = parseFloat(gravityInput.value) || 9.8;
    const height = parseFloat(heightInput.value) || 0;

    const gpe = mass * g * height;
    energySpan.textContent = gpe.toFixed(2);

    const baseSize = 60;
    const size = Math.max(35, baseSize + Math.cbrt(mass) * 25);
    Circle.style.width = `${size}px`;
    Circle.style.height = `${size}px`;
    Circle.textContent = mass + " kg";

    let ballTop = 260 - size - (height * 9);
    Circle.style.top = Math.max(20, ballTop) + 'px';

    const slopeHeight = Math.min(220, height * 13);
    slope.style.height = `${slopeHeight}px`;
}

[massInput, gravityInput, heightInput].forEach(input => {
    input.addEventListener('input', updateDiagrams);
});

document.getElementById('calculate').addEventListener('click', updateDiagrams);

updateDiagrams();
