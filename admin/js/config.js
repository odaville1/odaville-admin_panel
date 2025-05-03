// Admin Panel Configuration
window.API_CONFIG = {
    // Production API URL - update this with your actual backend URL
    baseUrl: 'https://odaville-backend.herokuapp.com/api', // Replace with your actual backend URL
    
    // Public website URL
    publicSiteUrl: 'https://www.odaville.com',
    
    // Environment
    environment: window.location.hostname === 'localhost' ? 'development' : 'production'
};

// Set API base URL globally
window.API_BASE_URL = window.API_CONFIG.baseUrl;

// Debug logging
console.log('Admin Panel Configuration:', {
    environment: window.API_CONFIG.environment,
    apiUrl: window.API_CONFIG.baseUrl,
    publicSite: window.API_CONFIG.publicSiteUrl
});