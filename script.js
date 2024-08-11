document.getElementById('start').addEventListener('click', () => {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growth').value);
    const growRate = parseInt(document.getElementById('rate').value);
    const numCircles = parseInt(document.getElementById('numCircles').value);
    const container = document.getElementById('circle-container');

    // Clear any existing circles
    container.innerHTML = '';

    for (let i = 0; i < numCircles; i++) {
        createCircle(container, width, growthAmount, growRate);
    }
});

function createCircle(container, initialWidth, growthAmount, growRate) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = circle.style.height = initialWidth + 'px';
    
    // Position the circle randomly within the container
    circle.style.left = Math.random() * (container.clientWidth - initialWidth) + 'px';
    circle.style.top = Math.random() * (container.clientHeight - initialWidth) + 'px';

    let currentWidth = initialWidth;
    const growInterval = setInterval(() => {
        currentWidth += growthAmount;
        circle.style.width = circle.style.height = currentWidth + 'px';
    }, growRate);

    circle.addEventListener('click', () => {
        clearInterval(growInterval);
        circle.remove();
    });

    container.appendChild(circle);
}
