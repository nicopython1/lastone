// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation - DISABLED to prevent content disappearing
document.addEventListener('DOMContentLoaded', function() {
    // Commented out to prevent content from disappearing
    /*
    const animatedElements = document.querySelectorAll('.process-step, .feature-card, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    */
});

// Phone mockup animation
function animatePhoneMockup() {
    const phone = document.querySelector('.phone-mockup');
    if (phone) {
        let isVisible = false;
        
        const phoneObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isVisible) {
                    isVisible = true;
                    phone.style.transform = 'translateY(0) scale(1)';
                    phone.style.opacity = '1';
                }
            });
        }, { threshold: 0.5 });
        
        phone.style.transform = 'translateY(50px) scale(0.9)';
        phone.style.opacity = '0';
        phone.style.transition = 'all 0.8s ease';
        
        phoneObserver.observe(phone);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    animatePhoneMockup();
    
    // Add loading animation to stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        let currentValue = 0;
        const increment = finalValue.includes('+') ? 1 : 1;
        const targetValue = parseInt(finalValue.replace(/\D/g, ''));
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            
            if (finalValue.includes('+')) {
                stat.textContent = '+' + currentValue;
            } else if (finalValue.includes('%')) {
                stat.textContent = currentValue + '%';
            } else if (finalValue.includes('/')) {
                stat.textContent = '24/7';
            } else {
                stat.textContent = currentValue;
            }
        }, 50);
    });
});

// Video placeholder click handler
document.addEventListener('DOMContentLoaded', function() {
    const videoFrame = document.querySelector('.video-frame');
    if (videoFrame) {
        videoFrame.addEventListener('click', function() {
            // Add your video modal or redirect logic here
            alert('Fonctionnalité vidéo à implémenter - Intégrez votre vidéo de démonstration ici');
        });
    }
});

// CTA button handlers
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add your CTA logic here
            if (this.textContent.includes('Démo') || this.textContent.includes('Essai')) {
                e.preventDefault();
                alert('Redirection vers la page d\'inscription ou formulaire de contact');
            }
        });
    });
});

// Pricing card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});

// Mobile menu toggle (for future implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const isHidden = navMenu.style.display === 'none' || navMenu.style.display === '';
    
    if (isHidden) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.padding = '1rem';
        navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navMenu.style.display = 'none';
    }
}

// Add mobile menu button for smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.cursor = 'pointer';
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    navContainer.appendChild(mobileMenuBtn);
    
    // Show/hide mobile menu button based on screen size
    function handleResize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navMenu.style.display = 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'row';
            navMenu.style.position = 'static';
            navMenu.style.background = 'none';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});

// Form validation (for future contact forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add smooth reveal animation for sections
function addRevealAnimation() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
}

// Initialize reveal animations - DISABLED to prevent content disappearing
// document.addEventListener('DOMContentLoaded', addRevealAnimation);

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});
