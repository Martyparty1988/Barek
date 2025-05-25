// Set up swipe navigation
function setupSwipeNavigation() {
    let touchstartX = 0;
    let touchendX = 0;
    
    document.body.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });
    
    document.body.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const currentScreen = document.querySelector('.screen.active');
        if (!currentScreen) return;
        
        const screenId = currentScreen.id;
        const swipeDistance = touchendX - touchstartX;
        
        // Threshold for swipe detection
        if (Math.abs(swipeDistance) < 100) return;
        
        // Right swipe (go back)
        if (swipeDistance > 0) {
            if (screenId === 'orderScreen') {
                showScreen('villaScreen');
            } else if (screenId === 'paymentScreen') {
                showScreen('orderScreen');
            }
        }
    }
}
