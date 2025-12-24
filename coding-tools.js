// Simple JavaScript for AI Coding Tools page
document.addEventListener('DOMContentLoaded', function() {
    // Hide load more button since all tools are already visible
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
    
    console.log('AI Coding Tools page loaded successfully - All 10 tools visible');
});