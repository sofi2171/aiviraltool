// main.js - JavaScript for Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to cards
    const cards = document.querySelectorAll('.website-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger animation if clicking on links or buttons
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            // Toggle active class for card
            this.classList.toggle('active');
            
            // If clicking on a card that's already active, remove active class from all cards
            if (this.classList.contains('active')) {
                cards.forEach(c => {
                    if (c !== this) {
                        c.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Add hover effect to action buttons
    const buttons = document.querySelectorAll('.btn-visit, .btn-info');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Show FlexJobs membership plans
    window.showFlexJobsPlans = function() {
        const plans = `
FlexJobs Membership Plans:

🌟 Weekly: $9.95/week
   - Full database access
   - Career coaching
   - Resume review
   - 7-day guarantee

🌟 Monthly: $24.95/month
   - Save 37% vs weekly
   - All weekly features
   - 30-day guarantee

🌟 Quarterly: $39.95/3 months
   - Save 47% vs monthly
   - Best value for most
   - 30-day guarantee

🌟 Annual: $59.95/year
   - Save 80% vs monthly
   - Best long-term value
   - 30-day guarantee

✅ All plans include:
   • 100% scam-free guarantee
   • Hand-screened jobs
   • Company research
   • Skills tests
   • Email alerts
   • Mobile app access
        `;
        
        alert(plans);
    };
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Number keys 1-0 to scroll to corresponding cards
        if (e.key >= '1' && e.key <= '0') {
            const cardIndex = e.key === '0' ? 9 : parseInt(e.key) - 1;
            const cards = document.querySelectorAll('.website-card');
            
            if (cards[cardIndex]) {
                cards[cardIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Add highlight effect
                cards[cardIndex].classList.add('highlight');
                setTimeout(() => {
                    cards[cardIndex].classList.remove('highlight');
                }, 2000);
            }
        }
    });
    
    // Add CSS for highlight effect
    const style = document.createElement('style');
    style.textContent = `
        .website-card.highlight {
            animation: highlightPulse 2s ease;
        }
        
        @keyframes highlightPulse {
            0% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.7); }
            50% { box-shadow: 0 0 0 10px rgba(96, 165, 250, 0); }
            100% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0); }
        }
        
        .website-card.active {
            transform: scale(1.02);
            border-color: #60a5fa;
            box-shadow: 0 15px 40px rgba(96, 165, 250, 0.2);
        }
        
        body.loaded .website-card {
            opacity: 1;
            transform: translateY(0);
        }
        
        .website-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize cards with animation
    setTimeout(() => {
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
    
    // Add copy functionality (optional)
    console.log('Top 10 Earning Websites Guide Loaded Successfully!');
    console.log('Press number keys 1-0 to navigate to specific website cards.');
});