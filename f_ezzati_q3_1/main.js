function setDarkMode() {
    let element = document.getElementById('theme')
    element.style.cssText = `
    background-color: #111b2d;
    color:#eee;
    `
    let title = document.getElementById('title')
    title.innerText = 'Dark Mode'
}

function setLightMode() {
    let element = document.getElementById('theme')
    element.style.cssText = `
    background-color: #ddd;
    color:#000;
    `
    let title = document.getElementById('title')
    title.innerText = 'Light Mode'
}