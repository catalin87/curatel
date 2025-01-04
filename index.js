function onSubmit(token) {
    console.log('submit', token);
    document.getElementById("contact-form").submit();
}

function openNav() {
    document.getElementById("meniuCuratel").classList.add("open");
}

function closeNav() {
    document.getElementById("meniuCuratel").classList.remove("open");
}

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

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.top = `${100 + Math.random() * (window.innerHeight - 100)}px`;
    sparkle.style.left = `${50 + Math.random() * (window.innerWidth - 100)}px`;
    document.body.appendChild(sparkle);

    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

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
