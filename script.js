document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add a simple animation to the header
    const header = document.querySelector('header');
    header.style.transition = 'all 0.5s ease';
    
    // Add hover effects to feature boxes
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add current year to footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.textContent = footer.textContent.replace('2025', currentYear);
    
    // Add a welcome message
    setTimeout(() => {
        const main = document.querySelector('main');
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.textContent = 'The website is now working properly!';
        welcomeDiv.style.backgroundColor = '#4a6fa5';
        welcomeDiv.style.color = 'white';
        welcomeDiv.style.padding = '10px';
        welcomeDiv.style.borderRadius = '5px';
        welcomeDiv.style.textAlign = 'center';
        welcomeDiv.style.marginBottom = '20px';
        main.insertBefore(welcomeDiv, main.firstChild);
        
        // Fade in animation
        welcomeDiv.style.opacity = '0';
        welcomeDiv.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            welcomeDiv.style.opacity = '1';
        }, 100);
    }, 1000);
});
