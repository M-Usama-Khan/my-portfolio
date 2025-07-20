var typed = new Typed('.text', {
    strings: ['Mobile Developer', 'Web Developer'],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 300,
    loop: true
});

// Scroll animation trigger
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Initialize scroll animation
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Click/tap animations for interactive elements
document.querySelectorAll('.click-animate').forEach(element => {
    // Desktop hover effect
    element.addEventListener('mouseenter', () => {
        element.classList.add('pulse-animation');
    });
    
    element.addEventListener('mouseleave', () => {
        element.classList.remove('pulse-animation');
    });
    
    // Click/tap animation
    element.addEventListener('click', () => {
        element.classList.remove('pulse-animation');
        element.classList.add('pulse-once');
        
        setTimeout(() => {
            element.classList.remove('pulse-once');
        }, 500);
    });
    
    // Mobile touch feedback
    element.addEventListener('touchstart', () => {
        element.classList.add('click-animate');
    });
    
    element.addEventListener('touchend', () => {
        element.classList.remove('click-animate');
    });
});

// Special animation for skills bars
document.querySelectorAll('.bar, .radial-bar').forEach(skill => {
    skill.addEventListener('click', function() {
        this.classList.add('bounce-animation');
        setTimeout(() => {
            this.classList.remove('bounce-animation');
        }, 500);
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
document.querySelector('.header').appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    this.classList.toggle('bx-x');
});