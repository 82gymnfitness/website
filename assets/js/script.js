// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// EmailJS Configuration
// IMPORTANT: Create config.js from config.example.js with your actual credentials
// config.js is gitignored for security
let CONFIG = {
    EMAILJS_SERVICE_ID: 'YOUR_SERVICE_ID',
    EMAILJS_TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
    EMAILJS_PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
};

// Try to load config.js if it exists (for local development)
// For GitHub Pages, you'll need to update the values above directly before deploying
// Or use environment variables in your build process
try {
    // This will work if config.js exists (not committed to git)
    if (typeof window.CONFIG !== 'undefined') {
        CONFIG = window.CONFIG;
    }
} catch (e) {
    console.warn('config.js not found, using default values');
}

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
    } else {
        console.error('EmailJS library not loaded');
    }
})();

// Form validation functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    // Check if it has at least 10 digits
    return digits.length >= 10 && /^[\d\s+\-().]+$/.test(phone);
}

function showFormError(message) {
    const formStatus = document.getElementById('form-status');
    formStatus.innerHTML = `<p class="error-message">${message}</p>`;
    formStatus.style.display = 'block';
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

function validateContactForm(form) {
    const name = form.elements['from_name'].value.trim();
    const email = form.elements['from_email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const message = form.elements['message'].value.trim();

    // Name validation
    if (name.length < 2) {
        showFormError('Please enter a valid name (at least 2 characters)');
        return false;
    }

    if (name.length > 100) {
        showFormError('Name is too long (maximum 100 characters)');
        return false;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showFormError('Please enter a valid email address');
        return false;
    }

    // Phone validation
    if (!isValidPhone(phone)) {
        showFormError('Please enter a valid phone number (at least 10 digits)');
        return false;
    }

    // Message validation
    if (message.length < 10) {
        showFormError('Message is too short (at least 10 characters)');
        return false;
    }

    if (message.length > 5000) {
        showFormError('Message is too long (maximum 5000 characters)');
        return false;
    }

    return true;
}

// Form submission handler with EmailJS
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form before submitting
        if (!validateContactForm(this)) {
            return;
        }

        // Disable submit button to prevent multiple submissions
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Send email via EmailJS
        emailjs.sendForm(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);

                // Show success message
                formStatus.innerHTML = '<p class="success-message">Thank you! Your message has been sent successfully. We will get back to you soon!</p>';
                formStatus.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);

            }, function(error) {
                console.log('FAILED...', error);

                // Show error message
                formStatus.innerHTML = '<p class="error-message">Oops! Something went wrong. Please try again or contact us directly at 82gymnfitness@gmail.com</p>';
                formStatus.style.display = 'block';

                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            })
            .finally(function() {
                // Re-enable submit button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.about-card, .pricing-card, .features-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});
