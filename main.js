//ex: url = 'sections/experience.html';
//ex: className = 'exp';

function fetchSection(url, className) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementsByClassName(className)[0].innerHTML = data
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
    fetchSection('sections/experience.html', 'exp')
    fetchSection('sections/education.html', 'edu')
    const isDark = document.getElementById('theme-toggle').addEventListener('click', toggleTheme)
});