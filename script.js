// Basic interaction script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Rei do Aviator LP Loaded');
    
    // Video setup - ensure it plays smoothly
    const video = document.querySelector('.background-video');
    if (video) {
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        
        // Force play on load
        video.play().catch(err => {
            console.log('Video autoplay prevented:', err);
        });
    }
    
    // Meta Pixel - Lead event on button click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton && typeof fbq !== 'undefined') {
        ctaButton.addEventListener('click', function(e) {
            // Dispara o evento de Lead no Meta Pixel
            fbq('track', 'Lead');
            console.log('Lead event tracked');
        });
    }
});
