// AI Coding Tools JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
    
    // Remaining tools data
    const remainingTools = [
        {
            id: 'cursor',
            number: 6,
            title: 'Cursor',
            category: 'AI-First IDE',
            company: 'Anysphere',
            launch: '2023',
            pricing: 'Free + $20/month',
            focus: 'AI-native editing',
            pros: [
                'Built for AI from ground up',
                'Natural language editing',
                'Excellent code generation',
                'Fast and responsive',
                'Modern interface'
            ],
            cons: [
                'New and unproven',
                'Limited extensions',
                'Beta software',
                'Smaller community',
                'Frequent updates needed'
            ],
            plans: [
                { name: 'Hobby', price: 'Free', features: ['Basic AI features', '2000 completions/month', 'GPT-3.5'] },
                { name: 'Pro', price: '$20/month', features: ['Unlimited completions', 'GPT-4 access', 'Priority support'] },
                { name: 'Business', price: '$40/user/month', features: ['Team features', 'Admin controls', 'Custom models'] }
            ],
            tips: [
                { icon: 'fas fa-magic', text: 'Use Ctrl+K for AI commands' },
                { icon: 'fas fa-comment', text: 'Chat with your codebase' },
                { icon: 'fas fa-edit', text: 'Natural language editing' },
                { icon: 'fas fa-sync', text: 'Keep updating regularly' }
            ],
            url: 'https://cursor.sh'
        },
        {
            id: 'sourcegraph-cody',
            number: 7,
            title: 'Sourcegraph Cody',
            category: 'Code Intelligence',
            company: 'Sourcegraph',
            launch: '2023',
            pricing: 'Free + $9/month',
            focus: 'Code understanding',
            pros: [
                'Excellent code search',
                'Context-aware suggestions',
                'Multiple LLM support',
                'Good free tier',
                'Enterprise features'
            ],
            cons: [
                'Complex setup',
                'Resource intensive',
                'Learning curve',
                'Limited IDE support',
                'Newer product'
            ],
            plans: [
                { name: 'Free', price: 'Free', features: ['Basic completions', 'Limited usage', 'Community support'] },
                { name: 'Pro', price: '$9/month', features: ['Unlimited usage', 'Multiple models', 'Priority support'] },
                { name: 'Enterprise', price: 'Custom', features: ['On-premise', 'Custom models', 'Dedicated support'] }
            ],
            tips: [
                { icon: 'fas fa-search', text: 'Use for large codebases' },
                { icon: 'fas fa-brain', text: 'Leverage code intelligence' },
                { icon: 'fas fa-users', text: 'Great for team collaboration' },
                { icon: 'fas fa-database', text: 'Index your repositories' }
            ],
            url: 'https://sourcegraph.com/cody'
        },
        {
            id: 'jetbrains-ai',
            number: 8,
            title: 'JetBrains AI Assistant',
            category: 'IDE Integration',
            company: 'JetBrains',
            launch: '2023',
            pricing: '$8.33/month',
            focus: 'IntelliJ ecosystem',
            pros: [
                'Deep IDE integration',
                'Context-aware',
                'Multiple languages',
                'Refactoring support',
                'Debugging assistance'
            ],
            cons: [
                'JetBrains IDEs only',
                'Subscription required',
                'Limited free tier',
                'Resource usage',
                'Still in development'
            ],
            plans: [
                { name: 'Individual', price: '$8.33/month', features: ['All JetBrains IDEs', 'AI completions', 'Chat support'] },
                { name: 'Organizations', price: '$16.67/user/month', features: ['Team features', 'Admin controls', 'Priority support'] },
                { name: 'All Products Pack', price: '$24.90/month', features: ['All tools included', 'AI assistant', 'Full ecosystem'] }
            ],
            tips: [
                { icon: 'fas fa-tools', text: 'Use with IntelliJ IDEA' },
                { icon: 'fas fa-code', text: 'Great for refactoring' },
                { icon: 'fas fa-bug', text: 'Debugging assistance' },
                { icon: 'fas fa-graduation-cap', text: 'Learn IDE shortcuts' }
            ],
            url: 'https://www.jetbrains.com/ai'
        },
        {
            id: 'codex',
            number: 9,
            title: 'OpenAI Codex',
            category: 'API Service',
            company: 'OpenAI',
            launch: '2021',
            pricing: 'API pricing',
            focus: 'Custom integrations',
            pros: [
                'Powerful AI model',
                'API flexibility',
                'Custom integrations',
                'Multiple languages',
                'Well documented'
            ],
            cons: [
                'Requires development',
                'API costs',
                'Rate limits',
                'No GUI',
                'Technical setup'
            ],
            plans: [
                { name: 'Pay-per-use', price: '$0.002/1K tokens', features: ['API access', 'Flexible usage', 'Documentation'] },
                { name: 'Custom', price: 'Contact sales', features: ['Higher limits', 'Dedicated support', 'Custom terms'] },
                { name: 'Enterprise', price: 'Custom', features: ['On-premise', 'Custom models', 'SLA guarantees'] }
            ],
            tips: [
                { icon: 'fas fa-code', text: 'Build custom tools' },
                { icon: 'fas fa-api', text: 'Use REST API' },
                { icon: 'fas fa-dollar-sign', text: 'Monitor usage costs' },
                { icon: 'fas fa-book', text: 'Read documentation' }
            ],
            url: 'https://openai.com/blog/openai-codex'
        },
        {
            id: 'aiXcoder',
            number: 10,
            title: 'aiXcoder',
            category: 'Enterprise AI',
            company: 'aiXcoder',
            launch: '2019',
            pricing: 'Free + Enterprise',
            focus: 'Enterprise solutions',
            pros: [
                'Free community version',
                'Enterprise features',
                'Multiple languages',
                'Good performance',
                'Privacy focused'
            ],
            cons: [
                'Less popular',
                'Limited community',
                'Fewer integrations',
                'Documentation gaps',
                'Smaller ecosystem'
            ],
            plans: [
                { name: 'Community', price: 'Free', features: ['Basic completions', 'Limited features', 'Community support'] },
                { name: 'Professional', price: 'Contact sales', features: ['Advanced features', 'Priority support', 'Custom training'] },
                { name: 'Enterprise', price: 'Custom', features: ['On-premise', 'Custom models', 'Dedicated support'] }
            ],
            tips: [
                { icon: 'fas fa-building', text: 'Good for enterprises' },
                { icon: 'fas fa-shield-alt', text: 'Privacy-focused option' },
                { icon: 'fas fa-cogs', text: 'Customizable features' },
                { icon: 'fas fa-phone', text: 'Contact for pricing' }
            ],
            url: 'https://www.aixcoder.com'
        }
    ];
    
    // Load more tools functionality
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const moreToolsContainer = document.getElementById('more-tools-container');
    let toolsLoaded = false;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            if (!toolsLoaded) {
                loadRemainingTools();
                toolsLoaded = true;
                loadMoreBtn.style.display = 'none';
            }
        });
    }
    
    function loadRemainingTools() {
        remainingTools.forEach(tool => {
            const toolHTML = generateToolHTML(tool);
            moreToolsContainer.innerHTML += toolHTML;
        });
        
        // Add event listeners to new copy buttons
        document.querySelectorAll('.copy-btn').forEach(btn => {
            if (!btn.getAttribute('data-listener-added')) {
                btn.addEventListener('click', function() {
                    const toolId = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
                    if (toolId) {
                        copyToolInfo(toolId);
                    }
                });
                btn.setAttribute('data-listener-added', 'true');
            }
        });
        
        showNotification('5 more AI coding tools loaded successfully!', 'success');
    }
    
    function generateToolHTML(tool) {
        return `
        <section class="tool-section">
            <div class="tool-header">
                <div class="tool-number">${tool.number}</div>
                <h2 class="tool-title">${tool.title}</h2>
                <span class="tool-category">${tool.category}</span>
            </div>
            
            <div class="divider-line"></div>
            
            <div class="tool-details">
                <div class="basic-info">
                    <div class="info-row">
                        <span class="info-label">Company:</span>
                        <span class="info-value">${tool.company}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Launch:</span>
                        <span class="info-value">${tool.launch}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Pricing:</span>
                        <span class="info-value">${tool.pricing}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Focus:</span>
                        <span class="info-value">${tool.focus}</span>
                    </div>
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
                    <button class="copy-btn" onclick="copyToolInfo('${tool.id}')">
                        <i class="far fa-copy"></i>
                        Copy Details
                    </button>
                </div>
            </div>
        </section>
        `;
    }
    
    // Copy tool info function
    window.copyToolInfo = function(toolId) {
        const toolSection = document.querySelector(`[onclick*="${toolId}"]`)?.closest('.tool-section');
        if (toolSection) {
            const toolTitle = toolSection.querySelector('.tool-title')?.textContent || 'AI Tool';
            const toolCategory = toolSection.querySelector('.tool-category')?.textContent || '';
            const visitBtn = toolSection.querySelector('.visit-btn');
            const url = visitBtn ? visitBtn.href : '';
            
            const textToCopy = `${toolTitle} - ${toolCategory}\n${url}\n\nCopied from AI Coding Tools Guide`;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showNotification(`${toolTitle} details copied to clipboard!`, 'success');
            }).catch(() => {
                showNotification('Failed to copy to clipboard', 'error');
            });
        }
    };
    
    // Notification system
    function showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
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
        
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
        
        // Add CSS animations if not exists
        if (!document.querySelector('#notification-animations')) {
            const style = document.createElement('style');
            style.id = 'notification-animations';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex: 1;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Add copy functionality to existing buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        if (!btn.getAttribute('data-listener-added')) {
            btn.addEventListener('click', function() {
                const onclickAttr = this.getAttribute('onclick');
                if (onclickAttr) {
                    const toolId = onclickAttr.match(/'([^']+)'/)?.[1];
                    if (toolId) {
                        copyToolInfo(toolId);
                    }
                }
            });
            btn.setAttribute('data-listener-added', 'true');
        }
    });
    
    // Smooth scrolling
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
    
    console.log('AI Coding Tools page loaded successfully');
});