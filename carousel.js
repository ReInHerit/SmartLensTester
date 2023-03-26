const carousel = document.querySelector('.carousel');
const mediaContainers = document.querySelectorAll('.media-container');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');
const media = document.querySelectorAll('.media');
const logo = document.querySelector('.logo');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');

let currentMediaIndex = 0;

function pauseMedia(index) {
    media[index].pause();
}

playButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = event.target.dataset.mediaIndex;
        playMedia(index);
    });
});

pauseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = event.target.dataset.mediaIndex;
        pauseMedia(index);
    });
});

function showMedia() {
    mediaContainers.forEach((mediaContainer, index) => {
        if (index === currentMediaIndex) {
            mediaContainer.classList.add('active');
            if (media[index].tagName === 'VIDEO') {
                media[index].play();
            }
        } else {
            mediaContainer.classList.remove('active');
            if (media[index].tagName === 'VIDEO') {
                media[index].pause();
                media[index].currentTime = 0;
            }
        }
    });
}

prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener('click', () => {
        if (currentMediaIndex === 0) {
            currentMediaIndex = mediaContainers.length - 1;
        } else {
            currentMediaIndex--;
        }
        showMedia();
    });
});

nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener('click', () => {
        if (currentMediaIndex === mediaContainers.length - 1) {
            currentMediaIndex = 0;
        } else {
            currentMediaIndex++;
        }
        showMedia();
    });
});

logo.addEventListener('click', () => {
    currentMediaIndex = 0;
    showMedia();
});

showMedia();
