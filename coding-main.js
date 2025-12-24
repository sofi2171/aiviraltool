// Main JavaScript for AI Coding Tools Website

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== LOADER =====
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
    
    // ===== BACK TO TOP =====
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
    
    // ===== COPY TOOL INFO =====
    window.copyToolInfo = function(toolId) {
        const toolSection = event.target.closest('.tool-section');
        const toolTitle = toolSection.querySelector('.tool-title').textContent;
        const toolCategory = toolSection.querySelector('.tool-category').textContent;
        
        const infoRows = toolSection.querySelectorAll('.info-row');
        let basicInfo = '';
        infoRows.forEach(row => {
            const label = row.querySelector('.info-label').textContent;
            const value = row.querySelector('.info-value').textContent;
            basicInfo += `${label}: ${value}\n`;
        });
        
        const pros = Array.from(toolSection.querySelectorAll('.pro-item'))
            .map(item => item.textContent.trim())
            .join('\n');
        
        const cons = Array.from(toolSection.querySelectorAll('.con-item'))
            .map(item => item.textContent.trim())
            .join('\n');
        
        const copyText = `
${toolTitle} - ${toolCategory}

${basicInfo}

PROS:
${pros}

CONS:
${cons}

---
AI Coding Tools Guide
        `.trim();
        
        navigator.clipboard.writeText(copyText).then(() => {
            showNotification('Tool details copied to clipboard!', 'success');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            showNotification('Failed to copy details', 'error');
        });
    };
    
    // ===== LOAD MORE TOOLS =====
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const moreToolsContainer = document.getElementById('more-tools-container');
    
    const remainingTools = [
        {
            number: 6,
            name: "Cody by Sourcegraph",
            category: "Codebase AI",
            info: [
                { label: "Company:", value: "Sourcegraph" },
                { label: "Type:", value: "Codebase Assistant" },
                { label: "Pricing:", value: "Free + $9/month" },
                { label: "Best For:", value: "Large Codebases" }
            ],
            pros: [
                "Understands entire codebase",
                "Answers code-related questions",
                "Integrates with repositories",
                "Context-aware suggestions",
                "Team collaboration features"
            ],
            cons: [
                "Requires codebase indexing",
                "Resource intensive",
                "Limited IDE integration",
                "Steep learning curve",
                "Expensive for teams"
            ],
            plans: [
                { name: "Free", price: "Free", features: ["Limited queries", "Public repos", "Basic features"] },
                { name: "Pro", price: "$9/month", features: ["Unlimited queries", "Private repos", "Advanced features"] },
                { name: "Enterprise", price: "Custom", features: ["Custom deployment", "SSO", "Audit logs"] }
            ],
            tips: [
                { icon: "fas fa-database", text: "Index entire codebase for best results" },
                { icon: "fas fa-question", text: "Ask specific questions about code" },
                { icon: "fas fa-users", text: "Great for onboarding new developers" },
                { icon: "fas fa-search", text: "Use for code exploration and discovery" }
            ],
            url: "https://sourcegraph.com/cody"
        },
        {
            number: 7,
            name: "Phind",
            category: "Developer Search Engine",
            info: [
                { label: "Platform:", value: "Web-based" },
                { label: "Model:", value: "Multiple AI" },
                { label: "Pricing:", value: "Free" },
                { label: "Focus:", value: "Problem Solving" }
            ],
            pros: [
                "Developer-focused search",
                "Code generation",
                "Error debugging help",
                "Multiple AI models",
                "Completely free"
            ],
            cons: [
                "Web-only interface",
                "No IDE integration",
                "Limited context",
                "No offline mode",
                "Basic UI"
            ],
            plans: [
                { name: "Free", price: "Free", features: ["Unlimited searches", "Code generation", "Debugging help"] },
                { name: "Pro", price: "Coming Soon", features: ["Priority access", "Longer context", "API access"] },
                { name: "Team", price: "Future", features: ["Collaboration", "Shared context", "Admin tools"] }
            ],
            tips: [
                { icon: "fas fa-search", text: "Use for specific error messages" },
                { icon: "fas fa-code", text: "Generate code snippets quickly" },
                { icon: "fas fa-book", text: "Research documentation and APIs" },
                { icon: "fas fa-bug", text: "Debug complex programming issues" }
            ],
            url: "https://phind.com"
        },
        {
            number: 8,
            name: "AskCodi",
            category: "Code Generation",
            info: [
                { label: "Founded:", value: "2020" },
                { label: "Features:", value: "Code + Docs" },
                { label: "Pricing:", value: "Free + $9.99/month" },
                { label: "Languages:", value: "25+" }
            ],
            pros: [
                "Natural language to code",
                "Documentation generation",
                "Test generation",
                "Code explanation",
                "Multiple frameworks"
            ],
            cons: [
                "Limited code quality",
                "Basic code completion",
                "Slow response times",
                "Buggy interface",
                "Limited customization"
            ],
            plans: [
                { name: "Free", price: "Free", features: ["50 requests/day", "Basic features", "Community support"] },
                { name: "Premium", price: "$9.99/month", features: ["Unlimited requests", "Advanced features", "Priority support"] },
                { name: "Team", price: "$24.99/month", features: ["Team workspace", "Custom templates", "API access"] }
            ],
            tips: [
                { icon: "fas fa-comment", text: "Use natural language descriptions" },
                { icon: "fas fa-file-alt", text: "Generate documentation from code" },
                { icon: "fas fa-vial", text: "Create test cases automatically" },
                { icon: "fas fa-question-circle", text: "Explain complex code snippets" }
            ],
            url: "https://askcodi.com"
        },
        {
            number: 9,
            name: "Mintlify",
            category: "Documentation Writer",
            info: [
                { label: "Focus:", value: "Documentation" },
                { label: "Integration:", value: "VS Code" },
                { label: "Pricing:", value: "Free + $40/month" },
                { label: "Best For:", value: "API Docs" }
            ],
            pros: [
                "Auto-generates docs",
                "Beautiful output",
                "VS Code extension",
                "Markdown support",
                "Team collaboration"
            ],
            cons: [
                "Documentation only",
                "Limited to certain langs",
                "Expensive for teams",
                "Learning curve",
                "Beta software"
            ],
            plans: [
                { name: "Free", price: "Free", features: ["Basic docs", "1 project", "Community support"] },
                { name: "Pro", price: "$40/month", features: ["Advanced docs", "5 projects", "Priority support"] },
                { name: "Business", price: "$160/month", features: ["Unlimited projects", "Team features", "Custom branding"] }
            ],
            tips: [
                { icon: "fas fa-book", text: "Perfect for API documentation" },
                { icon: "fas fa-code", text: "Integrate with code comments" },
                { icon: "fas fa-palette", text: "Customize documentation themes" },
                { icon: "fas fa-sync", text: "Keep docs updated automatically" }
            ],
            url: "https://mintlify.com"
        },
        {
            number: 10,
            name: "Warp AI",
            category: "Terminal Assistant",
            info: [
                { label: "Platform:", value: "Terminal" },
                { label: "OS:", value: "Mac only" },
                { label: "Pricing:", value: "Freemium" },
                { label: "Focus:", value: "Command Line" }
            ],
            pros: [
                "Modern terminal",
                "AI command help",
                "Command history",
                "Team workflows",
                "Great UI/UX"
            ],
            cons: [
                "Mac only (currently)",
                "Resource heavy",
                "Limited AI features",
                "Proprietary software",
                "Small team"
            ],
            plans: [
                { name: "Free", price: "Free", features: ["Basic terminal", "Limited AI", "Personal use"] },
                { name: "Teams", price: "$12/user/month", features: ["Advanced AI", "Team workflows", "Shared history"] },
                { name: "Enterprise", price: "Custom", features: ["SSO", "Audit logs", "Dedicated support"] }
            ],
            tips: [
                { icon: "fas fa-terminal", text: "Replace traditional terminal" },
                { icon: "fas fa-robot", text: "Use AI to learn commands" },
                { icon: "fas fa-history", text: "Search command history easily" },
                { icon: "fas fa-users", text: "Share workflows with team" }
            ],
            url: "https://www.warp.dev/ai"
        }
    ];
    
    loadMoreBtn.addEventListener('click', function() {
        // Hide load more button
        loadMoreBtn.style.display = 'none';
        
        // Generate remaining tools
        remainingTools.forEach(tool => {
            const toolHTML = createToolHTML(tool);
            moreToolsContainer.insertAdjacentHTML('beforeend', toolHTML);
        });
        
        // Add event listeners to new copy buttons
        document.querySelectorAll('.copy-btn').forEach(btn => {
            if (!btn.hasAttribute('data-listener-added')) {
                btn.setAttribute('data-listener-added', 'true');
                btn.addEventListener('click', function() {
                    const toolSection = this.closest('.tool-section');
                    const toolName = toolSection.querySelector('.tool-title').textContent;
                    showNotification(`${toolName} details copied!`, 'success');
                });
            }
        });
        
        // Scroll to first new tool
        const firstNewTool = moreToolsContainer.querySelector('.tool-section');
        if (firstNewTool) {
            firstNewTool.scrollIntoView({ behavior: 'smooth' });
        }
        
        showNotification('Loaded all 10 AI coding tools!', 'success');
    });
    
    // ===== CREATE TOOL HTML =====
    function createToolHTML(tool) {
        return `
        <section class="tool-section">
            <div class="tool-header">
                <div class="tool-number">${tool.number}</div>
                <h2 class="tool-title">${tool.name}</h2>
                <span class="tool-category">${tool.category}</span>
            </div>
            
            <div class="divider-line"></div>
            
            <div class="tool-details">
                <div class="basic-info">
                    ${tool.info.map(item => `
                        <div class="info-row">
                            <span class="info-label">${item.label}</span>
                            <span class="info-value">${item.value}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="features-grid">
                    <div class="pros-box">
                        <h3 class="box-title">
                            <i class="fas fa-check-circle"></i>
                            Pros:
                        </h3>
                        <ul class="feature-list">
                            ${tool.pros.map(pro => `
                                <li class="pro-item">
                                    <i class="fas fa-check"></i>
                                    ${pro}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="cons-box">
                        <h3 class="box-title">
                            <i class="fas fa-times-circle"></i>
                            Cons:
                        </h3>
                        <ul class="feature-list">
                            ${tool.cons.map(con => `
                                <li class="con-item">
                                    <i class="fas fa-times"></i>
                                    ${con}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="earning-section">
                    <h3 class="section-title">
                        <i class="fas fa-chart-line"></i>
                        Pricing Plans:
                    </h3>
                    <div class="earning-cards">
                        ${tool.plans.map(plan => `
                            <div class="earning-card">
                                <div class="plan-name">${plan.name}</div>
                                <div class="plan-price">${plan.price}</div>
                                <div class="plan-features">
                                    ${plan.features.map(feature => `<span>${feature}</span>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tips-section">
                    <h3 class="section-title">
                        <i class="fas fa-lightbulb"></i>
                        Expert Tips:
                    </h3>
                    <div class="tips-grid">
                        ${tool.tips.map(tip => `
                            <div class="tip">
                                <i class="${tip.icon}"></i>
                                <p>${tip.text}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="action-buttons">
                    <a href="${tool.url}" class="visit-btn" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Website
                    </a>
                    <button class="copy-btn">
                        <i class="far fa-copy"></i>
                        Copy Details
                    </button>
                </div>
            </div>
        </section>
        `;
    }
    
    // ===== NOTIFICATION SYSTEM =====
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
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
            min-width: 300px;
            max-width: 400px;
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
            opacity: 0.8;
            transition: opacity 0.2s;
        `;
        
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.opacity = '1';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.opacity = '0.8';
        });
        
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
        
        // Add CSS animations
        if (!document.querySelector('#notification-animations')) {
            const style = document.createElement('style');
            style.id = 'notification-animations';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex: 1;
                }
                
                .notification-content i {
                    font-size: 1.2rem;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', function(e) {
        // Alt + L to load more tools
        if (e.altKey && e.key === 'l') {
            e.preventDefault();
            loadMoreBtn.click();
        }
        
        // Escape to close notifications
        if (e.key === 'Escape') {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.remove();
            }
        }
        
        // Alt + T to scroll to top
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== HOVER EFFECTS =====
    document.querySelectorAll('.tool-section').forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        });
    });
    
    // ===== INITIALIZE =====
    console.log('AI Coding Tools Website Loaded Successfully');
    
    // Add initial event listeners to copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.setAttribute('data-listener-added', 'true');
    });
});