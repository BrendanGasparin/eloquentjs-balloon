function main() {
    addEventListener('keydown', keyPress);
}

function keyPress(e) {
    if(e.key === 'ArrowUp') {
        e.preventDefault();
        const balloon = document.querySelector('.balloon');
        const balloonSize = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
        const newBalloonSize = (parseFloat(balloonSize.substring(0, balloonSize.length - 2)) + 2) + 'px';
        balloon.style.fontSize = newBalloonSize;

        if (parseFloat(newBalloonSize.substring(0, newBalloonSize.length - 2)) > 226) {
            balloon.textContent = '💥';
            removeEventListener('keydown', keyPress);
        }

    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const balloon = document.querySelector('.balloon');
        const balloonSize = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
        const newBalloonSize = (parseFloat(balloonSize.substring(0, balloonSize.length - 2)) - 2) + 'px';
        balloon.style.fontSize = newBalloonSize;
    }
}

document.addEventListener('DOMContentLoaded', main);