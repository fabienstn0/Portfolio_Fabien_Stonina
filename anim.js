// Animation du header au chargement
window.addEventListener('load', () => {
    const header = document.getElementById('header');
    header.classList.add('animate');
});

// Indicateur de scroll
window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollIndicator.style.width = scrolled + '%';
});

// Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer les sections
const sections = document.querySelectorAll('[data-section]');
sections.forEach(section => observer.observe(section));

// Observer les éléments animés avec délai
const animatedElements = document.querySelectorAll('[data-animate]');
animatedElements.forEach((element, index) => {
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Délai progressif
                elementObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elementObserver.observe(element);
});

// Observer le footer
const footer = document.getElementById('footer');
const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
footerObserver.observe(footer);

// Animation des cartes de contact au survol
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Effet parallaxe sur le header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrolled = window.scrollY;
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
    header.style.opacity = 1 - (scrolled / 500);
});

// Animation des project-cards au clic
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});