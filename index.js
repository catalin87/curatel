document.querySelectorAll('.overlay-content a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        closeNav();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('curatenieIntretinereBtn').addEventListener('click', function() {
    openPage('curatenieIntretinere', this, 'green');
});

document.getElementById('defaultOpen').addEventListener('click', function() {
    openPage('curatenieGenerala', this, 'green');
});

document.getElementById("defaultOpen").click();

const sparkleInterval = setInterval(createSparkle, 300); // Reduced interval time to 300ms

window.addEventListener('beforeunload', () => {
    clearInterval(sparkleInterval);
});

document.getElementById('acceptCookies').addEventListener('click', function() {
    document.cookie = "cookieConsent=accepted; path=/; max-age=" + (48 * 60 * 60);
    document.getElementById('cookieConsentBanner').style.display = 'none';
    if (typeof gtag === 'function') {
        gtag('config', 'G-2YH8XH5D1Y');
    }
});

document.getElementById('denyCookies').addEventListener('click', function() {
    document.cookie = "cookieConsent=denied; path=/; max-age=" + (48 * 60 * 60);
    document.getElementById('cookieConsentBanner').style.display = 'none';
});

if (getCookie('cookieConsent') !== null) {
    document.getElementById('cookieConsentBanner').style.display = 'none';
    if (getCookie('cookieConsent') === 'accepted' && typeof gtag === 'function') {
        gtag('config', 'G-2YH8XH5D1Y');
    }
}
