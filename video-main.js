// Main JavaScript for AI Video Tools Website

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === 'auto' && prefersDark)) {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
    
    // ===== TOOL CARD DETAILS TOGGLE =====
    const detailButtons = document.querySelectorAll('.show-details');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const details = toolCard.querySelector('.tool-details');
            const icon = this.querySelector('i');
            
            details.classList.toggle('active');
            
            if (details.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-times-circle"></i> Hide Details';
                // Scroll to the details if they're long
                if (window.innerWidth < 768) {
                    details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            } else {
                this.innerHTML = '<i class="fas fa-info-circle"></i> Details';
            }
            
            // Close other open cards on mobile
            if (window.innerWidth < 768) {
                const allCards = document.querySelectorAll('.tool-card');
                allCards.forEach(card => {
                    if (card !== toolCard) {
                        const otherDetails = card.querySelector('.tool-details');
                        const otherButton = card.querySelector('.show-details');
                        if (otherDetails.classList.contains('active')) {
                            otherDetails.classList.remove('active');
                            otherButton.innerHTML = '<i class="fas fa-info-circle"></i> Details';
                        }
                    }
                });
            }
        });
    });
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== NEWSLETTER SUBSCRIPTION =====
    const subscribeBtn = document.getElementById('subscribeBtn');
    const newsletterEmail = document.getElementById('newsletterEmail');
    
    subscribeBtn.addEventListener('click', function() {
        const email = newsletterEmail.value.trim();
        
        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            newsletterEmail.focus();
            return;
        }
        
        // In a real application, you would send this to your server
        showNotification('Thank you for subscribing! You\'ll get updates on new AI tools.', 'success');
        newsletterEmail.value = '';
        
        // Save to localStorage for demo purposes
        const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
        subscribers.push({
            email: email,
            date: new Date().toISOString()
        });
        localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
    });
    
    // Enter key support for newsletter
    newsletterEmail.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            subscribeBtn.click();
        }
    });
    
    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== TOOL FILTERING (Future Feature) =====
    // This can be expanded to add filtering functionality
    const setupFiltering = () => {
        // Could add filtering by category, price, etc.
        console.log('Filtering functionality ready to be implemented');
    };
    
    // ===== UTILITY FUNCTIONS =====
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Add close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1rem;
        `;
        
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
        
        // Add CSS animations
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // ===== PERFORMANCE OPTIMIZATION =====
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Code that runs after scrolling stops
        }, 100);
    });
    
    // Lazy load images (if added in future)
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    };
    
    // Initialize features
    setupFiltering();
    lazyLoadImages();
    
    // ===== ANALYTICS (Demo) =====
    // In a real application, you would use Google Analytics or similar
    console.log('AI Video Tools website loaded successfully');
    
    // Track page views
    const pageViews = parseInt(localStorage.getItem('pageViews') || '0');
    localStorage.setItem('pageViews', (pageViews + 1).toString());
    
    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + D to toggle dark mode
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            themeToggle.click();
        }
        
        // Escape to close all tool details
        if (e.key === 'Escape') {
            const openDetails = document.querySelectorAll('.tool-details.active');
            openDetails.forEach(details => {
                details.classList.remove('active');
                const button = details.closest('.tool-card').querySelector('.show-details');
                button.innerHTML = '<i class="fas fa-info-circle"></i> Details';
            });
        }
    });
    
    // ===== TOOL RATING SYSTEM (Future Feature) =====
    // This can be expanded to allow users to rate tools
    const setupRatingSystem = () => {
        // Add event listeners for rating stars
        // Save ratings to localStorage
    };
});