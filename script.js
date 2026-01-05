function navigateTo(page) {
    window.location.href = page;
}

function goBack() {
    window.location.href = 'blackwave.html';
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    updateHeaderLogo();
}

function updateHeaderLogo() {
    const headerLogo = document.getElementById('header-logo');
    if (headerLogo) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        headerLogo.src = currentTheme === 'dark' 
            ? 'images/darkmode-logo.jpg' 
            : 'images/lightmode-logo.jpg';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    html.setAttribute('data-theme', savedTheme || 'dark');
    updateHeaderLogo();
}

document.addEventListener('DOMContentLoaded', loadTheme);
