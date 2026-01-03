// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon from bars to x
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 2. Typing Text Animation
const textElement = document.querySelector('.typing-text');
const words = ["Developer", "Designer", "Tech Enthusiast", "Club President"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        // Switch to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        // Typing speed
        const speed = isDeleting ? 100 : 200;
        setTimeout(type, speed);
    }
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', type);

// 3. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));