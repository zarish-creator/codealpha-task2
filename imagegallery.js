let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery-image');
    const totalImages = images.length;
    
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
}

function prevImage() {
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}

// Initialize gallery
showImage(currentIndex);
