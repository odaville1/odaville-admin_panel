// Admin Panel Configuration
window.API_CONFIG = {
    // Your backend API URL
    baseUrl: 'https://www.odaville.com/api',
    
    // Public website URL
    publicSiteUrl: 'https://www.odaville.com',
    
    // Admin panel URL
    adminUrl: 'https://admin.odaville.com',
    
    // Environment
    environment: window.location.hostname === 'localhost' ? 'development' : 'production'
};

// Set API base URL globally
window.API_BASE_URL = window.API_CONFIG.baseUrl;

console.log('Admin Panel Configuration:', {
    environment: window.API_CONFIG.environment,
    apiUrl: window.API_CONFIG.baseUrl,
    publicSite: window.API_CONFIG.publicSiteUrl
});