// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Back to Top Button
window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Countdown Timer
function updateCountdown() {
    // const eventDate = new Date('May 26, 2025 09:00:00').getTime();
    // const now = new Date().getTime();
    // const timeLeft = eventDate - now;

    // const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // document.getElementById('countdown-days').innerText = days.toString().padStart(2, '0');
    // document.getElementById('countdown-hours').innerText = hours.toString().padStart(2, '0');
    // document.getElementById('countdown-minutes').innerText = minutes.toString().padStart(2, '0');
    // document.getElementById('countdown-seconds').innerText = seconds.toString().padStart(2, '0');
}

// Initial call and set interval
// updateCountdown();
// setInterval(updateCountdown, 1000);


// ID emailJs
let publicKey = 'MCmIceYc8kuq4nwyc';
let serviceID = 'service_5vf9yc7';
let templateID = 'template_94nzx5r';

emailjs.init(publicKey); // Reemplaza con tu user ID de EmailJS

// Form Submission Animations
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simple animation for form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;

        submitBtn.innerText = 'Enviando...';
        submitBtn.disabled = true;

        // Obtener los valores del formulario
        const name = this.querySelector('input[placeholder="Nombre"]').value;
        const email = this.querySelector('input[placeholder="Correo electrónico"]').value;
        const subject = this.querySelector('input[placeholder="Asunto"]').value;
        const message = this.querySelector('textarea[placeholder="Mensaje"]').value;

        // Enviar el correo a través de EmailJS
        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response);
                submitBtn.innerText = '¡Enviado!';
                submitBtn.classList.add('btn-success');
                // Reset form
                form.reset();

                // Reset button after animation
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('btn-success');
                }, 2000);
            }, function (error) {
                console.log('FAILED...', error);
                submitBtn.innerText = 'Error al enviar';
                submitBtn.classList.add('btn-danger');
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('btn-danger');
                }, 2000);
            });
    });
});


// Add particle animation to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '1';

    hero.appendChild(particlesContainer);

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 5 + 1;

        particle.style.position = 'absolute';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animation = `floating ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.opacity = Math.random() * 0.5;

        particlesContainer.appendChild(particle);
    }

    // Add keyframes for floating animation
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
                @keyframes floating {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    50% { opacity: 0.8; }
                    100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
                }
            `;
    document.head.appendChild(styleSheet);
}

// Create particles on page load
window.addEventListener('load', createParticles);

// Add scroll animations
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroOffset = hero.offsetTop;
        const heroHeight = hero.offsetHeight;

        if (scrollPosition <= heroHeight) {
            const parallaxValue = scrollPosition * 0.4;
            hero.style.backgroundPositionY = `-${parallaxValue}px`;
        }
    }

    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.feature-card, .speaker-card, .schedule-item');
    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < windowHeight - 100) {
            if (!element.classList.contains('animate-on-scroll')) {
                element.classList.add('animate-on-scroll');
                element.style.animationDelay = '0.2s';
                element.style.animationDuration = '0.6s';
                element.style.animationName = 'fadeInUp';
                element.style.animationFillMode = 'forwards';
            }
        }
    });
});

// Add keyframes for fadeInUp animation
const fadeInUpStyle = document.createElement('style');
fadeInUpStyle.type = 'text/css';
fadeInUpStyle.innerHTML = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translate3d(0, 40px, 0);
                }
                to {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }
            }
        `;
document.head.appendChild(fadeInUpStyle);

// Animate navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.1}s`;
    link.style.animationDuration = '0.5s';
    link.style.animationName = 'fadeIn';
    link.style.animationFillMode = 'forwards';
});

// Add keyframes for fadeIn animation
const fadeInStyle = document.createElement('style');
fadeInStyle.type = 'text/css';
fadeInStyle.innerHTML = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `;
document.head.appendChild(fadeInStyle);

// Add hover effects to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.transition = 'all 0.3s ease';
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });

    button.addEventListener('mouseout', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});