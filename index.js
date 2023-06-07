// & Get the HTML elements using selectors
const root = document.querySelector('html');

const switchBtn = document.querySelector('.switch-btn');

const content = document.querySelector('.content');

// & Change the page from light to dark with switch button
switchBtn.addEventListener('click', () => {
    root.classList.toggle('dark');

    if (root.classList.contains('dark')) {
        content.innerText = 'Welcome to the Dark Side : )!!!';
    } else {
        content.innerText = 'Come into the Light : )!!!';
    }
})